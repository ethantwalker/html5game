class MainMenu extends Screen{
    constructor(assetManager, stage, pug){
        super(assetManager, stage, pug);

        let background = assetManager.getSprite("spritesheet");
        background.gotoAndStop("mainMenu");
        this._screen.addChild(background);

        let btnNewGame = assetManager.getSprite("spritesheet");
        btnNewGame.gotoAndStop("txtNewGame");
        btnNewGame.buttonHelper = new createjs.ButtonHelper(btnNewGame, "txtNewGame", "txtNewGame", "txtNewGame", false, this._hitAreaSprite, "hitArea");
        btnNewGame.on("click", this.hideMe, this);
        this._screen.addChild(btnNewGame);
        
        btnNewGame.x = this._screen.getBounds().width / 2;
        btnNewGame.y = this._screen.getBounds().height / 2;
    }

}