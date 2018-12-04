var xMousePosition, yMousePosition;

var currentXPos, currentYPos;

//https://codepen.io/ma77os/pen/KGIEh

class PlayerMoveClass
{
    constructor()
    {
        this.MousePositions = this.MousePositions.bind(this);
    }

    lerp(start, end, time)
    {
        return (1-time) * start + time * end;
    }

    MousePositions(event)
    {
        xMousePosition = event.clientX;
        yMousePosition = event.clientY;
        
        playerImage.x = this.lerp(playerImage.x, xMousePosition, 0.3);
        playerImage.y = this.lerp(playerImage.y, yMousePosition, 0.3);
    }
}