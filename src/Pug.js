class Pug {
    constructor(stage, assetManager){

        this._stage = stage;

        this._sprite = assetManager.getSprite("spritesheet");
        this._sprite.type = 'pug';
        this._sprite.mover = new Mover(this._sprite, stage);
        
        this._health = 6;
        this._maxHealth = 6;
        this._invuln = false;

        //mover variables
        this._canJump = this._sprite.mover.canJump;
        this._gravity = this._sprite.mover.gravity;
        this._dead = false;

        this._slashing = false;        
        this._jumpSound = true;

        this._sprite.gotoAndPlay("pugWalk");
        stage.addChild(this._sprite);
    }


    // ----------------------------------------------- getters n setters
     
    get health(){
        return this._health;
    }

    set health(value){
        this._health = value;
    }

    get maxHealth(){
        return this._maxHealth;
    }

    get jumpSound(){
        return this._jumpSound;
    }

    set jumpSound(value){
        this._jumpSound = value;
    }

    get sprite(){
        return this._sprite;
    }

    get speed(){
        return this._sprite.mover.speed;
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

    set dead(value){
        this._dead = value;
    }

    get slashing(){
        return this._slashing;
    }

    // ----------------------------------------------- mover related methods

    //when the player collides with a platform, allow them to jump again
    resetJump(){
        this._sprite.mover.resetJump();
        
    }

    //find out whether or not the player can jump
    get canJump(){
        this._canJump = this.sprite.mover.canJump;
        return this._canJump;
    }

    set canJump(value){
        this.sprite.mover.canJump = value;
        
    }

    moveMe(direction){
        this._sprite.mover.direction = direction;
        if(!this._sprite.mover.moving){
            if(this.dead){
                this.resetMe();
            }

             if(direction == Mover.UP || direction == Mover.UPLEFT || direction == Mover.UPRIGHT){
                //this._sprite.gotoAndStop("pugJump");
             } else if(direction == Mover.LEFT || direction == Mover.RIGHT){
                //this._sprite.gotoAndStop("pugWalk");
            }
            
            this._sprite.mover.startMe();
        } 
    }

    stopMe(){
        this._sprite.mover.stopMe();
    }


    // ----------------------------------------------- public methods

    //slashing function
    //makes it public that the pug is slashing
    slash(){
        if(!this._slashing){
            this._slashing = true;
            this._sprite.gotoAndPlay("pugWalkSlash"); 
            createjs.Sound.play("slashSound");
            
            this._sprite.on("animationend", (e) => {
                e.remove();
                this._slashing = false;
                this._sprite.gotoAndPlay("pugWalk"); 
            });
        }
    }

    jump(){
        // this._sprite.gotoAndPlay("pugJump");
        // this._sprite.on("animationend", (e) => {
        //     e.remove();
        //     this._sprite.stop();
        // });

        if(this._jumpSound){
            // createjs.Sound.play("jumpSound");
            this._jumpSound = false;
        }
    }

    //the function that is called when the player gets damaged
    damageMe(){
        if(this._health > 0  && this._invuln == false){
            this._health--;
            this._invuln = true;
            this._sprite.alpha = 0.6;
            createjs.Sound.play("hurtSound");

            setTimeout(()=> {
                this._invuln = false;
                this._sprite.alpha = 1;
            }, 3000);

            console.log("damaged: " + this._health);
        } else if(this._health == 0){
            this.killMe();
        }
    }

    killMe(){
        //play death animation
        if(!this._dead){
            this.stopMe();
            this._dead = true;
            this._sprite.x = 150;
            this._sprite.y = 100;
            this._sprite.gotoAndPlay("pugDead");
            createjs.Sound.play("deathSound");

            this._sprite.on("animationend", (e) => {
                e.remove();
                this._sprite.stop();
            });
        }
    }
    

    // ----------------------------------------------- update method
    // called every tick
    
    update(){
        this._sprite.mover.update();


        //simulates a "moving camera" effect
        this._stage.regX = this._sprite.x - 360;
        this._stage.regY = this._sprite.y - 400;
    }

    // ----------------------------------------------- testing only!

    //testing purposes
    //resets user to the start of the stage and restores health
    resetMe() {
        this._sprite.gotoAndStop("pugWalk");
        this._dead = false;
        this._sprite.x = 400;
        this._sprite.y = 5;
        this._health = this._maxHealth;
    }
}