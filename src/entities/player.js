/*
 * player.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import constants from '../constants';

const Gravity = 1000;
const MinRot = 20;
const YVelocity = -200;

export default class Player extends Phaser.Sprite {
    constructor(game) {
        super(game, 25, constants.GAME_HEIGHT/2, constants.AssetKeys.PLAYER);

        this.anchor.set(-0.2, 0.5);
        game.physics.arcade.enable(this);
        this.body.gravity.y = Gravity;

        this._isJumping = false;
    }

    jump() {
        // if the player is dumb, then obviously don't jump
        if (!this.alive) {
            return;
        }

        this.body.velocity.y = YVelocity;
        this._isJumping = true;
        if (this.angle > -MinRot) {
            this.angle--;
        }
    }

    update() {
        // slowely rotate the player downward, up to a certain point
        if (!this._isJumping && this.angle < MinRot) {
            this.angle++;
        }

        if (this.body.velocity.y > 0) {
            this._isJumping = false;
        }
    }

    reset() {
        super.reset(25, constants.GAME_HEIGHT / 2);
    }
}
