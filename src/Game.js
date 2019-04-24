// Munch implemented in HTML5
// GAME 2050 Game Programming I
// Sean Morrow

(function() {

    // game variables
    let stage = null;
    let canvas = null;
    let downKey = false;
    let upKey = false;
    let spaceKey = false;
    let leftKey = false;
    let rightKey = false;
    let escKey = false;
    // frame rate of game
    const FRAME_RATE = 26;
    
    // game objects
    let assetManager;
    let background;
    let pug;
    let robot;
    let mainMenu;
    let pauseMenu;
    let gameOverMenu;

    document.onkeydown = onKeyDown;
        document.onkeyup = onKeyUp;

    // ------------------------------------------------------------ event handlers
    function onReady(e) {
        console.log(">> setup");
        // kill event listener
        e.remove();

        pug = new Pug(stage, assetManager);
        pug.gravity = false;
        pug.resetMe();
        

        pug.sprite.on("stageExit", () => {
            pug.killMe();
        });

    
        mainMenu = new MainMenu(assetManager, stage, pug);
        stage.on("mainClosed", mainMenu.hideMe);

        pauseMenu = new PauseMenu(assetManager, stage, pug);
        gameOverMenu = new GameOverMenu(assetManager, stage, pug);
        
        levelManager = new LevelManager(stage, assetManager, pug);

        //show main menu when the game first loads
        mainMenu.showMe();

        console.log(">> game ready");
        // startup the ticker
        createjs.Ticker.framerate = FRAME_RATE;
        createjs.Ticker.on("tick", onTick);
        
    }

    // function onStartGame(e) {
    //     // remove click event on background
    //     e.remove();

    //     // current state of keys
    //     leftKey = false;
    //     rightKey = false;
    //     upKey = false;
    //     downKey = false;

    //     // setup event listeners for keyboard keys
    //     document.onkeydown = onKeyDown;
    //     document.onkeyup = onKeyUp;
    // }

    function onKeyDown(e) {
        // which keystroke is down?
        if (e.keyCode == 37) leftKey = true;
        else if (e.keyCode == 39) rightKey = true;
        else if (e.keyCode == 38){ 
            upKey = true;
        }
        else if (e.keyCode == 40) downKey = true;
        else if (e.keyCode == 32){
            spaceKey = true;
            pug.slash();
        }
        else if (e.keyCode == 82) pug.resetMe();
        else if (e.keyCode == 27){
            escKey = true;
            disableKeys();
            pauseMenu.toggle();
        } 
    }

    function disableKeys(){
        upKey = false;
        rightKey = false;
        leftKey = false;
    }

    function onKeyUp(e) {
        // which keystroke is up?
        if (e.keyCode == 37) leftKey = false;
        else if (e.keyCode == 39) rightKey = false;
        else if (e.keyCode == 38){
            upKey = false;
            pug.canJump = false;
            pug.gravity = true;
        }
        else if (e.keyCode == 40) downKey = false;
        else if (e.keyCode == 27) escKey = false;
        else if (e.keyCode == 32){
            spaceKey = false;
        }
    }


    function onTick(e) {
        // TESTING FPS
        document.getElementById("fps").innerHTML = createjs.Ticker.getMeasuredFPS();
        
       

        if(!pauseMenu.inMenu && !escKey) {
            if (upKey && rightKey){
                pug.jump();
                pug.gravity = false;
                pug.moveMe(Mover.UPRIGHT);
            } else if (upKey && leftKey){
                pug.jump();

                pug.gravity = false;
                pug.moveMe(Mover.UPLEFT);
            } else if (leftKey) {
                pug.moveMe(Mover.LEFT);
            } else if (rightKey) {
                pug.moveMe(Mover.RIGHT);
            } else if (upKey) {
                pug.jump();

                //pug.gravity = false;
                pug.moveMe(Mover.UP);
            }  else {
                if(!pug.dead ){
                    pug.stopMe();
                }
            }
        }

        //show game over menu if dead
        if(pug.dead){
            gameOverMenu.showMe();
        }
        
        //do not update anything if the player is in any menu
        if(!mainMenu.inMenu && !pauseMenu.inMenu && !gameOverMenu.inMenu && !pug.dead){
            levelManager.update();
        }

        pug.update();
        stage.update();
    }


    // ------------------------------------------------------------------------- main method
    function main() {
        console.log(">> initializing");

        // get reference to canvas
        canvas = document.getElementById("myCanvas");
        // set canvas to as wide/high as the browser window
        canvas.width = 800;
        canvas.height = 800;
        // create stage object
        stage = new createjs.StageGL(canvas);
        stage.setClearColor("#acccfc");
        stage.enableMouseOver(10);

        // construct preloader object to load spritesheet and sound assets
        assetManager = new AssetManager(stage);
        stage.on("allAssetsLoaded", onReady);
        
        // load the assets
        assetManager.loadAssets(manifest);
    }

    main();
})(); 