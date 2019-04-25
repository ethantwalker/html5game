(function(window) {
spritesheet = function() {
	this.initialize();
}
spritesheet._SpriteSheet = new createjs.SpriteSheet({images: ["spritesheet.png"], frames: [[2,2,138,285,0,99.75,137.3],[140,2,138,285,0,99.75,137.3],[278,2,138,285,0,99.75,137.3],[416,2,137,285,0,98.75,137.3],[553,2,135,284,0,96.75,137.3],[688,2,132,284,0,93.75,137.3],[820,2,129,284,0,90.75,137.3],[949,2,124,284,0,85.75,137.3],[1073,2,121,284,0,82.75,137.3],[1194,2,118,285,0,79.75,137.3],[1312,2,138,285,0,99.75,137.3],[1312,2,138,285,0,99.75,137.3],[1450,2,138,282,0,99.75,137.3],[1450,2,138,282,0,99.75,137.3],[1450,2,138,282,0,99.75,137.3],[1588,2,152,277,0,99.75,137.3],[1588,2,152,277,0,99.75,137.3],[1588,2,152,277,0,99.75,137.3],[1740,2,179,239,0,99.75,137.3],[1919,2,175,239,0,95.75,137.3],[2094,2,184,251,0,104.75,149.3],[2278,2,175,239,0,95.75,137.3],[2453,2,175,239,0,95.75,137.3],[2628,2,177,239,0,97.75,137.3],[2805,2,147,288,0,97.75,140.3],[2952,2,140,295,0,101.75,147.3],[3092,2,119,285,0,80.75,137.3],[3211,2,139,285,0,100.75,137.3],[3350,2,158,285,0,76.75,137.3],[3508,2,153,284,0,92.75,137.3],[3661,2,144,297,0,105.75,150.3],[3805,2,128,284,0,89.75,137.3],[3933,2,127,285,0,88.75,137.3],[2,299,138,285,0,99.75,137.3],[140,299,157,285,0,81.75,137.3],[2,2,138,285,0,99.75,137.3],[2,2,138,285,0,105.75,145.3],[297,299,145,281,0,103.75,139.3],[442,299,158,269,0,97.75,128.3],[600,299,194,250,0,116.75,116.30000000000001],[794,299,229,223,0,137.75,100.30000000000001],[1023,299,255,190,0,153.75,82.30000000000001],[1278,299,273,172,0,165.75,82.30000000000001],[1551,299,281,148,0,171.75,79.30000000000001],[1832,299,285,138,0,178.75,72.30000000000001],[2117,299,129,134,0,63.75,72.30000000000001],[2117,299,129,134,0,63.75,72.30000000000001],[2117,299,129,134,0,63.75,72.30000000000001],[2117,299,129,134,0,63.75,72.30000000000001],[2246,299,129,140,0,63.75,72.30000000000001],[2246,299,129,140,0,63.75,72.30000000000001],[2246,299,129,140,0,63.75,72.30000000000001],[2117,299,129,134,0,63.75,72.30000000000001],[2117,299,129,134,0,63.75,72.30000000000001],[2375,299,128,149,0,61.75,87.30000000000001],[2503,299,135,160,0,66.75,98.30000000000001],[2638,299,145,169,0,73.75,107.30000000000001],[2783,299,151,169,0,79.75,107.30000000000001],[2783,299,151,169,0,79.75,107.30000000000001],[2783,299,151,169,0,79.75,107.30000000000001],[2934,299,145,169,0,73.75,107.30000000000001],[2117,299,129,134,0,63.75,72.30000000000001],[3079,299,129,134,0,63.75,72.30000000000001],[2117,299,129,134,0,63.75,72.30000000000001],[3208,299,29,30,0,14.75,17.30000000000001],[3237,299,32,31,0,17.75,18.30000000000001],[3269,299,33,33,0,16.75,19.30000000000001],[3302,299,30,30,0,15.75,17.30000000000001],[3332,299,32,31,0,17.75,18.30000000000001],[3364,299,33,34,0,17.75,19.30000000000001],[3397,299,30,30,0,15.75,17.30000000000001],[3427,299,34,33,0,17.75,18.30000000000001],[3461,299,32,30,0,15.75,16.30000000000001],[3493,299,29,30,0,14.75,17.30000000000001],[3522,299,222,262,0,91.75,168.3],[3522,299,222,262,0,91.75,168.3],[3522,299,222,262,0,91.75,168.3],[3522,299,222,262,0,91.75,168.3],[3744,299,222,262,0,91.75,168.3],[3522,299,222,262,0,91.75,168.3],[3522,299,222,262,0,91.75,168.3],[2,584,222,268,0,91.75,168.3],[224,584,64,80,0,31.75,41.30000000000001],[288,584,75,76,0,34.75,41.30000000000001],[363,584,80,63,0,39.75,32.30000000000001],[443,584,76,75,0,35.75,36.30000000000001],[519,584,64,80,0,31.75,41.30000000000001],[583,584,75,76,0,39.75,37.30000000000001],[658,584,80,63,0,39.75,32.30000000000001],[738,584,76,76,0,39.75,41.30000000000001],[224,584,64,80,0,31.75,41.30000000000001],[814,584,230,178,0,137.75,89.30000000000001],[1044,584,230,178,0,137.75,89.30000000000001],[1274,584,190,526,0,106.75,271.3],[1274,584,190,526,0,106.75,271.3],[1464,584,190,526,0,106.75,271.3],[1654,584,190,525,0,106.75,271.3],[1844,584,190,526,0,106.75,271.3],[1274,584,190,526,0,106.75,271.3],[2034,584,190,526,0,106.75,271.3],[2224,584,252,526,0,168.75,271.3],[2476,584,270,526,0,186.75,271.3],[2746,584,247,526,0,163.75,271.3],[2993,584,145,350,0,94.75,145.3],[2993,584,145,350,0,94.75,145.3],[2993,584,145,350,0,94.75,145.3],[3138,584,153,338,0,94.75,145.3],[3138,584,153,338,0,94.75,145.3],[2993,584,145,350,0,94.75,145.3],[2993,584,145,350,0,94.75,145.3],[2993,584,145,350,0,94.75,145.3],[3291,584,257,350,0,206.75,145.3],[3548,584,302,316,0,166.75,151.3],[3548,584,302,316,0,166.75,151.3],[3548,584,302,316,0,166.75,151.3],[2,1110,302,301,0,166.75,151.3],[304,1110,302,298,0,166.75,151.3],[606,1110,300,312,0,162.75,169.3],[906,1110,281,349,0,137.75,206.3],[1187,1110,317,349,0,173.75,206.3],[1504,1110,363,349,0,219.75,206.3],[1867,1110,316,349,0,172.75,206.3],[1867,1110,316,349,0,172.75,206.3],[2183,1110,45,67,0,23.75,35.30000000000001],[2228,1110,70,74,0,35.75,35.30000000000001],[2298,1110,70,74,0,35.75,35.30000000000001],[2368,1110,58,103,0,30.75,47.30000000000001],[2426,1110,72,53,0,35.75,26.30000000000001],[2498,1110,198,156,0,99.75,78.30000000000001],[2696,1110,113,108,0,56.75,54.30000000000001],[2809,1110,250,67,0,127.75,33.30000000000001],[3059,1110,800,800,0,0.75,0.30000000000001137],[2,1910,802,802,0,1.75,1.3000000000000114],[804,1910,802,802,0,1.75,1.3000000000000114],[1606,1910,272,71,0,0.75,0.30000000000001137],[1878,1910,319,71,0,0.75,0.30000000000001137],[2197,1910,315,71,0,0.75,4.300000000000011],[2512,1910,322,78,0,1.75,4.300000000000011],[2834,1910,800,800,0,0.75,0.30000000000001137]],  animations: { pugWalk:[1,9, true], pugJump:[10,18, true], pugJumpSlash:[19,23, true], pugStandSlash:[24,28, true], pugWalkSlash:[29,34, true], pugStanding:[35,35, true], pugDead:[36,44, true], catStill:[45,45, true], catWalk:[46,52, true], catAttack:[53,60, true], catHairball:[61,63, true], hairballSpin:[64,73, true], squirrelStill:[74,74, true], squirrelThrow:[75,78, true], squrrelJump:[79,81, true], nutSpin:[82,90, true], birdFlap:[91,92, true], bearStill:[93,93, true], bearWalk:[94,98, true], bearAttack:[99,102, true], robotStill:[103,103, true], robotWalk:[104,108, true], robotAttack:[109,111, true], blackPugStill:[112,112, true], blackPugWalk:[113,115, true], blackPugAttack:[116,122, true], boneStill:[123,123, true], emptyHeart:[124,124, true], heart:[125,125, true], stick:[126,126, true], laserPellet:[127,127, true], treasureChest:[128,128, true], swordBeam:[129,129, true], platformSmall:[130,130, true], mainMenu:[131,131, true], pauseMenu:[132,132, true], gameOverMenu:[133,133, true], txtContinue:[134,134, true], txtMainMenu:[135,135, true], txtNewGame:[136,136, true], hitArea:[137,137, true], winGame:[138,138, true]}});
var spritesheet_p = spritesheet.prototype = new createjs.Sprite();
spritesheet_p.Sprite_initialize = spritesheet_p.initialize;
spritesheet_p.initialize = function() {
	this.Sprite_initialize(spritesheet._SpriteSheet);
	this.paused = false;
}

spritesheet_p.pugWalk = function(){
	this.gotoAndPlay("pugWalk");
}
spritesheet_p.pugJump = function(){
	this.gotoAndPlay("pugJump");
}
spritesheet_p.pugJumpSlash = function(){
	this.gotoAndPlay("pugJumpSlash");
}
spritesheet_p.pugStandSlash = function(){
	this.gotoAndPlay("pugStandSlash");
}
spritesheet_p.pugWalkSlash = function(){
	this.gotoAndPlay("pugWalkSlash");
}
spritesheet_p.pugStanding = function(){
	this.gotoAndPlay("pugStanding");
}
spritesheet_p.pugDead = function(){
	this.gotoAndPlay("pugDead");
}
spritesheet_p.catStill = function(){
	this.gotoAndPlay("catStill");
}
spritesheet_p.catWalk = function(){
	this.gotoAndPlay("catWalk");
}
spritesheet_p.catAttack = function(){
	this.gotoAndPlay("catAttack");
}
spritesheet_p.catHairball = function(){
	this.gotoAndPlay("catHairball");
}
spritesheet_p.hairballSpin = function(){
	this.gotoAndPlay("hairballSpin");
}
spritesheet_p.squirrelStill = function(){
	this.gotoAndPlay("squirrelStill");
}
spritesheet_p.squirrelThrow = function(){
	this.gotoAndPlay("squirrelThrow");
}
spritesheet_p.squrrelJump = function(){
	this.gotoAndPlay("squrrelJump");
}
spritesheet_p.nutSpin = function(){
	this.gotoAndPlay("nutSpin");
}
spritesheet_p.birdFlap = function(){
	this.gotoAndPlay("birdFlap");
}
spritesheet_p.bearStill = function(){
	this.gotoAndPlay("bearStill");
}
spritesheet_p.bearWalk = function(){
	this.gotoAndPlay("bearWalk");
}
spritesheet_p.bearAttack = function(){
	this.gotoAndPlay("bearAttack");
}
spritesheet_p.robotStill = function(){
	this.gotoAndPlay("robotStill");
}
spritesheet_p.robotWalk = function(){
	this.gotoAndPlay("robotWalk");
}
spritesheet_p.robotAttack = function(){
	this.gotoAndPlay("robotAttack");
}
spritesheet_p.blackPugStill = function(){
	this.gotoAndPlay("blackPugStill");
}
spritesheet_p.blackPugWalk = function(){
	this.gotoAndPlay("blackPugWalk");
}
spritesheet_p.blackPugAttack = function(){
	this.gotoAndPlay("blackPugAttack");
}
spritesheet_p.boneStill = function(){
	this.gotoAndPlay("boneStill");
}
spritesheet_p.emptyHeart = function(){
	this.gotoAndPlay("emptyHeart");
}
spritesheet_p.heart = function(){
	this.gotoAndPlay("heart");
}
spritesheet_p.stick = function(){
	this.gotoAndPlay("stick");
}
spritesheet_p.laserPellet = function(){
	this.gotoAndPlay("laserPellet");
}
spritesheet_p.treasureChest = function(){
	this.gotoAndPlay("treasureChest");
}
spritesheet_p.swordBeam = function(){
	this.gotoAndPlay("swordBeam");
}
spritesheet_p.platformSmall = function(){
	this.gotoAndPlay("platformSmall");
}
spritesheet_p.mainMenu = function(){
	this.gotoAndPlay("mainMenu");
}
spritesheet_p.pauseMenu = function(){
	this.gotoAndPlay("pauseMenu");
}
spritesheet_p.gameOverMenu = function(){
	this.gotoAndPlay("gameOverMenu");
}
spritesheet_p.txtContinue = function(){
	this.gotoAndPlay("txtContinue");
}
spritesheet_p.txtMainMenu = function(){
	this.gotoAndPlay("txtMainMenu");
}
spritesheet_p.txtNewGame = function(){
	this.gotoAndPlay("txtNewGame");
}
spritesheet_p.hitArea = function(){
	this.gotoAndPlay("hitArea");
}
spritesheet_p.winGame = function(){
	this.gotoAndPlay("winGame");
}
window.spritesheet = spritesheet;
}(window));

