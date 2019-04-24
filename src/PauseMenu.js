class PauseMenu extends Screen{
    constructor(assetManager, stage, pug){
        super(assetManager, stage, pug);
        this._pug = pug;
        this._pugSprite = pug.sprite;

        let background = assetManager.getSprite("spritesheet");
        background.gotoAndStop("pauseMenu");
        this._screen.addChildAt(background, 0);

        this._inMenu = false;
    }

    toggle(){
        this._inMenu = !this._inMenu;

        if(this._inMenu){
            this.showMe();
        } else{
            this.hideMe();
        }
    }
}