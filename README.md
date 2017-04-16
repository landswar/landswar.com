# landswar.com

[![dependency status](https://david-dm.org/landswar/landswar.com.svg)](https://david-dm.org/landswar/landswar.comgame)
[![dev-dependencies status](https://david-dm.org/landswar/landswar.com/dev-status.svg)](https://david-dm.org/landswar/landswar.com#info=devDependencies)

The source of the [LandsWar website](https://www.landswar.com).

## What is LandsWar?

LandsWar is a turn-based tactics online video game inspired by Advance Wars.

There are 3 types of units in the game (we don't have define the number of units in each category):

- ground units
- air units
- naval units

Also, there are a lot of different type of ground with bonus or malus for units.

With LandsWar, you will be able to play against your friend and people from all around the world.

## How to play?

Coming soon...

## How to run locally?

First, you need to run the server: [https://github.com/landswar/server](https://github.com/landswar/server)

Then, you can clone the repo, install dependencies and start the Webpack dev server:

```bash
git clone https://github.com/landswar/landswar.com.git
# or by ssh: git clone git@github.com:landswar/landswar.com.git
cd landswar.com
yarn
yarn start
```

The website will be available at ```http://127.0.0.1:9000/```.

## Questions / Bugs

If you find a bug or want a new feature, don't hesitate to [create an issue](https://github.com/landswar/landswar.com/issues).

## License

[GNU AFFERO GENERAL PUBLIC LICENSE](LICENSE)