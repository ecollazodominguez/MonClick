import { mapListData } from "./data/mapList";

export class Visual {
  showGame = (map : mapListData) => {
    //Map element
    const mapContainer = document.createElement("div");
    mapContainer.classList.add("map-container");
    //Add map image
    mapContainer.style.backgroundImage = `url(${map.img})`;

    //Quest log element
    const questLog = document.createElement("div");
    questLog.id = "quest-log";

    //Add to the body
    document.body.prepend(questLog);
    document.body.prepend(mapContainer);
  };

  addLogText = (text : string, color : string = "lightblue") => {
    const questLog = document.getElementById("quest-log") as HTMLDivElement;
    const newP = document.createElement("p");
    newP.innerText = text;
    newP.style.color = color;
    questLog.append(newP);
    questLog.scrollTop = questLog.scrollHeight;
  };

  showSpriteHunter = (map : mapListData) => {
    //Map element
    const mapContainer = document.querySelector(".map-container") as HTMLDivElement;
    //New div element who will be the hunter
    const hunterSprite = document.createElement("div");
    //Add the class hunter to the new div
    hunterSprite.classList.add("hunter");
    const [coordX, coordY] = map.zones[0].mapCoords;
    //Take the coords zone from where the hunter is standing and set the sprite with the styles.
    hunterSprite.style.left = `${coordX}px`;
    hunterSprite.style.top = `${coordY}px`;
    //Add hunter to map element.
    mapContainer.append(hunterSprite);
  };

  moveSpriteHunter = (map : mapListData, zone : number) => {
    //Hunter element
    const hunterSprite = document.querySelector(".hunter") as HTMLDivElement;
    const [coordX, coordY] = map.zones[zone].mapCoords;
    //Take the coords zone from where the hunter is standing and set the sprite with the styles.
    hunterSprite.style.left = `${coordX}px`;
    hunterSprite.style.top = `${coordY}px`;
  };

  showSpriteMonster = () => {
    //Map element
    const mapContainer = document.querySelector(".map-container") as HTMLDivElement;
    //New div element who will be the monster
    const monsterSprite = document.createElement("div");
    //Hunter element where will be using its coords.
    const hunterSprite = document.querySelector(".hunter") as HTMLDivElement;
    const hunterPosX = hunterSprite.style.left.split("px")[0];
    const hunterPosY = hunterSprite.style.top.split("px")[0];
    //Add class monster to the element
    monsterSprite.classList.add("monster");
    //Add position styles using the hunter coords data.
    monsterSprite.style.left = `${Number(hunterPosX) - 270}px`;
    monsterSprite.style.top = `${hunterPosY}px`;
    //Add element to map.
    mapContainer.append(monsterSprite);
  };
}
