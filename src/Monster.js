class Monster{
    constructor(assetManager, stage, pug, x, y){

        this._type = 'monster';
        this._pug = pug;
        this._pugSprite = pug.sprite;

        this._stage = stage;
    
        this._sprite = assetManager.getSprite("spritesheet");
        this._sprite.mover = new Mover(this._sprite, stage);
        this._sprite.mover.speed = 8;
        this._gravity = this._sprite.mover.gravity;
        
        
        this._dead = false;
    }

    get sprite(){
        return this._sprite;
    }

    get gravity(){
        return this._gravity;
    }

    set gravity(value){
        this._sprite.mover.gravity = value;
        this._gravity = value;
    }

    get dead(){
        return this._dead;
    }
    
    withinRange(){
        return ((this._sprite.x - this._pugSprite.x >= -500) && (this._sprite.y - this._pugSprite.y >= -300)) && ((this._sprite.x - this._pugSprite.x <= 500) && (this._sprite.y - this._pugSprite.y <= 300));
    }

    moveMe(direction){
        this._sprite.mover.direction = direction;
        
        if(!this._sprite.mover.moving){        
            this._sprite.mover.startMe();
        } 
    }


    damageMe(){
        
        this._health -= 10;
        createjs.Sound.play("hurtSound");
        console.log(this._health);

        this._sprite.alpha = 0.6;

        setTimeout(()=> {
            this._sprite.alpha = 1;
        }, 100);

        if(this._health == 0){
           this.killMe();
        }
    }

    killMe(){
        this._dead = true;
        createjs.Sound.play("deathSound");
        this._stage.removeChild(this._sprite);
    }

    stopMe(){
        this._sprite.mover.stopMe();
    }

    chase(){
        if(!this._dead){
            ///MOVEMENT DETECTION
            //I want a monster to only chase the player when it is within a certain range, otherwise it is just plain annoying
            let isWithinRange = this.withinRange();
            if(isWithinRange && (this._sprite.x - this._pugSprite.x >= 0)){
                this.moveMe(Mover.LEFT);
            } else if(isWithinRange && (this._sprite.x - this._pugSprite.x <= 0)){
                this.moveMe(Mover.RIGHT);
            } else {
                this.stopMe();
            }

            this._sprite.mover.update();
        }
    }

    update(){
        this.chase();
    }

}