/*
 * boot.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

var config = require('../config.json');
import constants from '../constants';

export default class BootState extends Phaser.State {
    create() {
        // add the Phaser Debug plugin
        if (config.isDevEnv) {
            this.game.add.plugin(Phaser.Plugin.Debug);
        }

        this.stage.backgroundColor = constants.Colors.SKYBLUE;
        this.physics.startSystem(Phaser.Physics.ARCADE);

        // configure the scale manager
        const ratio = this._getRatio('all', constants.GAME_WIDTH, constants.GAME_HEIGHT);
        if (navigator.isCocoonJS) {
            this.game.world._container.scale.x = ratio.x;
            this.game.world._container.scale.y = ratio.y;
            this.game.world._container.updateTransform();
        } else {
            this.scale.minWidth = constants.GAME_WIDTH;
            this.scale.minHeight = constants.GAME_HEIGHT;
            this.scale.pageAlignHorizontally = this.scale.pageAlignVertically = true;
            this.scale.scaleMode = this.scale.fullScreenScaleMode = Phaser.ScaleManager.SHOW_ALL;
        }

        // capture certain keys to prevent their default actions in the browser.
        // this is only necessary because this is an HTML5 game.
        this.input.keyboard.addKeyCapture([
            Phaser.Keyboard.UP,
            Phaser.Keyboard.DOWN
        ]);
        this.input.maxPointers = 1;

        this.state.start('preload');
    }

    _getRatio(type, w, h) {
        const scaleX = this.game.width / w;
        const scaleY = this.game.height / h;
        const result = { x: 1, y: 1 };

        switch(type) {
            case 'all':
                result.x = scaleX > scaleY ? scaleY : scaleX;
                result.y = scaleX > scaleY ? scaleY : scaleX;
                break;
            case 'fit':
                result.x = scaleX > scaleY ? scaleX : scaleY;
                result.y = scaleX > scaleY ? scaleX : scaleY;
                break;
            case 'fill':
                result.x = scaleX;
                result.y = scaleY;
                break;
        }

        return result;
    }
}
