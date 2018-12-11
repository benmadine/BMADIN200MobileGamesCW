//
// ─── CANVAS MANAGER SCRIPT ──────────────────────────────────────────────────────
//

//
// ────────────────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: C R E A T E S   T H E   C A N V A S   V A R I A B L E : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────────────────
//

var canvas;
var canvasContext;

var resolutionX, resolutionY;

//
// ──────────────────────────────────────────────────────────────────────────────────── II ──────────
//   :::::: C R E A T E S   A   C A N V A S   C L A S S : :  :   :    :     :        :          :
// ──────────────────────────────────────────────────────────────────────────────────────────────
//


class CanvasClass
{
    CanvasLoad()
    {
        // Assings the canvas object to the gameCanvas referenced in the HTML file.
        canvas = document.getElementById('gameCanvas');
        // Sets the canvas context.
        canvasContext = canvas.getContext('2d');
        // Calls the resize method.
        this.ResizeCanvas();
    }

    ResizeCanvas()
    {
        // Sets the canvas width to the innerwidth of the window
        canvas.width = window.innerWidth;
        // Sets the height to the innter window height.
        canvas.height = window.innerHeight;
    }
}

//
// ─── CANVAS MANAGER ENDS ────────────────────────────────────────────────────────
//

    