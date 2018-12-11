//
// ─── SPRITE MANAGER CLASS ───────────────────────────────────────────────────────
//

//
// ────────────────────────────────────────────────────────── I ──────────
//   :::::: V A R I A B L E S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────
//

//Images
var menuBackgroundImage, playButton, exitGameButton, playAgainButton, backgroundImage, playerImage;
// Enemry Array
var enemies = [];
// Player health array
var healthHearts = [];
// Meteor 
var star = [];
// Widths and Heights
var enemyWidth, enemyHeight;
var playerWidth, playerHeight;
// Movement for the background.
var travel = 0;
// Star rotae angle
var starRotate = 0;

//
// ──────────────────────────────────────────────────────────────── II ──────────
//   :::::: S P R I T E   C L A S S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────
//

class SpriteClass
{
    //Sprite class constructor
    constructor(x, y, imageSRC, spType)
    {
        // The X and Y position.
        this.x = x;
        this.y = y;
        // The sprite type
        this.sType = spType;
        this.sImage = new Image();
        this.sImage.src = imageSRC;
    }

    //Returns a random number between the min and max values.
    static SpriteRandomSpawn(min, max)
    {
        return Math.random() * (max - min) + min;
    }

    //Assings the sprite images, with their position and image source.
    SpriteAssign()
    {
        menuBackgroundImage = new SpriteClass(0,0, "MenuBackgroundImage.png");
        playButton = new SpriteClass(canvas.width/2, canvas.height/6, "PlayButton.png");
        exitGameButton = new SpriteClass(canvas.width/2, canvas.height/2, "ExitGameButton.png");
        playAgainButton = new SpriteClass(canvas.width/2, canvas.height/6, "PlayAgain.png");
        backgroundImage = new SpriteClass(0,0, "SpaceBackground.jpg");
        playerImage = new SpriteClass(0, 0, "Spaceship.png");
    }

    EnemyAssign()
    {
        for(var i = 0; i < 3; i++)
        {
            enemies.push(new SpriteClass(SpriteClass.SpriteRandomSpawn(0, 2000),
             SpriteClass.SpriteRandomSpawn(0, 2000), 
             "Bullets.png"));
        }
    }

    HealthHeartAssign()
    {
        // Assings the player hearts.
        healthHearts[0] = new SpriteClass(50, 50,"HealthHeart.png");
        healthHearts[1] = new SpriteClass(750, 50,"HealthHeart.png");
        healthHearts[2] = new SpriteClass(1450, 50,"HealthHeart.png");
    }

    StarAssign()
    {
        for(var i = 0; i < 20; i++)
        {
            star.push(new SpriteClass(canvas.width + (i * 100), canvas.height/2 + ((i * 50) * (Math.sin(i))), "ShootingStar.jpg"));
        }
    }

    AssignWidthHeight()
    {
        // Assigns the players widht.
        playerWidth = playerImage.sImage.width;
        playerHeight = playerImage.sImage.height;
    }

    //
    // ──────────────────────────────────────────────────────────────────────────────────────── III ──────────
    //   :::::: B A C K G R O U N D   R E N D E R   S C R O L L : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────────────────────────────────────────
    //

    
    MenuBackgroundRender(delta)
    {
        //Saves the canvas context
        canvasContext.save();
        // Moves the background left.
        canvasContext.translate(-delta, 0);
        // Draws the first background
        canvasContext.drawImage(this.sImage, 0, 0, canvas.width, canvas.height);
        // Draws the second background at an offset.
        canvasContext.drawImage(this.sImage, this.sImage.width + this.sImage.width/4, 0, canvas.width, canvas.height);
        // Restores the background.
        canvasContext.restore();
    }

    MainGameBackgroundRender(delta)
    {
        canvasContext.save();
        canvasContext.translate(-delta, 0);
        canvasContext.drawImage(this.sImage, 0, 0, canvas.width, canvas.height);
        canvasContext.drawImage(this.sImage, this.sImage.width - 500, 0, canvas.width, canvas.height);
        canvasContext.restore();
    }

    BackgroundScroll()
    {
        travel += elapsed * 1000;
        if(travel > menuBackgroundImage.sImage.width)
        {
            travel = 0;
        }
    }

    //
    // ────────────────────────────────────────────────────────────────────── IV ──────────
    //   :::::: R E N D E R S   O B J E C T S : :  :   :    :     :        :          :
    // ────────────────────────────────────────────────────────────────────────────────
    //

    MissleRender()
    {
        canvasContext.save();
        canvasContext.translate(this.x * 0.79, this.y * 0.79);
        canvasContext.scale(0.2, 0.2); 
        canvasContext.drawImage(this.sImage, this.x, this.y);
        canvasContext.restore();
    }
    
    PlayerRender()
    {
        canvasContext.save(); 
        canvasContext.translate(this.x * 0.79, this.y * 0.79);      
        canvasContext.scale(0.2, 0.2);       
        canvasContext.drawImage(this.sImage, this.x, this.y);
        canvasContext.restore();
    }

