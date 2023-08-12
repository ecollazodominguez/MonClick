"use strict";
import { monsterList, monsterListData } from "./data/monsterList.js";
import { mapList, mapListData } from "./data/mapList.js";
import { shuffle } from "./utilities.js";
import { App } from "./App.js";
import { monsterStatsData } from "./Battle.js";
import { playerStatsData } from "./Player.js";

export class Quests {
  constructor() {}

  //Method to load a random quest before starting the game.
  loadQuest = (hunterRank: number) => {
    //We shuffle the monster list and take the first one.
    const monsters = shuffle(monsterList);
    const questMonster = document.getElementById(
      "monster-name"
    ) as HTMLHeadElement;
    questMonster.textContent = monsters[0].name;
    //We shuffle the map list and take the first one.
    const maps = shuffle(mapList);
    const questMap = document.getElementById(
      "quest-map"
    ) as HTMLParagraphElement;
    questMap.textContent = maps[0].name;
    //We choose difficulty (In this case random between 1 to 5)
    const stars = Math.floor(Math.random() * 5 + 1);
    const questStars = document.getElementById(
      "quest-stars"
    ) as HTMLParagraphElement;
    questStars.textContent = "★".repeat(stars);
    //We calculate all the monsters stats based on the difficulty, monster base stats and hunter rank
    const monsterStats = App.game.battle.calcMonsterStats(
      monsters[0],
      stars,
      hunterRank
    );
    // We return all the data we need to user when the quest begins.
    return [monsters[0], maps[0], stars, monsterStats];
  };

  //Method to start a quest. The hunter will go around the map finding the monster to hunt.
  startQuest = (monster : monsterListData, map : mapListData, stars : number, monsterStats : monsterStatsData, playerStats : playerStatsData) => {
    //We take the Monster, monsterStats, map and difficulty variables from the loadedQuest (loadQuest method).
    App.game.visual.addLogText(
      `                    QUEST
              ----------------------------
              HUNT: ${monster.name}
              MAP: ${map.name}
              DIFFCULTY: ${"★".repeat(stars)}
              ----------------------------`,
      "yellow"
    );
    //We assing a zone to the monster
    let monsterZone = this.monsterLocation(monster, map);
    console.log(`${monster.name} is now in zone ${monsterZone}.`);
    //First zone will always be the camp(0)
    let zone = 0;
    // We declare an number array to save the last zone the hunter passed. So the Hunter doesn't go to the same zone he has explored.
    let lastZone : number[] = [];

    //We start a counter so the monster will move from the zone when the hunter moves every 7 zones.
    let count = 0;

    //Interval who will do all the movements of hunter and monster until they both meet.
    const timer = setInterval(() => {
      //Monster will move if hunter moved 7 zones.
      if (count === 7) {
        monsterZone = this.changeMonsterLocation(monster, map, monsterZone);
        console.log(`${monster.name} is now in zone ${monsterZone}.`);
        count = 0;
      }

      App.game.visual.addLogText(`Zone ${map.zones[zone].number} explored.`);

      if (map.zones[zone].monsterIsHere) {
        //If monster and hunter are in the same zone, we stop the interval and start the battle.
        clearInterval(timer);
        App.game.visual.addLogText(`${monster.name} is here!`, "red");
        App.game.visual.showSpriteMonster();
        App.game.battle.battleMonster(monster.name, monsterStats, playerStats);
      } else {
        //If monster is not in the same zone as hunter, we move the hunter.
        zone = this.movePlayer(map, zone, lastZone);
        App.game.visual.moveSpriteHunter(map, zone);
        count++;
      }
    }, 1000);
  };

  //Method to move the player based on the zone borders.
  movePlayer = (map : mapListData, zone : number, lastZone : number[]) => {
    //We get the borders from the zone which the hunter is standing
    let { borders } = map.zones[zone];
    //we shuffle the borders and get the first one.
    shuffle(borders);

    //We check the lastZone array, if there are 2 zones it means that we can remove the second last since it is not the last zone now.
    // where the player was so he can search again that zone in the future.
    //(In this case second-last means the first position of the array).
    if (lastZone.length === 2) {
      map.zones[lastZone[0]].isPlayerLastPlace = false;
      lastZone.splice(0, 1);
    }

    //Check borders to get the new zone to move.
    zone = this.checkBorders(map, zone, borders, lastZone);
    return zone;
  };

  //Method to check the borders and get the new zone the hunter will move
  checkBorders = (map : mapListData, zone :number, borders: number[], lastZone : number[]) => {
    //Check if the hunter is in a deadend and fix it.
    this.checkDeadEnd(map, borders, lastZone);
    //Recorremos en función de la cantidad de fronteras que tiene la zona actual
    //For loop for borders
    for (let i = 0; i < borders.length; i++) {
      //Assign the possible new hunter zone to move to a variable.
      let newZone = borders[i];
      //Check if the newHunterZone was the hunter last place.
      if (!map.zones[newZone].isPlayerLastPlace) {
        //In case it isn't, we will move to this zone.
        //Mark the hunter zone as hunter last place.
        map.zones[zone].isPlayerLastPlace = true;
        //And save that last zone in the array of lastZone.
        lastZone.push(zone);
        //Mark the old zone as the hunter is not there anymore.
        map.zones[zone].playerIsHere = false;
        //We update the zone to the new one.
        zone = map.zones[newZone].number;
        //Mark the new zone as where the hunter is.
        map.zones[zone].playerIsHere = true;
        //Stop the loop
        break;
      }
    }
    return zone;
  };

    //Method to check if there is a deadend and fix it so the hunter can move back.
  checkDeadEnd = (map : mapListData, borders : number[], lastZone : number[]) => {
    // If there is only 1 border and the lastZone array only have 1 value it means that
    // the hunter is in a deadend. To fix it we remove the last place condition on the zone so the
    // hunter can move to the same zone and leave.
    if (borders.length === 1 && lastZone.length === 1) {
      map.zones[lastZone[0]].isPlayerLastPlace = false;
    }
  };

  //Method set the new zone monster location
  monsterLocation = (monster: monsterListData, map : mapListData) => {
    //TODO: Monster to have different Zones where appear. will be using the monster variable for it.
    const monsterLocations = map.monsterZones;
    //We shuffle the array of possible locations and take the first one.
    shuffle(monsterLocations);
    const monsterZone = monsterLocations[0];
    //We mark the zone where the monster is.
    map.zones[monsterZone].monsterIsHere = true;
    return monsterZone;
  };

  //Method to change the monster location
  changeMonsterLocation = (monster: monsterListData, map: mapListData, monsterZone : number) => {
    //We try to change the monster location where the monster is not standing.
    let newMonsterZone = this.monsterLocation(monster, map);
    while (monsterZone == newMonsterZone) {
      newMonsterZone = this.monsterLocation(monster, map);
    }
    //Mark that the monster is not longer standing in the old zone.
    map.zones[monsterZone].monsterIsHere = false;
    //Devolvemos la nueva zona
    return newMonsterZone;
  };
}
