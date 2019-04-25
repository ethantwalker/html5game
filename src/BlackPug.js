class BlackPug extends Monster {
    constructor(assetManager, stage, pug, x, y, levelManager, screen){
        super(assetManager, stage, pug, x, y, levelManager);

        this._screen = screen;

        this._health = 60;
        this._maxHealth = 60;

        this._sprite.gotoAndStop("blackPugWalk");
        stage.addChild(this._sprite);
        
        this._sprite.x = x;
        this._sprite.y = y;
    }

    killMe(){
        this._dead = true;
        createjs.Sound.play("deathSound");

        this._screen.showMe();

        this._stage.removeChild(this._sprite);

        screen.showMe();

    
    }
}