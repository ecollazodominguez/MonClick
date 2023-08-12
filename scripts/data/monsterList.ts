export type monsterListData = {
  id: number;
  name: string;
  weakness: string[];
  money: number;
  stats: {
    hitpoints: number;
    attack: number;
    defense: number;
  };
};

export const monsterList: monsterListData[] = [
  {
    id: 1,
    name: "Velocidrome",
    weakness: ["Water", "Fire"],
    money: 1000,
    stats: {
      hitpoints: 30,
      attack: 20,
      defense: 15,
    },
  },
  {
    id: 2,
    name: "Yian Kut-ku",
    weakness: ["Water", "Thunder"],
    money: 1500,
    stats: {
      hitpoints: 45,
      attack: 35,
      defense: 30,
    },
  },
];
