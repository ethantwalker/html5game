class RangedMonster extends Monster{
    constructor(assetManager, stage, pug, x, y){
        super(assetManager, stage, pug, x, y);
        this._projectile = new Projectile(this._stage, assetManager, "laserPellet", 20, this._sprite);
    }

    get projectile(){
        return this._projectile;
    }

    //if the player is within a 'range' it will try to fire a projectile at the player
    tryRangedAttack(inRange){

            
            

        if(inRange && !this.projectile.onStage && this._projectile.canFire){
            if(this._sprite.x - this._pugSprite.x >= 0){
                this._projectile.fire(Projectile.LEFT);
            } else if (this._sprite.x - this._pugSprite.x <= 0){
                this._projectile.fire(Projectile.RIGHT);
            }
        }

            
    }

    update(){
        let inRange = this.withinRange();

        this.chase();
        this.tryRangedAttack(inRange);
        this._projectile.updateMe();

        if(this._dead){
            this._projectile.despawnMe();
        }
    }
}