var canvas;
var canvasContext;

var resolutionX, resolutionY;

class CanvasClass
{
    CanvasLoad()
    {
        canvas = document.getElementById('gameCanvas');
        canvasContext = canvas.getContext('2d');
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    ResizeCanvas()
    {
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;
    }

    getCanvasWidth()
    {
        return canvas.width;
    }

    getCanvasHeight()
    {
        return canvas.height;
    }
}