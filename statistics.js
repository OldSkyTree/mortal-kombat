'use strict';

const {characters} = require('./constants');
const CharactersFactory = require('./characters-factory');
const Game = require('./game');

let i = 0;
let first = {
    player: characters.SCORPION,
    wins: 0,
    loses: 0    
};
let second = {
    player: characters.NOOB_SAIBOT,
    wins: 0,
    loses: 0    
};
const GAME_COUNT = 100;
while(i < GAME_COUNT) {
    let game = new Game(
        CharactersFactory.getCharacter(first.player), 
        CharactersFactory.getCharacter(second.player)
    );
    console.info = () => {};
    while(!game.isFinished()) {
        game.move();
    }
    if (game._firstPlayer.health) {
        first.wins++;
    }
    else {
        first.loses++;
    }
    if (game._secondPlayer.health) {
        second.wins++;
    }
    else {
        second.loses++;
    }
    i++;
}

console.info(`${first.player} wins ${first.wins} times and loses ${first.loses} times`);
console.info(`${second.player} wins ${second.wins} times and loses ${second.loses} times`);