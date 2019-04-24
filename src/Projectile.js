class Projectile{
    constructor(stage, assetManager, sprite, speed, parentSprite){
        this._parentSprite = parentSprite;
        this._stage = stage;
        this._assetManager = assetManager;
        this._onStage = false;
        this._direction = Projectile.LEFT;
        this._speed = speed;
        this._sprite = assetManager.getSprite("spritesheet");
        this._sprite.gotoAndPlay(sprite); 
        this._canFire = true;
        this._xCap = 700;
        this._currentX = 0;
    }

    get sprite(){
        return this._sprite;
    }

    get onStage(){
        return this._onStage;
    }

    get canFire(){
        return this._canFire;
    }

    set canFire(value){
        this._canFire = value;
    }

    fire(direction){
        if(this._canFire){
            this._canFire = false;
            switch(direction){
                case Projectile.LEFT:
                    this._direction = Projectile.LEFT;
                    break;
                case Projectile.RIGHT:
                    this._direction = Projectile.RIGHT;
                    break;
            }
            this._stage.addChild(this._sprite);
            this._onStage = true;
            this._sprite.x = this._parentSprite.x;
            this._sprite.y = this._parentSprite.y;

            wait(7000);
            this._canFire = true;
        }
    }

    updateMe(){

        let despawn = this._currentX >= this._xCap;

        if(!despawn && this._onStage){
            if(this._onStage){
                if(this._direction == Projectile.LEFT){
                    this._sprite.x -= this._speed;
                    this._currentX += this._speed;
                } else{
                    this._sprite.x += this._speed;
                    this._currentX += this._speed;
                }
            }
        } else {
            this.despawnMe();
        }
    }

    despawnMe(){
        this._stage.removeChild(this._sprite);
        this._onStage = false;
        this._currentX = 0;
    }
}

Projectile.LEFT = 1;
Projectile.RIGHT = 2;