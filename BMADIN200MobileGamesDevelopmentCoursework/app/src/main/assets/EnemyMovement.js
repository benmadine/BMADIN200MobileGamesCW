//
// ─── THE ENEMY MOVEMENT SCRIPT ──────────────────────────────────────────────────
//

    
//
// ────────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: S E T S   T H E   M O V E M E N T   S P E E D : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────────
//


var speed = 0.5;

//
// ──────────────────────────────────────────────────────────────────────────────────────── II ──────────
//   :::::: T H E   E N E M Y   M O V E M E N T   C L A S S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────────
//


class EnemyMovementClass
{
    Movement()
    {
        // For every enemy
        for(var i = 0; i < enemies.length; i++)
        {
            // For every other enemy
            for(var j = 0; j < enemies.length; j++)
            {
                // Collision detection. Used to check if enemies are overlapping.
                if(i != j && enemies[i].x < enemies[j].x + enemyWidth &&
                    enemies[i].x + enemyWidth > enemies[j].x &&
                    enemies[i].y < enemies[j].y + enemyHeight &&
                    enemies[i].y + enemyHeight > enemies[j].y)
                {
                    //Sets the X and Y direction varaibles. 
                    var directionX = enemies[j].x - enemies[i].x;
                    var directionY = enemies[j].y - enemies[i].y;

                    // Gets the magnitude.
                    var directionLength = Math.sqrt(directionX * directionX + directionY * directionY);

                    // Divides the direction by the magnitude.
                    directionX = directionX / directionLength;
                    directionY = directionY / directionLength;

                    // Sets the enemies direction by mulitplying by negative speed to reverse their direction.
                    enemies[i].x += directionX * -speed;
                    enemies[i].y += directionY * -speed;
                }
                else
                {
                    //Sets the X and Y direction varaibles. 
                    var directionX = playerImage.x - enemies[i].x;
                    var directionY = playerImage.y - enemies[i].y;

                    // Gets the magnitude.
                    var directionLength = Math.sqrt(directionX * directionX + directionY * directionY);

                    // Divides the direction by the magnitude.
                    directionX = directionX / directionLength;
                    directionY = directionY / directionLength;

                    // Sets the enemies direction towards the player.
                    enemies[i].x += directionX * speed;
                    enemies[i].y += directionY * speed; 
                }
            }
        } 
    }
}

//
// ─── END OF ENEMY MOVEMENT ──────────────────────────────────────────────────────
//

    
