import { App } from "./App.js";
import { playerStatsData } from "./Player.js";
import { monsterListData } from "./data/monsterList.js";

export type monsterStatsData = {
  attack: number,
  hp: number,
  defense: number,
  weakness: string[]
}

export class Battle {

  constructor() {
  }

  //battle against the monster
  battleMonster = (monsterName: string, monsterStats : monsterStatsData, playerStats : playerStatsData) => {
    App.game.visual.addLogText("Starting battle...", "red");
    //calculate player damage
    const playerDamage = this.playerAttack(monsterStats, playerStats);

    //start the battle, 2 seconds of interval
    const battle = setInterval(() => {
      //to be more "realistic" we made a damage variation of 5%.
      let finalDamage = Math.floor(
        Math.random() * (playerDamage * 0.1) + playerDamage * 0.95
      );
      App.game.visual.addLogText(
        `Player attacks ${monsterName} dealing ${finalDamage} damage.`
      );

      //we substract the hp from the monster with the final damage.
      monsterStats.hp -= finalDamage;
      if (monsterStats.hp <= 0) {
        //if hp is 0 or less i dead.
        App.game.visual.addLogText(`${monsterName} is dead!`, "red");
        //TODO: add money depending of monster and difficulty
        clearInterval(battle);
      } else {
        App.game.visual.addLogText(
          `${monsterStats.hp} HP left for ${monsterName}`,
          "lightcoral"
        );
      }
    }, 2000);
  };

  calcMonsterStats = (
    monster: monsterListData,
    stars: number,
    hunterRank: number
  ) => {
    //calculate monster stats based on diffculty and rank of the player.
    //defense stat changes to a % reduction for player damage.
    const attack = monster.stats.attack * stars;
    const hp = monster.stats.hitpoints * stars * hunterRank;
    const defense = (monster.stats.defense * stars * hunterRank) / 100;
    const weakness = monster.weakness;
    return {
      attack,
      hp,
      defense,
      weakness,
    } as monsterStatsData;
  };

  //This function calculates the actual damage is going to deal to the specific monster based on raw attack, ele attack
  //and monster defense
  playerAttack = (monsterStats : monsterStatsData, playerStats : playerStatsData) => {
    //raw attack
    let totalAttack = playerStats.raw;
    //check ele weakness of monster and sum eleattack to raw attack
    monsterStats.weakness.forEach((weakElement) => {
      switch (weakElement) {
        case "Fire":
          totalAttack += playerStats.eleFire;
          break;
        case "Water":
          totalAttack += playerStats.eleWater;
          break;
        case "Thunder":
          totalAttack += playerStats.eleThunder;
          break;
        case "Ice":
          totalAttack += playerStats.eleIce;
          break;
        case "Dragon":
          totalAttack += playerStats.eleDragon;
          break;
        default:
          break;
      }
    });
    console.log("monsterdefense" + monsterStats.defense);
    console.log("monsterdefenseredc" + monsterStats.defense / 100);
    console.log("monsterhp" + monsterStats.hp);
    console.log("totalattack" + totalAttack);
    //calc reduced attack due to monster defense
    //reduced attack is based in a % reduction from monster defense.
    const reducedAttack =
      totalAttack - totalAttack * (monsterStats.defense / 100);
    console.log("reducedattack" + reducedAttack);
    return reducedAttack;
  };
}
