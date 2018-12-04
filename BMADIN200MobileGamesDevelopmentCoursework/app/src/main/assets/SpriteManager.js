var menuBackgroundImage, playButton, exitGameButton, playAgainButton, backgroundImage, playerImage;
var enemies = [];
var healthHearts = [];
var enemyWidth, enemyHeight;
var playerWidth, playerHeight;
var travel = 0;

class SpriteClass
{
    //https://www.slotsltd.com/games/latest-roulette-game-online-3d-european-roulette/
    //https://www.reddit.com/r/feedthebeast/comments/8kihx2/for_those_of_you_who_like_the_ftb_continuum_main/
    constructor(x, y, imageSRC, spType)
    {
        this.x = x;
        this.y = y;
        this.sType = spType;
        this.sImage = new Image();
        this.sImage.src = imageSRC;
    }

    static SpriteRandomSpawn(min, max)
    {
        return Math.random() * (max - min) + min;
    }

    SpriteAssign()
    {
        menuBackgroundImage = new SpriteClass(0,0, "MenuBackgroundImage.png");
        playButton = new SpriteClass(canvas.width / 8, canvas.height / 1.2, "PlayButton.png");
        exitGameButton = new SpriteClass(canvas.width / 3, canvas.height / 1.2, "ExitGameButton.png");
        playAgainButton = new SpriteClass(canvas.width / 8, canvas.height / 1.2, "PlayAgain.png");
        backgroundImage = new SpriteClass(0,0, "SpaceBackground.jpg");
        playerImage = new SpriteClass(0, 0, "Spaceship.png");
    }

    EnemyAssign()
    {
        for(var i = 0; i < 3; i++)
        {
            enemies.push(new SpriteClass(SpriteClass.SpriteRandomSpawn(0, 2000), SpriteClass.SpriteRandomSpawn(0, 2000), "Bullets.png"));
        }
    }

    HealthHeartAssign()
    {
        healthHearts[0] = new SpriteClass(50, 50,"HealthHeart.png");
        healthHearts[1] = new SpriteClass(750, 50,"HealthHeart.png");
        healthHearts[2] = new SpriteClass(1450, 50,"HealthHeart.png");
    }

    AssignWidthHeight()
    {
        playerWidth = playerImage.sImage.width;
        playerHeight = playerImage.sImage.height;
    }

    BackgroundRender(delta)
    {
        canvasContext.save();
        canvasContext.translate(-delta, 0);
        canvasContext.drawImage(this.sImage, this.x, 0, canvas.width, canvas.height);
        canvasContext.drawImage(this.sImage, this.sImage.width, 0, canvas.width, canvas.height);
        canvasContext.restore();
    }

    BackgroundScroll()
    {
        travel += elapsed * 500;
        if(travel > menuBackgroundImage.sImage.width)
        {
            travel = 0;
        }
    }

    ButtonRender()
    {
        canvasContext.save();
        canvasContext.scale(_CanvasClass.getCanvasWidth * 0.5 , _CanvasClass.getCanvasHeight * 0.5);
        canvasContext.drawImage(this.sImage, this.x, this.y);
        canvasContext.restore();
    }

    MissleRender()
    {
        canvasContext.save();
        canvasContext.scale(_CanvasClass.getCanvasWidth * 0.5 , _CanvasClass.getCanvasHeight * 0.5);
        canvasContext.drawImage(this.sImage, this.x, this.y);
        canvasContext.restore();
    }

    PlayerRender()
    {
        canvasContext.save();
        canvasContext.scale(_CanvasClass.getCanvasWidth * 0.05, _CanvasClass.getCanvasHeight * 0.05);
        canvasContext.drawImage(this.sImage, this.x, this.y);
        canvasContext.restore();
    }

    HeartRender()
    {
        canvasContext.save();
        canvasContext.scale(_CanvasClass.getCanvasWidth * 0.05, _CanvasClass.getCanvasHeight * 0.05);
        console.log(canvasContext.scale(_CanvasClass.getCanvasWidth * 0.05, _CanvasClass.getCanvasHeight * 0.05));
        canvasContext.drawImage(this.sImage, this.x, this.y);
        canvasContext.restore();
    }

    StartTextRender()
    {
        canvasContext.save();
        canvasContext.scale(_CanvasClass.getCanvasWidth * 0.5, _CanvasClass.getCanvasHeight * 0.5);
        canvasContext.fillStyle = 'white';
        canvasContext.font = 'bold 50px Open Sans';
        canvasContext.fillText("ALIEN ROCKET DODGER", 100, 200);
        canvasContext.fillText("Dodge Rockets!!", 100, 500);
        canvasContext.fillText("Alien Moves With Finger!!", 100, 800);
        canvasContext.restore();
    }

    EndTextRender()
    {
        canvasContext.save();
        canvasContext.scale(_CanvasClass.getCanvasWidth * 0.5, _CanvasClass.getCanvasHeight * 0.5);
        canvasContext.fillStyle = _FontModifierClass.FontColour();
        canvasContext.font = 'bold ' + _FontModifierClass.FontSize(20, 200) + 'px Open Sans';
        canvasContext.fillText("Your Score Was :" + playerScore.toString().substr(0,3), 100, 200);
        canvasContext.restore();
    }

    GameOverScoreRender()
    {
        canvasContext.save();
        this.EndTextRender();
        canvasContext.restore();
    }

    RenderStartGame()
    {
        canvasContext.save();      
        canvasContext.clearRect(0,0,canvas.width, canvas.height);
        canvasContext.strokeRect(1,1,canvas.width-2, canvas.height-2);
        menuBackgroundImage.BackgroundRender(travel);
        this.StartTextRender();
        playButton.ButtonRender();
        exitGameButton.ButtonRender();
        canvasContext.restore();
    }

    RenderMainGame()
    {
        canvasContext.clearRect(0,0,canvas.width, canvas.height);
        canvasContext.strokeRect(1,1,canvas.width-2, canvas.height-2);

        backgroundImage.BackgroundRender(travel);

        for(var i = 0; i < enemies.length; i++)
        {
            enemyWidth = enemies[i].sImage.width;
            enemyHeight = enemies[i].sImage.height;
            enemies[i].MissleRender();
        }
        for(var j = 0; j < healthHearts.length; j++)
        {
            healthHearts[j].HeartRender();
        }

        playerImage.PlayerRender();
    }

    RenderGameOver()
    {
        canvasContext.clearRect(0,0,canvas.width, canvas.height);
        canvasContext.strokeRect(1,1,canvas.width-2, canvas.height-2);
        menuBackgroundImage.BackgroundRender(travel);
        this.GameOverScoreRender();
        playAgainButton.ButtonRender();
        exitGameButton.ButtonRender();
    }
}