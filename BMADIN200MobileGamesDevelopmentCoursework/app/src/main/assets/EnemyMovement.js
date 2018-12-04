var speed = 1;

class EnemyMovementClass extends SpriteClass
{
    //https://gamedevelopment.tutsplus.com/tutorials/understanding-steering-behaviors-pursuit-and-evade--gamedev-2946
    //https://www.askforgametask.com/tutorial/steering-behaviors-seek/
    //https://github.com/edwerner/JS-Steering-Behaviors/blob/master/wanderer.js
    Movement()
    {
        for(var i = 0; i < enemies.length; i++)
        {
            for(var j = 0; j < enemies.length; j++)
            {
                if(i != j && enemies[i].x < enemies[j].x + enemyWidth &&
                    enemies[i].x + enemyWidth > enemies[j].x &&
                    enemies[i].y < enemies[j].y + enemyHeight &&
                    enemies[i].y + enemyHeight > enemies[j].y)
                {
                    var directionX = enemies[j].x - enemies[i].x;
                    var directionY = enemies[j].y - enemies[i].y;

                    var directionLength = Math.sqrt(directionX * directionX + directionY * directionY);
                    directionX = directionX / directionLength;
                    directionY = directionY / directionLength;

                    enemies[i].x += directionX * -speed;
                    enemies[i].y += directionY * -speed;
                }
                else
                {
                    var directionX = playerImage.x - enemies[i].x;
                    var directionY = playerImage.y - enemies[i].y;

                    var directionLength = Math.sqrt(directionX * directionX + directionY * directionY);
                    directionX = directionX / directionLength;
                    directionY = directionY / directionLength;

                    enemies[i].x += directionX * speed;
                    enemies[i].y += directionY * speed;
                }
            }
        }
    }
}
