var playerCollided = false;

class PlayerCollisionClass
{
    PlayerCollisions()
    {
        for(var i = 0; i < enemies.length; i++)
        {
            if(playerImage.x < enemies[i].x + enemyWidth &&
            playerImage.x + playerWidth > enemies[i].x &&
            playerImage.y < enemies[i].y + enemyHeight &&
            playerImage.y + playerHeight > enemies[i].y)
            {
                playerCollided = true;
                enemies.length = 0;
            }
            else if(enemies.length == 0)
            {
                playerCollided = false;
            }
        }
    }
}