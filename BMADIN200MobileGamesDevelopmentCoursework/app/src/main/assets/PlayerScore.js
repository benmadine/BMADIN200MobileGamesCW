var playerScore = 0;
var playerHealth = 3;
class PlayerScoreClass
{
    UpdateScore(deltaTime)
    {
        if(playerHealth <= 0)
        {
            gameStates = 2;
        }
        if(!playerCollided)
        {
            playerScore += deltaTime;
        }
        if(playerCollided)
        {
            healthHearts.pop();
            playerHealth--;
            playerScore -= 5;
            playerCollided = false;
        }

        canvasContext.fillStyle = 'white';
        canvasContext.font = 'bold 30px Open Sans';
        canvasContext.fillText("Score :" + playerScore.toString().substr(0,3), canvas.width/2, 100);
    }
}