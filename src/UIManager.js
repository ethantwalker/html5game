class UIManager{
    constructor(stage, assetManager, pug){
        this._assetManager = assetManager;
        this._pug = pug;
        this._stage = stage;
        this._hearts = [];

        this.buildHealthBar();
    }

    //initially builds the health bar
    
    buildHealthBar(){
        this._hearts = [];
        let lastX = this._pug.sprite.x - 300;

        //loop for the amount of maximum health the player has
        for(let i = 0; i < this._pug.maxHealth; i++){

            let heartSprite = this._assetManager.getSprite("spritesheet");

            //checks the players health
            //if the player has taken damage, we want to still show the maximum health the can have represented by full and empty hearts
            if(i < this._pug.health){
                heartSprite.gotoAndPlay("heart");
            } else{
                heartSprite.gotoAndPlay("emptyHeart");
            }

            heartSprite.y = this._pug.sprite.y - 350;
            if(i != 0){
                lastX += 70;
            }
            heartSprite.x = lastX;

            this._hearts.push(heartSprite);
            this._stage.addChild(heartSprite);
        }   
    }

    updateHealth(){
        //remove hearts from stage
        for(let heart of this._hearts){
            this._stage.removeChild(heart);
        }

        //rebuild health
        this.buildHealthBar();
    }

    update(willUpdate){
        if(willUpdate) return;
        this.updateHealth();
    }
}