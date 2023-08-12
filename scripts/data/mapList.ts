export type mapZone = {
  number: number;
  borders: number[]; // Specify the correct type here, if possible
  playerIsHere: boolean;
  monsterIsHere: boolean;
  isPlayerLastPlace: boolean;
  mapCoords: [number, number]; // Specify the correct type for coordinates
};

export type mapListData = {
  name: string;
  img: string;
  monsterZones: number[];
  zones: mapZone[];
};

export const mapList: mapListData[] = [
  {
    name: "Verdant Hills",
    img: "./assets/images/MHGen-Verdant_Hills_Map.webp",
    monsterZones: [2, 3, 4, 5, 9, 10],
    zones: [
      {
        number: 0,
        borders: [1],
        playerIsHere: true,
        monsterIsHere: false,
        isPlayerLastPlace: false,
        mapCoords: [185, 500],
      },
      {
        number: 1,
        borders: [2, 8],
        playerIsHere: false,
        monsterIsHere: false,
        isPlayerLastPlace: false,
        mapCoords: [320, 455],
      },
      {
        number: 2,
        borders: [1, 3, 6],
        playerIsHere: false,
        monsterIsHere: false,
        isPlayerLastPlace: false,
        mapCoords: [420, 305],
      },
      {
        number: 3,
        borders: [2, 4, 9, 10],
        playerIsHere: false,
        monsterIsHere: false,
        isPlayerLastPlace: false,
        mapCoords: [450, -10],
      },
      {
        number: 4,
        borders: [3, 5],
        playerIsHere: false,
        monsterIsHere: false,
        isPlayerLastPlace: false,
        mapCoords: [312, 120],
      },
      {
        number: 5,
        borders: [4, 6],
        playerIsHere: false,
        monsterIsHere: false,
        isPlayerLastPlace: false,
        mapCoords: [312, 215],
      },
      {
        number: 6,
        borders: [2, 5],
        playerIsHere: false,
        monsterIsHere: false,
        isPlayerLastPlace: false,
        mapCoords: [275, 325],
      },
      {
        number: 7,
        borders: [8],
        playerIsHere: false,
        monsterIsHere: false,
        isPlayerLastPlace: false,
        mapCoords: [55, 345],
      },
      {
        number: 8,
        borders: [1, 9, 10, 7],
        playerIsHere: false,
        monsterIsHere: false,
        isPlayerLastPlace: false,
        mapCoords: [140, 275],
      },
      {
        number: 9,
        borders: [3, 8],
        playerIsHere: false,
        monsterIsHere: false,
        isPlayerLastPlace: false,
        mapCoords: [215, 145],
      },
      {
        number: 10,
        borders: [3, 8, 11],
        playerIsHere: false,
        monsterIsHere: false,
        isPlayerLastPlace: false,
        mapCoords: [110, 50],
      },
      {
        number: 11,
        borders: [10, 12],
        playerIsHere: false,
        monsterIsHere: false,
        isPlayerLastPlace: false,
        mapCoords: [20, -35],
      },
      {
        number: 12,
        borders: [11],
        playerIsHere: false,
        monsterIsHere: false,
        isPlayerLastPlace: false,
        mapCoords: [100, -60],
      },
    ],
  },
  {
    name: "Old Desert",
    img: "./assets/images/MHXX-Desert_Map.webp",
    monsterZones: [1, 2, 3, 4, 5, 6, 7, 9],
    zones: [
      {
        number: 0,
        borders: [2],
        playerIsHere: true,
        monsterIsHere: false,
        isPlayerLastPlace: false,
        mapCoords: [230, 85],
      },
      {
        number: 1,
        borders: [2, 5],
        playerIsHere: false,
        monsterIsHere: false,
        isPlayerLastPlace: false,
        mapCoords: [480, 375],
      },
      {
        number: 2,
        borders: [1, 3, 4],
        playerIsHere: false,
        monsterIsHere: false,
        isPlayerLastPlace: false,
        mapCoords: [490, 156],
      },
      {
        number: 3,
        borders: [2, 7],
        playerIsHere: false,
        monsterIsHere: false,
        isPlayerLastPlace: false,
        mapCoords: [265, 0],
      },
      {
        number: 4,
        borders: [2, 6],
        playerIsHere: false,
        monsterIsHere: false,
        isPlayerLastPlace: false,
        mapCoords: [360, 310],
      },
      {
        number: 5,
        borders: [1, 6, 9, 10],
        playerIsHere: false,
        monsterIsHere: false,
        isPlayerLastPlace: false,
        mapCoords: [230, 410],
      },
      {
        number: 6,
        borders: [4, 7],
        playerIsHere: false,
        monsterIsHere: false,
        isPlayerLastPlace: false,
        mapCoords: [230, 235],
      },
      {
        number: 7,
        borders: [3, 6, 10],
        playerIsHere: false,
        monsterIsHere: false,
        isPlayerLastPlace: false,
        mapCoords: [140, 105],
      },
      {
        number: 8,
        borders: [9],
        playerIsHere: false,
        monsterIsHere: false,
        isPlayerLastPlace: false,
        mapCoords: [0, 105],
      },
      {
        number: 9,
        borders: [5, 8],
        playerIsHere: false,
        monsterIsHere: false,
        isPlayerLastPlace: false,
        mapCoords: [50, 250],
      },
      {
        number: 10,
        borders: [5, 7],
        playerIsHere: false,
        monsterIsHere: false,
        isPlayerLastPlace: false,
        mapCoords: [35, 380],
      },
    ],
  },
];
