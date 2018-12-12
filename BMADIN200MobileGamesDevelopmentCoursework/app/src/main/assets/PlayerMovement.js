//
// ─── PLAYER MOVEMENT SCRIPT ─────────────────────────────────────────────────────
//

 //
 // ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────── I ──────────
 //   :::::: T H E   P L A Y E R S   M O U S E / T O U C H   P O S I T I O N   A N D   T H E I R   C U R R E N T   P O S : :  :   :    :     :        :          :
 // ──────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────────
 //


var xMousePosition, yMousePosition;
var currentXPos, currentYPos;


//
// ────────────────────────────────────────────────────────────────────────────────── II ──────────
//   :::::: P L A Y E R   M O V E M E N T   C L A S S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────
//


class PlayerMoveClass
{   
    constructor()
    {
        // Binds the mousePosition event to the class.
        this.MousePositions = this.MousePositions.bind(this);
    }

    // Takes in start position, end position and the speed.
    lerp(start, end, time)
    {
        // Returns the value from the calculation below.
        return (1-time) * start + time * end;
    }

    // Event for when the player touches or clicks the screen.
    MousePositions(event)
    {
        // For mouse movement.
        // xMousePosition = event.clientX;
        // yMousePosition = event.clientY;
      
        // For touch input, gets the user touch position.
        xMousePosition = event.touches[0].pageX;
        yMousePosition = event.touches[0].pageY;

        // Moves the player to the player touch uses lerp function.
        playerImage.x = this.lerp(playerImage.x, xMousePosition, 0.3);
        playerImage.y = this.lerp(playerImage.y, yMousePosition, 0.3);
        
    }
}