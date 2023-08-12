import { Battle } from "./Battle.js";
import { Game } from "./Game.js";
import { Player } from "./Player.js";
import { Quests } from "./Quests.js";
import { Visual } from "./Visual.js";

export class App {
  static game: Game;

  static start = () => {
    App.game = new Game(new Battle(), new Player(), new Quests(), new Visual());
    App.game.start();
  };
}

App.start();
