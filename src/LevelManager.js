class LevelManager {
    constructor(stage, assetManager, pug, screen){

        this._pug = pug;
        this._pugSprite = pug.sprite;
        this._stage = stage;

        this._gameWinMenu = new GameWinMenu(assetManager, stage, pug, this);

        this._levelData = new LevelData(stage, assetManager, pug, this._gameWinMenu);

        //collection of platforms
        //this is the least yucky way i know how to do something like this
        this._platforms = this._levelData.platforms;

        //collection of enemies/entities
        this._entities = this._levelData.entities;
        this._oldEntities = this._entities;
    
        this._collectables = this._levelData.collectables;
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

        // console.log(this._pugSprite.x, this._pugSprite.y);

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