    HeartRender()
    {
        canvasContext.save();
        canvasContext.scale(0.05, 0.05);
        canvasContext.drawImage(this.sImage, this.x, this.y);
        canvasContext.restore();
    }

    StarRender()
    {
        canvasContext.save();       
        canvasContext.translate(this.x, this.y);      
        // Rotates star using rotate method
        canvasContext.rotate(starRotate, starRotate);
        canvasContext.scale(0.02, 0.02);     
        // Translate using sin wave so the stars go up and down
        canvasContext.translate(this.x--, this.y * Math.sin(starRotate));
        // If star is past canvas then put back
        if(this.x < -canvas.width)
        {
            this.x = canvas.width;
        }        
        canvasContext.drawImage(this.sImage, this.x, this.y);
        canvasContext.restore();
    }

    ButtonRender()
    {
        canvasContext.save();
        canvasContext.scale(0.5, 0.5);
        canvasContext.translate(this.x, this.y );
        canvasContext.drawImage(this.sImage, this.x, this.y);
        canvasContext.restore();
    }

    //
    // ──────────────────────────────────────────────────────────────── V ──────────
    //   :::::: M E N U   R E N D E R S : :  :   :    :     :        :          :
    // ──────────────────────────────────────────────────────────────────────────
    //

    
    StartTextRender()
    {
        //Saves the canvas context
        canvasContext.save();
        // Scales the text
        canvasContext.scale(0.3, 0.3);
        // Sets the text COlour
        canvasContext.fillStyle = 'white';
        // Sets the texts font and size.
        canvasContext.font = 'bold 50px Open Sans';
        //Writes the text at a postiino.
        canvasContext.fillText("ALIEN Fireball DODGER!", 100, 200);
        canvasContext.fillText("Dodge Fireballs!!", 100, 400);
        canvasContext.fillText("Move Finger to Move Alien!!!", 100, 600);
        canvasContext.restore();
    }

    EndTextRender()
    {
        canvasContext.save();
        canvasContext.scale(0.3, 0.3);
        // Sets a random font colour.
        canvasContext.fillStyle = _FontModifierClass.FontColour();
        // Sets a random font size.
        canvasContext.font = 'bold ' + _FontModifierClass.FontSize(20, 200) + 'px Open Sans';
        // Displays user score.
        canvasContext.fillText("GAME OVER! Your Score Was :" + playerScore.toString().substr(0,3), 100, 200);
        // If the users score was greater than high score.
        if(playerScore >= playerHighScore)
        {
            // Display high score message.
            canvasContext.fillText("Woop Woop High Score Alert!", 100, 600);
        }
        canvasContext.restore();
    }

    GameOverScoreRender()
    {
        //Saves the canvas context.
        canvasContext.save();
        //Calls the end text render method.
        this.EndTextRender();
        //Restores the canavs.
        canvasContext.restore();
    }

    RenderStartGame()
    {
        //Saves the canvas context.
        canvasContext.save();      
        // Clears everything on the canvas.
        canvasContext.clearRect(0,0,canvas.width, canvas.height);
        // Creates a border around the canvas.
        canvasContext.strokeRect(1,1,canvas.width-2, canvas.height-2);
        // Moves the menu background by the travel value.
        menuBackgroundImage.MenuBackgroundRender(travel);
        // Calls the start text render method.
        this.StartTextRender();
        // Renders buttons and restore the canvas,
        playButton.ButtonRender();
        exitGameButton.ButtonRender();
        canvasContext.restore();
    }

    RenderMainGame()
    {
        canvasContext.clearRect(0,0,canvas.width, canvas.height);
        canvasContext.strokeRect(1,1,canvas.width-2, canvas.height-2);

        backgroundImage.MainGameBackgroundRender(travel);
        
        for(var i = 0; i < enemies.length; i++)
        {
            // Renders the enemies and assigns their width and height.
            enemyWidth = enemies[i].sImage.width;
            enemyHeight = enemies[i].sImage.height;
            enemies[i].MissleRender();
        }
        for(var j = 0; j < healthHearts.length; j++)
        {
            // Renders player hearts.
            healthHearts[j].HeartRender();
        }
        if(playerScore > 10)
        {
            starRotate += 0.005;
            for(var k = 0; k < star.length; k++)
            {
                star[k].StarRender();
            }
        }
        // Render the player.
        playerImage.PlayerRender();
        ParticleRender(canvasContext);
    }

    // Renders the game over screen.
    RenderGameOver()
    {
        canvasContext.clearRect(0,0,canvas.width, canvas.height);
        canvasContext.strokeRect(1,1,canvas.width-2, canvas.height-2);
        menuBackgroundImage.MenuBackgroundRender(travel);
        this.GameOverScoreRender();
        playAgainButton.ButtonRender();
        exitGameButton.ButtonRender();
    }
}