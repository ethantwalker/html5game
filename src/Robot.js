class Robot extends RangedMonster {
    constructor(assetManager, stage, pug, x, y, levelManager){
        super(assetManager, stage, pug, x, y, levelManager);

        this._health = 30;
        this._maxHealth = 30;

        this._sprite.gotoAndStop("robotWalk");
        stage.addChild(this._sprite);
        
        this._sprite.x = x;
        this._sprite.y = y;
    }
}