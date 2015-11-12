/*
 * play.js
 * Copyright (C) 2015 adelciotto <anthdel.developer@gmail.com>
 *
 * Distributed under terms of the MIT license.
 */

import constants from '../constants';
import Player from '../entities/player';
import Leap from '../leap';

export default class PlayState extends Phaser.State {
    create() {
        this._player = this.add.existing(new Player(this.game));
        this._obstacles = this.add.group();
        this._obstacles.enableBody = true;
        this._obstacles.createMultiple(20, constants.AssetKeys.OBSTACLE);
        this._timer = this.game.time.events.loop(1500, this._handleOnRowOfObstacles, this);
        this._score = 0;

        this._controller = new Leap.LeapController(this.game);
        this._controller.on(Leap.LeapListeners.OnClenching, this._handleOnClenching, this);

        this._scoreText = this.add.text(constants.GAME_WIDTH/2, 20, '0', {
            font: '30px Arial',
            fill: '#FFFFFF'
        });
    }

    update() {
        if (!this._player.inWorld) {
            this._restartGame();
        }

        this.physics.arcade.overlap(this._player, this._obstacles, this._handleHitObstacle, null,
                this);
        this._player.update();
    }

    _restartGame() {
        this._scoreText.text = this._score = 0;
        this._player.reset();
        this._obstacles.forEachAlive((obstacle) => {
            obstacle.alive = false;
            obstacle.x = constants.GAME_WIDTH;
        });
    }

    _addOneObstacle(x, y) {
        const obstacle = this._obstacles.getFirstDead();

        obstacle.reset(x, y);
        obstacle.body.velocity.x = -200;
        obstacle.checkWorldBounds = true;
        obstacle.outOfBoundsKill = true;
    }

    _handleHitObstacle() {
        // if already hit an obstacle before this one, then don't bother
        if (!this._player.alive) {
            return;
        }

        this._player.alive = false;
        this._obstacles.forEachAlive((obstacle) => {
            obstacle.body.velocity.x = 0;
        });
    }

    _handleOnRowOfObstacles() {
        if (!this._player.alive) {
            return;
        }

        const hole = Math.floor(Math.random() * 5) + 1;
        for (let i = 0; i < 8; ++i) {
            if (i !== hole && i !== hole + 1) {
                this._addOneObstacle(constants.GAME_WIDTH, i * 60 + 10);
            }
        }
        this._scoreText.text = ++this._score;
    }

    _handleOnClenching(strength) {
        this._player.jump();
    }
}
