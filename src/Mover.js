class Mover {
    
    constructor(sprite, stage) {
        // construct custom event object for object moving off stage
        this._eventStageExit = new createjs.Event("stageExit", true);
        // private property variables
    
        this._speed = 15;
        this._sprite = sprite;

        this._direction = Mover.LEFT;
        this._moving = false;
        this._stage = stage;

        this._gravity = true;

        this._jumping = false;
        this._jumpSpeed = 20;
        this._jumpHeight = 0;
        this._jumpCap = 400;
        this._canJump = true;

        // sprite not animating on construction
        sprite.stop();
    }
    
    // --------------------------------------------------- get/set methods
    set speed(value) {
        this._speed = value;
    }
    get speed() {
        return this._speed;
    }

    get gravity(){
        return this._gravity;
    }

    set gravity(value){
        this._gravity = value;
    }

    get canJump(){
        return this._canJump;
    }
    
    set canJump(value){
        this._canJump = value;
    }
    
    set direction(value) {
        this._direction = value;
    }
    get direction() {
        return this._direction;
    }

    // --------------------------------------------------- public methods
    startMe() {
        this._sprite.play();
        this._moving = true;
    }

    stopMe() {
        if((!this._moving && this._sprite.currentAnimation == "pugWalk")){
            this._sprite.stop();
        }
        this._moving = false;
    }

    resetJump(){
        this._jumpHeight = 0;
        this._canJump = true;
    }
    
    update() {
         // reference sprite object for cleaner code below
         let sprite = this._sprite;


            
        // get current width of sprite on this frame
        // we only need to concern ourselves with width in terms of off stage since we rotate sprite up, down, left, and right
        let width = sprite.getBounds().width;
        if (this._moving) {
            //master direction detection
            //can detect if a sprite is moving up and left/right
            //will also factor in gravity
            switch(this._direction){
                case Mover.UPRIGHT:
                    if(this._jumpHeight < this._jumpCap && this._canJump){
                        this._gravity = false;
                        // moving up
                        sprite.scaleX = -1;
                        //sprite.rotation = 90;
                        sprite.y = sprite.y - this._jumpSpeed;
                        sprite.x = sprite.x + this._speed;
                        this._jumpHeight += this._jumpSpeed;

                        // if (sprite.y < -width) {
                        //     sprite.y = this._stage.canvas.height;
                        //     sprite.dispatchEvent(this._eventStageExit);
                        // }
                    } else{
                        sprite.x = sprite.x + this._speed;
                    }
                    break;
                case Mover.UPLEFT:
                    if(this._jumpHeight < this._jumpCap && this._canJump){
                        this._gravity = false;
                        // moving up
                        sprite.scaleX = 1;
                        //sprite.rotation = 90;
                        sprite.y = sprite.y - this._jumpSpeed;
                        sprite.x = sprite.x - this._speed;
                        this._jumpHeight += this._jumpSpeed;

                        // if (sprite.y < -width) {
                        //     sprite.y = this._stage.canvas.height;
                        //     sprite.dispatchEvent(this._eventStageExit);
                        // }
                    } else{
                        sprite.x = sprite.x - this._speed;
                    }
                    break;
                case Mover.UP:
                    if(this._jumpHeight < this._jumpCap && this._canJump){
                        this._gravity = false;
                        // moving up
                        sprite.scaleX = 1;
                        //sprite.rotation = 90;
                        sprite.y = sprite.y - this._jumpSpeed;
                        this._jumpHeight += this._jumpSpeed;

                        // if (sprite.y < -width) {
                        //     sprite.y = this._stage.canvas.height;
                        //     sprite.dispatchEvent(this._eventStageExit);
                        // }
                    }
                    break;
                case Mover.RIGHT:
                    // moving right
                    sprite.scaleX = -1;
                    sprite.rotation = 0;
                    sprite.x = sprite.x + this._speed;
                    // if (sprite.x > (this._stage.canvas.width + width)) {
                    //     sprite.x = -width;
                    //     sprite.dispatchEvent(this._eventStageExit);
                    // }
                    break;
                case Mover.LEFT:
                    // moving left
                    sprite.scaleX = 1;
                    sprite.rotation = 0;
                    sprite.x = sprite.x - this._speed;
                    // if (sprite.x < -width) {
                    //     sprite.x = this._stage.canvas.width;
                    //     sprite.dispatchEvent(this._eventStageExit);
                    // }
                    break;
                case Mover.DOWN:
                     // moving down
            //     sprite.scaleX = 1;
            //     //sprite.rotation = -90;
            //     sprite.y = sprite.y + this._speed;
            //     if (sprite.y > (this._stage.canvas.height + width)) {
            //         sprite.y = -width;
            //         sprite.dispatchEvent(this._eventStageExit);
            //     }
                    break;
            }

        } 

        //this pulls the sprite down when they are not jumping, or simply moving off a platform
        if(this._gravity){
            //this._canJump = false;
            this._sprite.y += 40;

            if (this._sprite.y > (this._stage.canvas.height + width)) {
                sprite.dispatchEvent(this._eventStageExit);
            }
        }
    }
}

// a better way to hack class constants - works because class is syntatical candy for a function
Mover.LEFT = 1;
Mover.RIGHT = 2;
Mover.UP = 3;
Mover.DOWN = 4;
Mover.UPLEFT = 5;
Mover.UPRIGHT = 6;