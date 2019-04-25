class Bear extends Monster {
    constructor(assetManager, stage, pug, x, y, levelManager){
        super(assetManager, stage, pug, x, y, levelManager);

        this._health = 60;
        this._maxHealth = 60;

        this._sprite.gotoAndStop("bearWalk");
        stage.addChild(this._sprite);
        
        this._sprite.x = x;
        this._sprite.y = y;
    }
}