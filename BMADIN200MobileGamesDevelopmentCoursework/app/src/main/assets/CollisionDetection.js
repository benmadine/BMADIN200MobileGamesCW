//
// ──────────────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: T H E   C O L L I S I O N   D E T E C T I O N   C L A S S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────────────
//


class CollisionDectionClass
{
    CheckCollision()
    {
        // If the game state is equal to 0, so the start screen.
        if(gameStates == 0)
        {
            // Uses AABB collision detection. Checks if the last click is in the button boundaries
            if(lastClick.x < playButton.x + playButton.sImage.width &&
                lastClick.x > playButton.x &&
                lastClick.y < playButton.sImage.height + playButton.y &&
                lastClick.y > playButton.y)
            {
                // Plays the second element in the play sound array.
                soundManager.playSound(1);
                // Sets the game states to one.
                gameStates = 1;
                _EnemySpawnClass.EnemyWaves();
            }
        }
        // If game states is equal to 2, the game over screen.
        if(gameStates == 2)
        {
            // Collision detection, AABB.
            if(lastClick.x < playAgainButton.x + playAgainButton.sImage.width &&
                lastClick.x > playAgainButton.x &&
                lastClick.y < playAgainButton.sImage.height + playAgainButton.y &&
                lastClick.y > playAgainButton.y)
            {
                // Sets the game state equal to 1.
                playerScore = 0;
               
                // Calls the reset game function in the mainGame.js
                ResetGame();
                // Play the button click sounds.
                soundManager.playSound(1);
                playerScore = 0;
                gameStates = 1;
            }
        }
        // Collision detection, AABB.
        if(lastClick.x < exitGameButton.x + exitGameButton.sImage.width &&
            lastClick.x > exitGameButton.x &&
            lastClick.y < exitGameButton.sImage.height + exitGameButton.y &&
            lastClick.y > exitGameButton.y)
        {
            // Plays the second sound.
            soundManager.playSound(1);
            // Exits the application.
            navigator.app.exitApp();
        }
    }
}