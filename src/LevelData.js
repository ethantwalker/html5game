class LevelData {
    constructor(stage, assetManager, pug, screen){
        //collection of platforms
        //this is the least yucky way i know how to do something like this
        this._stage = stage;
        this._assetManager = assetManager;
        this._pug = pug;
        this._pugSprite = pug.sprite;

        this._platforms = [
            new Platform(150, 200, stage, assetManager, "platformSmall", this._pug),
            new Platform(300, 200, stage, assetManager, "platformSmall", this._pug),
            new Platform(450, 200, stage, assetManager, "platformSmall", this._pug),
            new Platform(600, 200, stage, assetManager, "platformSmall", this._pug),
            new Platform(750, 200, stage, assetManager, "platformSmall", this._pug),
            new Platform(900, 200, stage, assetManager, "platformSmall", this._pug),
            new Platform(1050, 200, stage, assetManager, "platformSmall", this._pug),
            new Platform(1200, 200, stage, assetManager, "platformSmall", this._pug),
            new Platform(1350, 200, stage, assetManager, "platformSmall", this._pug),
            new Platform(1500, 200, stage, assetManager, "platformSmall", this._pug),
            new Platform(1500, -125, stage, assetManager, "platformSmall", this._pug),
            new Platform(1800, -200, stage, assetManager, "platformSmall", this._pug),
            new Platform(2100, -275, stage, assetManager, "platformSmall", this._pug),
            new Platform(2400, -350, stage, assetManager, "platformSmall", this._pug),
            new Platform(2100, -700, stage, assetManager, "platformSmall", this._pug),
            new Platform(1950, -700, stage, assetManager, "platformSmall", this._pug),
            new Platform(1800, -700, stage, assetManager, "platformSmall", this._pug),
            new Platform(1650, -700, stage, assetManager, "platformSmall", this._pug),
            new Platform(1500, -700, stage, assetManager, "platformSmall", this._pug),
            new Platform(1350, -700, stage, assetManager, "platformSmall", this._pug),
            new Platform(1200, -700, stage, assetManager, "platformSmall", this._pug),
            new Platform(850, -1000, stage, assetManager, "platformSmall", this._pug),
            new Platform(400, -1300, stage, assetManager, "platformSmall", this._pug),
            new Platform(250, -1300, stage, assetManager, "platformSmall", this._pug),
            new Platform(100, -1300, stage, assetManager, "platformSmall", this._pug),
            new Platform(-50, -1300, stage, assetManager, "platformSmall", this._pug),
            new Platform(-200, -1300, stage, assetManager, "platformSmall", this._pug),
            new Platform(-350, -1300, stage, assetManager, "platformSmall", this._pug),
            new Platform(-500, -1300, stage, assetManager, "platformSmall", this._pug),
            new Platform(-800, -1550, stage, assetManager, "platformSmall", this._pug),
            new Platform(-500, -1800, stage, assetManager, "platformSmall", this._pug),
            new Platform(-350, -1800, stage, assetManager, "platformSmall", this._pug),
            new Platform(-200, -1800, stage, assetManager, "platformSmall", this._pug),
            new Platform(-50, -1800, stage, assetManager, "platformSmall", this._pug),
            new Platform(100, -1800, stage, assetManager, "platformSmall", this._pug),
            new Platform(350, -2100, stage, assetManager, "platformSmall", this._pug),
            new Platform(100, -2400, stage, assetManager, "platformSmall", this._pug),
            new Platform(-50, -2400, stage, assetManager, "platformSmall", this._pug),
            new Platform(-200, -2400, stage, assetManager, "platformSmall", this._pug),
            new Platform(-350, -2400, stage, assetManager, "platformSmall", this._pug),
            new Platform(-500, -2400, stage, assetManager, "platformSmall", this._pug),
            new Platform(-650, -2400, stage, assetManager, "platformSmall", this._pug),
            new Platform(-800, -2400, stage, assetManager, "platformSmall", this._pug),
            new Platform(-800, -2800, stage, assetManager, "platformSmall", this._pug),
            new Platform(-950, -2400, stage, assetManager, "platformSmall", this._pug),
            new Platform(-1100, -2400, stage, assetManager, "platformSmall", this._pug),
            new Platform(-1250, -2400, stage, assetManager, "platformSmall", this._pug),
            new Platform(-1400, -2400, stage, assetManager, "platformSmall", this._pug),
            new Platform(-450, -3000, stage, assetManager, "platformSmall", this._pug),
            new Platform(-100, -2800, stage, assetManager, "platformSmall", this._pug),
            new Platform(2550, -350, stage, assetManager, "platformSmall", this._pug),
            new Platform(2700, -350, stage, assetManager, "platformSmall", this._pug),
            new Platform(2850, -350, stage, assetManager, "platformSmall", this._pug),
            new Platform(3000, -350, stage, assetManager, "platformSmall", this._pug),
            new Platform(3150, -350, stage, assetManager, "platformSmall", this._pug),
            new Platform(3800, -350, stage, assetManager, "platformSmall", this._pug),
            new Platform(1650, 200, stage, assetManager, "platformSmall", this._pug),
            new Platform(1800, 200, stage, assetManager, "platformSmall", this._pug),
            new Platform(1950, 200, stage, assetManager, "platformSmall", this._pug),
            new Platform(2100, 200, stage, assetManager, "platformSmall", this._pug),
            new Platform(2250, 200, stage, assetManager, "platformSmall", this._pug),
            new Platform(2400, 200, stage, assetManager, "platformSmall", this._pug)
        ];

        this._entities = [
            new Robot(assetManager, stage, pug, 1500, 5, this),
            new Bear(assetManager, stage, pug, 2850, -600, this),
            new Bear(assetManager, stage, pug, -50, -2100, this),
            new Robot(assetManager, stage, pug, 1350, -900, this),
            new Squirrel(assetManager, stage, pug, -60, -1600, this),
            new Squirrel(assetManager, stage, pug, -450, -1600, this),
            new BlackPug(assetManager, stage, pug, -450, -2600, this, screen)
        ];

        this._collectables = [
            new Collectable(stage, assetManager, this, "heart", 850, -1100),
            new Collectable(stage, assetManager, this, "heart", 2400, 100),
            new Collectable(stage, assetManager, this, "heart", 3800, -600),
            new Collectable(stage, assetManager, this, "heart", -800, -1750),
            new Collectable(stage, assetManager, this, "heart", -450, -3300)
        ];
    }

    get entities(){
        return this._entities;
    }

    get collectables(){
        return this._collectables;
    }

    get platforms(){
        return this._platforms;
    }
}