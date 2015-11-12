/*
 * preload.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import constants from '../constants';

export default class PreloadState extends Phaser.State {
    preload() {
        this.load.image(constants.AssetKeys.PHASER_LOGO, 'res/img/phaser.png');
        this.load.image(constants.AssetKeys.PLAYER, 'res/img/bird.png');
        this.load.image(constants.AssetKeys.OBSTACLE, 'res/img/pipe.png');
    }

    create() {
        this.state.start('play');
    }
}
