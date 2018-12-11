//
// ─── PLAYER COLLIDER SCRIPT ─────────────────────────────────────────────────────
//

//
// ────────────────────────────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: C H E C K S   I F   T H E   P L A Y E R   H A S   C O L L I D E D : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
//


var playerCollided = false;

//
// ──────────────────────────────────────────────────────────────────────────────────── II ──────────
//   :::::: P L A Y E R   C O L L I S I O N   C L A S S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────
//


class PlayerCollisionClass
{
    PlayerCollisions()
    {
        // For all the enemies
        for(var i = 0; i < enemies.length; i++)
        {
            //AABB collision detection. Checks if the players sprite is bounding the enemy sprite.
            if(playerImage.x < enemies[i].x + enemyWidth/2 &&
            playerImage.x + playerWidth/2 > enemies[i].x &&
            playerImage.y < enemies[i].y + enemyHeight/2 &&
            playerImage.y + playerHeight/2 > enemies[i].y)
            {
                //Sets the players collision equal to true.
                playerCollided = true;
                //Destroys all enemies.
                enemies.length = 0;
                //Creates the particles at the players position.
                createParticleArray(playerImage.x, playerImage.y, canvasContext);
                //Plays the third sound in the array.
                soundManager.playSound(2);
            }
            else if(enemies.length == 0)
            {
                // If there arent enemies in the array, set the collision to false.
                playerCollided = false;
            }
        }
    }
}