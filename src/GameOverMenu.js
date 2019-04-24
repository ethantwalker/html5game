class GameOverMenu extends Screen{
    constructor(assetManager, stage, pug){
        super(assetManager, stage, pug);

        let background = assetManager.getSprite("spritesheet");
        background.gotoAndStop("gameOverMenu");
        this._screen.addChildAt(background, 0);

        let btnContinue = assetManager.getSprite("spritesheet");
        btnContinue.gotoAndStop("txtContinue");
        btnContinue.buttonHelper = new createjs.ButtonHelper(btnContinue, "txtContinue", "txtContinue", "txtContinue", false, this._hitAreaSprite, "hitArea");
        btnContinue.on("click", this.hideMe, this);
        this._screen.addChild(btnContinue);
        
        btnContinue.x = this._screen.getBounds().width / 2;
        btnContinue.y = this._screen.getBounds().height / 2;
    }

    hideMe(){
        this._pug.resetMe();
        this._stage.removeChild(this._screen);
        this._inMenu = false;
    }
}