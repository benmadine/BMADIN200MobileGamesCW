//
// ─── THIS SCRIPT PURPOSE IS TO SERVE AS THE MAIN SCRIPT. IT REFERENCES ALMOST EVERYTHING IN THE PROJECT.
//

//
// ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: R E F E R E N C E S   T H E   O T H E R   C L A S S E S   F O U N D   I N   T H E   P R O J E C T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
//


document.write("<script src = 'CanvasManager.js' type = 'text/javascript'></script>");
document.write("<script src = 'SpriteManager.js' type = 'text/javascript'></script>");
document.write("<script src = 'PlayerMovement.js' type = 'text/javascript'></script>");
document.write("<script src = 'EnemyMovement.js' type = 'text/javascript'></script>");
document.write("<script src = 'SpawnEnemies.js' type = 'text/javascript'></script>");
document.write("<script src = 'PlayerScore.js' type = 'text/javascript'></script>");
document.write("<script src = 'PlayerCollisions.js' type = 'text/javascript'></script>");
document.write("<script src = 'CollisionDetection.js' type = 'text/javascript'></script>");
document.write("<script src = 'FontModifier.js' type = 'text/javascript'></script>");
//
// ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── II ──────────
//   :::::: C R E A T E S   T H E   V A R I B A L E S   F O R   T H E   C L A S S E S,   T H E   G A M E   L O O P,   G A M E S T A T E S,   A N D   T H E   P L A Y E R S   L A S T   C L I C K   P O S I T I O N  A N D  S O U N D  M A N A G E R: :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
//


var _FontModifierClass, _CanvasClass, _SpriteClass, _PlayerMovementClass, _EnemyMovementClass, _EnemySpawnClass, _PlayerScoreClass, _PlayerCollisionClass, _CollisionDetection;
var startTimeMS;
var elapsed;
var gameStates = 0;
var lastClick = 0;

var soundManager; 

//
// ──────────────────────────────────────────────────────────────────────────────────────────────────────────── III ──────────
//   :::::: T H I S   F U N C T I O N   I S   C A L L E D   O N   S T A R T U P : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
//


function load()
{ 
    if(storageAvailable('localStorage'))
    {
        if(localStorage.getItem('player_highScore'))
        {
            playerSavedScores();
        }
    }
    else
    {
        // If there is no storage available.
        console.log("Local Storage Not Available!!!");
    }

    // Assings the class varaibles
    _CanvasClass = new CanvasClass();
    _SpriteClass = new SpriteClass();
    _PlayerMovementClass = new PlayerMoveClass();
    _EnemyMovementClass = new EnemyMovementClass();
    _EnemySpawnClass = new EnemySpawnClass();
    _PlayerScoreClass = new PlayerScoreClass();
    _PlayerCollisionClass = new PlayerCollisionClass();
    _CollisionDetection = new CollisionDectionClass();
    _FontModifierClass = new FontModiferClass();

    // Calls the method from the canvas class.
    _CanvasClass.CanvasLoad();

    // Creates event listeners for mouse input. 
    window.addEventListener("mousemove", _PlayerMovementClass.MousePositions, false);
    window.addEventListener("mousedown", MouseDown, false);
    window.addEventListener("click", windowClick, false);

    // Creates events for touch input.
    canvas.addEventListener("touchstart", click, false);
    canvas.addEventListener("touchmove", _PlayerMovementClass.MousePositions, false);
    canvas.addEventListener("touchend", MouseDown, false);
    
    // Calls the init and gameloop functions.
    init();
    gameLoop();
}

//
// ──────────────────────────────────────────────────────────────────────── IV ──────────
//   :::::: T H E   I N I T   F U N T I O N : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────
//


function init()
{
    // Checks to see if the sound maanager isnt empty. Used so that the game will run on browser.
    if(soundManager != null)
    {
        // Plays the first element in the play music array.
        soundManager.playMusic(0);
    }

    // Calls methods from different classes.
    _SpriteClass.SpriteAssign();
    _SpriteClass.EnemyAssign();
    _SpriteClass.StarAssign();
    _SpriteClass.HealthHeartAssign();
    _SpriteClass.AssignWidthHeight();
    // Sets the startTimeMs varaible.
    startTimeMS = Date.now();
}

//
// ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── V ──────────
//   :::::: C H E C K S   I F   T H E   C U R R E N T   B R O W S E R   S U P P O R T S   L O C A L   S T O R A G E : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
//


function storageAvailable(type)
{
    try
    {
        var storage = window[type], x = '__storage_test__';
        storage.setItem(x, x);
        storage.removeItem(x);
        return true;
    }
    catch(e)
    {
        // Possible to get a QuoateExced error, which means that storage is avaible but there is none left.
        return false;
    }
}

//
// ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── VI ──────────
//   :::::: S A V E S   T H E   P L A Y E R   S C O R E S   T O   L O C A L   S T O R A G E : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
//


function PlayerSavedScores()
{ 
    _PlayerScoreClass.playerHighScore = localStorage.getItem('player_highscore');
    console.log(_PlayerScoreClass.playerHighScore);
}

//
// ────────────────────────────────────────────────────────────────────────────────── VII ──────────
//   :::::: T H E   G A M E L O O P   F U N C T I O N : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────
//


function gameLoop()
{
    // Sets the elapsed varaible
    elapsed = (Date.now() - startTimeMS)/1000;
    // Calls the scrolling background method
    _SpriteClass.BackgroundScroll();
    // Switch statement used to differentiate between the different game states
    switch(gameStates)
    {
        // Within, methods are loaded.
        case 0:
        _CollisionDetection.CheckCollision();
        _SpriteClass.RenderStartGame();
        break;
        case 1:    
        lastClick.x = 0; lastClick.y = 0;
        _SpriteClass.RenderMainGame();
        _PlayerScoreClass.UpdateScore(elapsed);
        _EnemyMovementClass.Movement();   
        _PlayerCollisionClass.PlayerCollisions();
        break;
        case 2:
        _PlayerScoreClass.playerHealth = 3;
        _CollisionDetection.CheckCollision();
        _SpriteClass.RenderGameOver();
        break;
    }
    // Sets the statTimeMs varaible to the ucrrent time.
    startTimeMS = Date.now();
    // Tells the browser to call gameloop to update the animations.
    requestAnimationFrame(gameLoop);
}

//
// ────────────────────────────────────────────────────────────────────────────────────── VIII ──────────
//   :::::: R E S E T S   T H E   P L A Y E R   S T A T S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────────
//


function ResetGame()
{
    // Sets the game state to 1, which is the main game.
    gameStates = 1;
    // Sets the players score back to zero.
    _PlayerScoreClass.playerScore = 0;
    // Sets player's health back to three
    _PlayerScoreClass.playerHealth = 3;
    // Re-renders the players health icons.
    _SpriteClass.HealthHeartAssign();
}

//
// ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── IX ──────────
//   :::::: T H E   L I S T E N E R S   F O R   T H E   M O U S E   A N D   T O U C H   I N P U T : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
//


function windowClick(e)
{
    e.preventDefault();
    lastClick = {x:e.clientX, y:e.clientY};
}

function click(e)
{
    e.preventDefault();
    var touchX = e.touches[0].pageX - canvas.offsetLeft;
    var touchY = e.touches[0].pageY - canvas.offsetTop;

   lastClick = {x:e.touches[0].pageX,y:e.touches[0].pageY};
}

function MouseDown(e)
{
    e.preventDefault();
    click(e);
}

//
// ────────────────────────────────────────────────────────── MAIN GAME ENDED ─────
//