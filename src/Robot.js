class Robot extends RangedMonster {
    constructor(assetManager, stage, pug, x, y){
        super(assetManager, stage, pug, x, y);

        this._health = 50;
        this._maxHealth = 50;

        this._sprite.gotoAndStop("robotWalk");
        stage.addChild(this._sprite);
        
        this._sprite.x = x;
        this._sprite.y = y;
    }
}