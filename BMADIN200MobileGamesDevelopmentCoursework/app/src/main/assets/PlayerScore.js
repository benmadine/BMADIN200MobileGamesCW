//
// ─── PLAYER SCORE CLASS ─────────────────────────────────────────────────────────
//

//
// ────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: P L A Y E R   S T A T   V A R I A B L E S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────
//


//var playerScore = 0;
var playerHighScore = 0;
var playerHealth = 3;

//
// ──────────────────────────────────────────────────────────────────────────── II ──────────
//   :::::: P L A Y E R   S C O R E   C L A S S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────
//


class PlayerScoreClass
{
    // Updates the score over time.
    UpdateScore(deltaTime)
    {
        // If the players health is less than 0.
        if(playerHealth <= 0)
        {
            // Calls Setting Score Values method.
            this.SettingScoreValues();
            // Sets player health to 3.
            playerHealth = 3;
            // Changes the game state.
            gameStates = 2;

        }
        // If playerCollided is false.
        if(!playerCollided)
        {
            // Increase the score.
            playerScore += deltaTime;
        }
        //If the player has collided.
        if(playerCollided)
        {
            // Remove the top heart.
            healthHearts.pop();
            // Lower the players health and score.
            playerHealth--;
            
            playerScore -= 10;
            // Set the playercollided to false.
            playerCollided = false;
        }

        // The player score text. Sets the colour to white.
        canvasContext.fillStyle = 'white';
        // Sets the font and the size.
        canvasContext.font = 'bold 30px Open Sans';
        // Writes the text to the screem and only shows three characters.
        canvasContext.fillText("Score :" + playerScore.toString().substr(0,3), canvas.width/2, 100);
    }

    SettingScoreValues()
    {   
        //If the players score is greater than the high score.
        if(playerScore >= playerHighScore)
        {
            //Sets the high score to the players score in storage.
            localStorage.setItem('player_highscore', playerScore);
            // Make the high score equal to the player score.
            playerHighScore = playerScore;
        }
    }
}