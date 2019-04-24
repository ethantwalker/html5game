class Cat extends Monster{
    constructor(assetManager, stage, catX, catY){
        super(assetManager, stage);

        this._health = 3;
        this._maxHealth = 3;

        this._sprite.gotoAndStop("robotWalk");
        stage.addChild(this._sprite);
        
        this._sprite.x = catX;
        this._sprite.y = catY;
    }
}