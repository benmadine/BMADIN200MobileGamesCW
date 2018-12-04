var playerCollided = false;

class PlayerCollisionClass
{
    PlayerCollisions()
    {
        for(var i = 0; i < enemies.length; i++)
        {
            if(playerImage.x < enemies[i].x + enemyWidth/4 &&
            playerImage.x + playerWidth/4 > enemies[i].x &&
            playerImage.y < enemies[i].y + enemyHeight/4 &&
            playerImage.y + playerHeight/4 > enemies[i].y)
            {
                playerCollided = true;
                enemies.length = 0;
                soundManager.playSound(2);
            }
            else if(enemies.length == 0)
            {
                playerCollided = false;
            }
        }
    }
}