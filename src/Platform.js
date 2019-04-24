class Platform {
    constructor(x, y, stage, assetManager, type, pug){
        this._sprite = assetManager.getSprite("spritesheet");
        //test purposes
        this._name = name;
        
        this._sprite.x = x;
        this._sprite.y = y;

        this._sprite.gotoAndStop(type);
        stage.addChild(this._sprite);
    }

    get sprite(){
        return this._sprite;
    }


    checkCollision(checkSprite, name = null){    
        
        let platBounds = this._sprite.getBounds();
        let spriteBounds = checkSprite.getBounds();

         //radius collision
        //tests to see if sprite is within radius
        //obviously not perfect at all
        //but it works if i can tweak it to the sprite's needs
        if (this._sprite.x > checkSprite.x + spriteBounds.width || 
            this._sprite.x + platBounds.width < checkSprite.x + 100 || this._sprite.y + 90 > checkSprite.y + spriteBounds.height || 
            this._sprite.y + platBounds.height < checkSprite.y  + 90){
           return false;
       } else{
           
           return true;
       }

    }
}