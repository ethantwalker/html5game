class Squirrel extends RangedMonster{
    constructor(assetManager, stage, pug, x, y, levelManager){
        super(assetManager, stage, pug, x, y, levelManager);

        this._health = 20;
        this._maxHealth = 20;

        this._sprite.gotoAndStop("squirrelStill");
        stage.addChild(this._sprite);
        
        this._sprite.x = x;
        this._sprite.y = y;
        
        this._projectile = new Projectile(this._stage, assetManager, "nutSpin", 20, this._sprite);
    }
}