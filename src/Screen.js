class Screen{
    
    constructor(assetManager, stage, pug){
        this._pug = pug;
        this._pugSprite = pug.sprite;
        this._stage = stage;
        this._screen = new createjs.Container();

        this._hitAreaSprite = assetManager.getSprite("spritesheet");
        this._inMenu = null;
    }

    get inMenu(){
        return this._inMenu;
    }

    set inMenu(value){
        this._inMenu = value;
    }

    showMe(){
        this._stage.addChild(this._screen);
        this._screen.x = this._pugSprite.x - 360;
        this._screen.y = this._pugSprite.y - 400;
        this._inMenu = true;
    }

    hideMe(){
        this._stage.removeChild(this._screen);
        this._inMenu = false;
    }
}