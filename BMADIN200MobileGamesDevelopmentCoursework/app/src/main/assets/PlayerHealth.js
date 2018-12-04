var playerHealth = 3;

class PlayerHealthClass
{
    PlayerHealth()
    {
        if(playerCollided == true)
        {
            playerHealth--;
        }
        canvasContext.font = 'bold 30px Open Sans'
        canvasContext.fillText("Health :" + playerHealth, canvas.width/2 - 150, 100);
    }
}