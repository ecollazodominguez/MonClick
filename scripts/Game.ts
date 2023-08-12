import { Battle } from "./Battle.js";
import { Player } from "./Player.js";
import { Quests } from "./Quests.js";
import { Visual } from "./Visual.js";

export class Game {
  constructor(
    public battle: Battle,
    public player: Player,
    public quests: Quests,
    public visual: Visual
  ) {
    this.battle = new Battle();
    this.player = new Player();
    this.quests = new Quests();
    this.visual = new Visual();
  }

  start = () => {
    //We get the start button and the intro section
    const [introSection] = document.getElementsByClassName("intro");
    const startButton = document.getElementById("play") as HTMLButtonElement;
    //We load the player and calc all his stats.
    let player = this.player.loadPlayer();
    let playerStats = this.player.calcPlayerStats(player);
    //We load a quest to start the game
    const [monster, map, stars, monsterStats] = this.quests.loadQuest(
      player.hunterRank
    );

    //Click Listener. On click we add the class "removed" to the intro section so 
    // a opacity transition will happen.
    startButton.addEventListener("click", () => {
      introSection.classList.add("removed");
    });

    //Transition End Listener. When the opacity transition ends. We show the hunter sprite
    //, start the quest and remove the intro section.
    introSection.addEventListener("transitionend", () => {
      this.visual.showGame(map);
      this.visual.showSpriteHunter(map);
      this.quests.startQuest(monster, map, stars, monsterStats, playerStats);
      introSection.remove();
    });
  };
}
