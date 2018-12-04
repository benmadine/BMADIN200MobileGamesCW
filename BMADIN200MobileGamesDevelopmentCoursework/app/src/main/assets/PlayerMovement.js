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

        // var touchX = event.touches[0].pageX - canvas.offsetLeft;
        // var touchY = event.touches[0].pageY - canvas.offsetTop;

        // xMousePosition = event.touches[0].pageX;
        // yMousePosition = event.touches[0].pageY;
       
        playerImage.x = this.lerp(playerImage.x, xMousePosition, 0.3);
        playerImage.y = this.lerp(playerImage.y, yMousePosition, 0.3);
    }
}