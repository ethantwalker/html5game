class LevelManager {
    constructor(stage, assetManager, pug, screen){

        this._pug = pug;
        this._pugSprite = pug.sprite;
        this._stage = stage;

        this._gameWinMenu = new GameWinMenu(assetManager, stage, pug, this);


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
            new Platform(1950, -700, stage, assetManager, "platformSmall", this._pug),
            new Platform(1800, -700, stage, assetManager, "platformSmall", this._pug),
            new Platform(1650, -700, stage, assetManager, "platformSmall", this._pug),
            new Platform(1500, -700, stage, assetManager, "platformSmall", this._pug),
            new Platform(1350, -700, stage, assetManager, "platformSmall", this._pug),
            new Platform(1200, -700, stage, assetManager, "platformSmall", this._pug),
            new Platform(850, -1000, stage, assetManager, "platformSmall", this._pug),
            new Platform(400, -1300, stage, assetManager, "platformSmall", this._pug),
            new Platform(250, -1300, stage, assetManager, "platformSmall", this._pug),
            new Platform(100, -1300, stage, assetManager, "platformSmall", this._pug),
            new Platform(-50, -1300, stage, assetManager, "platformSmall", this._pug),
            new Platform(-200, -1300, stage, assetManager, "platformSmall", this._pug),
            new Platform(-350, -1300, stage, assetManager, "platformSmall", this._pug),
            new Platform(-500, -1300, stage, assetManager, "platformSmall", this._pug),
            new Platform(-800, -1550, stage, assetManager, "platformSmall", this._pug),
            new Platform(-500, -1800, stage, assetManager, "platformSmall", this._pug),
            new Platform(-350, -1800, stage, assetManager, "platformSmall", this._pug),
            new Platform(-200, -1800, stage, assetManager, "platformSmall", this._pug),
            new Platform(-50, -1800, stage, assetManager, "platformSmall", this._pug),
            new Platform(100, -1800, stage, assetManager, "platformSmall", this._pug),
            new Platform(350, -2100, stage, assetManager, "platformSmall", this._pug),
            new Platform(100, -2400, stage, assetManager, "platformSmall", this._pug),
            new Platform(-50, -2400, stage, assetManager, "platformSmall", this._pug),
            new Platform(-200, -2400, stage, assetManager, "platformSmall", this._pug),
            new Platform(-350, -2400, stage, assetManager, "platformSmall", this._pug),
            new Platform(-500, -2400, stage, assetManager, "platformSmall", this._pug),
            new Platform(-650, -2400, stage, assetManager, "platformSmall", this._pug),
            new Platform(-800, -2400, stage, assetManager, "platformSmall", this._pug),
            new Platform(-800, -2800, stage, assetManager, "platformSmall", this._pug),
            new Platform(-950, -2400, stage, assetManager, "platformSmall", this._pug),
            new Platform(-1100, -2400, stage, assetManager, "platformSmall", this._pug),
            new Platform(-1250, -2400, stage, assetManager, "platformSmall", this._pug),
            new Platform(-1400, -2400, stage, assetManager, "platformSmall", this._pug),
            new Platform(-450, -3000, stage, assetManager, "platformSmall", this._pug),
            new Platform(-100, -2800, stage, assetManager, "platformSmall", this._pug),
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
            new Robot(assetManager, stage, pug, 1500, 5, this),
            new Bear(assetManager, stage, pug, 2850, -600, this),
            new Bear(assetManager, stage, pug, -50, -2100, this),
            new Robot(assetManager, stage, pug, 1350, -900, this),
            new Squirrel(assetManager, stage, pug, -60, -1600, this),
            new Squirrel(assetManager, stage, pug, -450, -1600, this),
            new BlackPug(assetManager, stage, pug, -450, -2600, this, this._gameWinMenu)
        ];
        this._oldEntities = this._entities;
    
        this._collectables = [
            new Collectable(stage, assetManager, this, "heart", 850, -1100),
            new Collectable(stage, assetManager, this, "heart", 2400, 100),
            new Collectable(stage, assetManager, this, "heart", 3800, -600),
            new Collectable(stage, assetManager, this, "heart", -800, -1750),
            new Collectable(stage, assetManager, this, "heart", -450, -3300)
        ];
        this._oldCollectables = this._collectables;
    }

    resetMe(){
        this._pug.resetMe();
        this._collectables = this._oldCollectables;
        this._entities = this._oldEntities;
    }

    set pushCollectable(value){
        this._collectables.push(value);
    }

    get collectables(){
        return this._collectables;
    }

    set collectables(value){
        this._collectables = value;
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

        for(let collectable of this._collectables){
            if(this._pug.health != this._pug.maxHealth && !collectable.taken &&  (this.checkCollision(50, 50, collectable.sprite, this._pugSprite))){
                this._pug.healMe();
                this._stage.removeChild(collectable.sprite);
                collectable.taken = true;
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