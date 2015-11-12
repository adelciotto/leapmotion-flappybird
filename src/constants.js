/*
 * constants.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import utils from './utils';

const constants = {
    GAME_WIDTH          : 320,
    GAME_HEIGHT         : 480,

    Colors: {
        SKYBLUE         : 0x87CEFA
    },

    AssetKeys: {
        PHASER_LOGO     : 'phaser-logo',
        PLAYER          : 'player',
        OBSTACLE        : 'obstacle'
    }
};

utils.objFreezeRecursive(constants);
export default constants;
