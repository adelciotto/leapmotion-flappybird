/*
 * index.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import _ from 'underscore';
import constants from './constants';
import states from './states';

window.onload = function() {
    const w = (navigator.isCocoonJS ? window.innerWidth : constants.GAME_WIDTH);
    const h = (navigator.isCocoonJS ? window.innerHeight : constants.GAME_HEIGHT);
    const game = new Phaser.Game(w, h, Phaser.AUTO);

    // add all the game states and then start the boot state
    _.each(states, (val, key) => {
        game.state.add(`${key}`, val);
    });

    game.state.start('boot');
};
