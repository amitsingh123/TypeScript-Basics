import { Game } from './game';
import { Player } from './player';
import { getValue } from "./utility";

let  newGame: Game;

// add click handler to the start game button
document.getElementById('startGame')!.addEventListener('click', () => {
    const player: Player = new Player();
    player.name = getValue('playername');

    const problemCount: number = Number(getValue('problemCount'));
    const factor: number = Number(getValue('factor'));

    newGame = new Game(player, problemCount, factor);
    newGame.displayGame();
});

// add click handler to the calculate score button
document.getElementById('calculate')!.addEventListener('click', () => {
    newGame.calculateScore();
});
