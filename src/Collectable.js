class Collectable{
    constructor(stage, assetManager, levelManager, sprite, X, Y){
        this._levelManager = levelManager;
        this._stage = stage;
        this._assetManager = assetManager;
        this._sprite = assetManager.getSprite("spritesheet");
        this._sprite.gotoAndPlay(sprite); 
        this._sprite.x = X;
        this._sprite.y = Y;
        this._taken = false;

        this._stage.addChild(this._sprite);
    }

    get sprite(){
        return this._sprite;
    }
    
    get taken(){
        return this._taken;
    }
    set taken(value){
        this._taken = value;
    }
}