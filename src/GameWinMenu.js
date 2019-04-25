class GameWinMenu extends Screen{
    constructor(assetManager, stage, pug, levelManager){
        super(assetManager, stage, pug);

        this._levelManager = levelManager;
        let background = assetManager.getSprite("spritesheet");
        background.gotoAndStop("winGame");
        this._screen.addChild(background);

        let btnNewGame = assetManager.getSprite("spritesheet");
        btnNewGame.gotoAndStop("txtNewGame");
        btnNewGame.buttonHelper = new createjs.ButtonHelper(btnNewGame, "txtNewGame", "txtNewGame", "txtNewGame", false, this._hitAreaSprite, "hitArea");
        btnNewGame.on("click", this.reset, this);
        this._screen.addChild(btnNewGame);
        
        btnNewGame.x = this._screen.getBounds().width / 2;
        btnNewGame.y = this._screen.getBounds().height / 2;
    }

    reset(){
        this._levelManager.resetMe();
        this.hideMe();
        this._pug.resetMe();
        this._stage.removeChild(this._screen);
        this._inMenu = false;
        console.log("toggle");

    }


    
}