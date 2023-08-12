export type weaponListData = {
  id: number;
  type: string;
  name: string;
  previousUpgrade: string;
  stats: {
    eleType: string;
    raw: number;
    ele: number;
  };
};

export const weaponList: weaponListData[] = [
  {
    id: 1,
    type: "greatsword",
    name: "asdsa",
    previousUpgrade: "gdsa",
    stats: {
      eleType: "fire",
      raw: 120,
      ele: 50,
    },
  },
  {
    id: 500,
    type: "swordandshield",
    name: "dfgsd",
    previousUpgrade: "gfs",
    stats: {
      eleType: "water",
      raw: 130,
      ele: 30,
    },
  },
  {
    id: 1000,
    type: "longsword",
    name: "gdfgds",
    previousUpgrade: "",
    stats: {
      eleType: "",
      raw: 150,
      ele: 0,
    },
  },
];
