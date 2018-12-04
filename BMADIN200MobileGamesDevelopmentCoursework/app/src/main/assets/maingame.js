document.write("<script src = 'CanvasManager.js' type = 'text/javascript'></script>");
document.write("<script src = 'SpriteManager.js' type = 'text/javascript'></script>");
document.write("<script src = 'PlayerMovement.js' type = 'text/javascript'></script>");
document.write("<script src = 'EnemyMovement.js' type = 'text/javascript'></script>");
document.write("<script src = 'SpawnEnemies.js' type = 'text/javascript'></script>");
document.write("<script src = 'PlayerScore.js' type = 'text/javascript'></script>");
document.write("<script src = 'PlayerCollisions.js' type = 'text/javascript'></script>");
document.write("<script src = 'CollisionDetection.js' type = 'text/javascript'></script>");
document.write("<script src = 'FontModifier.js' type = 'text/javascript'></script>");

var _FontModifierClass, _CanvasClass, _SpriteClass, _PlayerMovementClass, _EnemyMovementClass, _EnemySpawnClass, _PlayerScoreClass, _PlayerCollisionClass, _CollisionDetection;
var startTimeMS;
var elapsed;
var gameStates = 0;
var lastClick = 0;

var soundManager; //////////////////////FIX SCALING U CUNT BAG FUCKER SHITE FACE BITCH

function load()
{
    _CanvasClass = new CanvasClass();
    _SpriteClass = new SpriteClass();
    _PlayerMovementClass = new PlayerMoveClass();
    _EnemyMovementClass = new EnemyMovementClass();
    _EnemySpawnClass = new EnemySpawnClass();
    _PlayerScoreClass = new PlayerScoreClass();
    _PlayerCollisionClass = new PlayerCollisionClass();
    _CollisionDetection = new CollisionDectionClass();
    _FontModifierClass = new FontModiferClass();

    _CanvasClass.CanvasLoad();

    window.addEventListener("mousemove", _PlayerMovementClass.MousePositions, false);
    window.addEventListener("mousedown", MouseDown, false);
    window.addEventListener("click", windowClick, false);

    canvas.addEventListener("touchstart", click, false);
    canvas.addEventListener("touchmove", _PlayerMovementClass.MousePositions, false);
    canvas.addEventListener("touchend", MouseDown, false);
    

    init();
    gameLoop();
}

function init()
{
    if(soundManager != null)
    {
        soundManager.playMusic(1);
    }

    _CanvasClass.ResizeCanvas();
    _SpriteClass.SpriteAssign();
    _SpriteClass.EnemyAssign();
    _SpriteClass.HealthHeartAssign();
    _SpriteClass.AssignWidthHeight();
    _EnemySpawnClass.EnemyWaves();
    startTimeMS = Date.now();
}

function gameLoop()
{
    elapsed = (Date.now() - startTimeMS)/1000;
    _SpriteClass.BackgroundScroll();
    switch(gameStates)
    {
        case 0:
        _CollisionDetection.CheckCollision();
        //Start Screen
        _SpriteClass.RenderStartGame();
        break;
        case 1:    
        //Main Game
        lastClick.x = 0; lastClick.y = 0;
        _SpriteClass.RenderMainGame();
        _PlayerScoreClass.UpdateScore(elapsed);
        _EnemyMovementClass.Movement();    
        _PlayerCollisionClass.PlayerCollisions();
        break;
        case 2:
        //Game Over
        _CollisionDetection.CheckCollision();
        _SpriteClass.RenderGameOver();
        break;
    }

    startTimeMS = Date.now();

    requestAnimationFrame(gameLoop);
}

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
