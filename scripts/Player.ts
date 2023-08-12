import { weaponList, weaponListData } from "./data/weaponList.js";

export type playerData = {
    name: string,
    money: number,
    hunterRank: number,
    weapons: weaponListData[]
}

export type playerStatsData = {
  raw : number,
  eleFire : number,
  eleWater : number,
  eleThunder : number,
  eleIce : number,
  eleDragon : number,
}

export class Player {
  constructor() {}

  loadPlayer = () => {
    let dbPlayer = {
      name: "Mirroriced",
      money: 1000,
      hunterRank: 50,
      weapons: [weaponList[0], weaponList[1], weaponList[2]],
    } as playerData;
    let player = dbPlayer;
    return player;
  };

  calcPlayerStats = (player : playerData) => {
    //we check every weapon player have and substract all the damage.
    let raw = 0;
    let eleFire = 0;
    let eleWater = 0;
    let eleThunder = 0;
    let eleIce = 0;
    let eleDragon = 0;
    player.weapons.forEach((weapon) => {
      raw += weapon.stats.raw;
      eleFire += weapon.stats.eleType == "fire" ? weapon.stats.ele : 0;
      eleWater += weapon.stats.eleType == "water" ? weapon.stats.ele : 0;
      eleThunder += weapon.stats.eleType == "thunder" ? weapon.stats.ele : 0;
      eleIce += weapon.stats.eleType == "ice" ? weapon.stats.ele : 0;
      eleDragon += weapon.stats.eleType == "dragon" ? weapon.stats.ele : 0;
    });

    return {
      raw,
      eleFire,
      eleWater,
      eleThunder,
      eleIce,
      eleDragon,
    } as playerStatsData;
  };

  // export const dbPlayer = [
  //   {
  //     name: "Mirroriced",
  //     money: 1000,
  //     weapons: {
  //       greatsword: [weaponList[0]],
  //       swordAndShield: [weaponList[1]],
  //       longSword: [weaponList[2]],
  //       insectGlaive: [],
  //       dualBlades: [],
  //       switchAxe: [],
  //       chargeBlade: [],
  //       hammer: [],
  //       huntingHorn: [],
  //       lance: [],
  //       gunLance: [],
  //       lighBowGun: [],
  //       heavyBowGun: [],
  //       bow: [],
  //     },
  //   },
  // ];
}
