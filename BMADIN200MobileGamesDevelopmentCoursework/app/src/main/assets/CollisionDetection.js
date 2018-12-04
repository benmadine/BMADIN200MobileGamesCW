class CollisionDectionClass
{
    CheckCollision()
    {
        if(gameStates == 0)
        {
            if(lastClick.x < playButton.x + playButton.sImage.width &&
                lastClick.x > playButton.x &&
                lastClick.y < playButton.sImage.height + playButton.y &&
                lastClick.y > playButton.y)
            {
                //soundManager.playSound(1);
                gameStates = 1;
            }
        }
        if(gameStates == 2)
        {
            if(lastClick.x < playAgainButton.x + playAgainButton.sImage.width &&
                lastClick.x > playAgainButton.x &&
                lastClick.y < playAgainButton.sImage.height + playAgainButton.y &&
                lastClick.y > playAgainButton.y)
            {
              //  soundManager.playSound(1);
                window.location.reload(false);
            }
        }
        if(lastClick.x < exitGameButton.x + exitGameButton.sImage.width &&
            lastClick.x > exitGameButton.x &&
            lastClick.y < exitGameButton.sImage.height + exitGameButton.y &&
            lastClick.y > exitGameButton.y)
        {
      //      soundManager.playSound(1);
            window.close();
        }
    }
}