## leapmotion-flappybird

### View:

The template is running live [here](http://adelciotto.github.io/leapmotion-flappybird/)

### Preview:

![alt](http://imgur.com/j0EqBym.png)

### Developing:

#### clone the repo

```shell
git clone https://github.com/adelciotto/leapmotion-flappybird.git
cd leapmotion-flappybird
```

#### npm tasks:

* ```npm run dev``` - Builds and scripts and assets in development mode, then
hosts the game at [localhost:8000](http://localhost:8000). All source files and
assets are watched and a browser reload will be triggered on any changes.
* ```npm run prod``` - Builds and scripts and assets in production mode, then
hosts the game at [localhost:8000](http://localhost:8000).
* ```npm run build``` - Builds the scripts and assets in production mode.
This means all source files are minified and all assets are optimised.

#### JS Conventions

We use Javascript ES6 in this project; which is compiled down to ES5 for browser compatibility using [Babel](https://babeljs.io/).
For a complete ES6 reference; go [here](https://babeljs.io/docs/learn-es2015/)

Stick to the JS coding conventions outlined [here](https://github.com/airbnb/javascript) by [airbnb](https://github.com/airbnb)

### Deploying the game

#### push to gh-pages branch

To update the deployed game; please run the gh pages deploy script in the root directory:

```shell
./scripts/deploy
```
