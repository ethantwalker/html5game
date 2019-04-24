class LevelManager {
    constructor(stage, assetManager, pug){

        this._pug = pug;
        this._pugSprite = pug.sprite;


        //collection of platforms
        //this is the least yucky way i know how to do something like this
        this._platforms = [
            new Platform(150, 200, stage, assetManager, "platformSmall", this._pug),
            new Platform(300, 200, stage, assetManager, "platformSmall", this._pug),
            new Platform(450, 200, stage, assetManager, "platformSmall", this._pug),
            new Platform(600, 200, stage, assetManager, "platformSmall", this._pug),
            new Platform(750, 200, stage, assetManager, "platformSmall", this._pug),
            new Platform(900, 200, stage, assetManager, "platformSmall", this._pug),
            new Platform(1050, 200, stage, assetManager, "platformSmall", this._pug),
            new Platform(1200, 200, stage, assetManager, "platformSmall", this._pug),
            new Platform(1350, 200, stage, assetManager, "platformSmall", this._pug),
            new Platform(1500, 200, stage, assetManager, "platformSmall", this._pug),
            new Platform(1500, -125, stage, assetManager, "platformSmall", this._pug),
            new Platform(1800, -200, stage, assetManager, "platformSmall", this._pug),
            new Platform(2100, -275, stage, assetManager, "platformSmall", this._pug),
            new Platform(2400, -350, stage, assetManager, "platformSmall", this._pug),
            new Platform(2100, -700, stage, assetManager, "platformSmall", this._pug),
            new Platform(2550, -350, stage, assetManager, "platformSmall", this._pug),
            new Platform(2700, -350, stage, assetManager, "platformSmall", this._pug),
            new Platform(2850, -350, stage, assetManager, "platformSmall", this._pug),
            new Platform(3000, -350, stage, assetManager, "platformSmall", this._pug),
            new Platform(3150, -350, stage, assetManager, "platformSmall", this._pug),
            new Platform(3800, -350, stage, assetManager, "platformSmall", this._pug),
            new Platform(1650, 200, stage, assetManager, "platformSmall", this._pug),
            new Platform(1800, 200, stage, assetManager, "platformSmall", this._pug),
            new Platform(1950, 200, stage, assetManager, "platformSmall", this._pug),
            new Platform(2100, 200, stage, assetManager, "platformSmall", this._pug),
            new Platform(2250, 200, stage, assetManager, "platformSmall", this._pug),
            new Platform(2400, 200, stage, assetManager, "platformSmall", this._pug)
        ];

        //collection of enemies/entities
        this._entities = [
            new Robot(assetManager, stage, pug, 1500, 5),
            new Bear(assetManager, stage, pug, 2850, -600)
        ];
    
    }

    checkCollision(X, Y, sprite1, sprite2) {

        let sprite1Bounds = sprite1.getBounds();
        let sprite2Bounds = sprite2.getBounds();

        if (sprite1.x > sprite2.x + sprite2Bounds.width || 
            sprite1.x + sprite1Bounds.width < sprite2.x + X || sprite1.y + Y > sprite2.y + sprite2Bounds.height || 
            sprite1.y + sprite1Bounds.height < sprite2.y  + Y){
           return false;
       } else{
           
           return true;
       }
    }

    update(){

        //!!!! WILL OPTIMIZE LATER THIS IS JUST A TEST
        //checks if all sprites/entities are colliding with a platform

        console.log(this._pugSprite.x, this._pugSprite.y);

        for(let platform of this._platforms){
            if(this.checkCollision(100, 90, platform.sprite, this._pugSprite) || this._pug.dead){
                this._pug.gravity = false;
                this._pug.resetJump();
                this._pug.jumpSound = true;
                break;
            } else{
                this._pug.gravity = true;
            }

        }
    
        for(let entity of this._entities){
            if(!entity.dead){
                entity.update();

                for(let platform of this._platforms){
                    if(this.checkCollision(100, 90, platform.sprite, entity.sprite)){
                        entity.gravity = false;
                        break;
                    } else{
                        entity.gravity = true;
                    }
                }

                if(this.checkCollision(100, 90, this._pugSprite, entity.sprite)){
                    this._pug.damageMe();

                    if((this._pug.slashing && this._pug.sprite.currentFrame == 34)){
                        entity.damageMe();
                    }
                }

                if(entity.projectile && entity.projectile.onStage){
                    if(this.checkCollision(0, -50, this._pugSprite, entity.projectile.sprite)){
                        this._pug.damageMe();
                        entity.projectile.despawnMe();
                    }
                }
            } else{
                if(entity.projectile && entity.projectile.onStage){
                    entity.projectile.despawnMe();
                }
            }
        }
    }

}