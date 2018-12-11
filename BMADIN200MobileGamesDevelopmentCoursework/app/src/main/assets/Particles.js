//
// ─── PARTILE SCRIPT ─────────────────────────────────────────────────────────────
//


//
// ────────────────────────────────────────────────────────────────────────────────────────────── I ──────────
//   :::::: A R R A Y   T O   H O L D   T H E   P A R T I C L E S : :  :   :    :     :        :          :
// ────────────────────────────────────────────────────────────────────────────────────────────────────────
//


var particles = [];

// Takes in the xPosition, yPosition and the canvasContext Variable.
function createParticleArray(xPos, yPos, theCanvasContext)
{
    for(var i = 0; i < 10; i++)
    {
        // Adds 10 particles to the array, setting their X and Y pos.
        particles.push(new create(xPos, yPos));
    }
}


function create(startX, startY)
{
    // The starting position of the particles
    this.x = startX;
    this.y = startY;

    // The random velocity for the particles
    this.vx = Math.random()*5 - 5;
    this.vy = Math.random()*5 - 5;

    // The radius of the particles
    this.radius = 10;

    // A random fade values
    this.fade = Math.random()*1000;

    // Boolean to see if particle is dead.
    this.dead = false;
}

// Takes in the canvas contect
function ParticleRender(theCanvasContext)
{
    //Creates canvas context variable
    var _CanvasContext = theCanvasContext;
    // FOr loop for each of the aprticles
    for (var t = 0; t < particles.length; t++)
    {
        // Creates particle for each iteration
        var _Particle = particles[t];
        //Begins the path to draw the particle
        _CanvasContext.beginPath();
        // Sets the gradient
        var gradient = _CanvasContext.createRadialGradient(_Particle.x, _Particle.y, 0, _Particle.x, _Particle.y, _Particle.radius);
       // Sets the colours within the particle
        gradient.addColorStop(0, "yellow");
        gradient.addColorStop(0.4, "orange");
        gradient.addColorStop(0.9, "red");
        gradient.addColorStop(1, "black");
        // Fills the particle with the colours
        _CanvasContext.fillStyle = gradient;
        // Creates the circle of the particle
        _CanvasContext.arc(_Particle.x, _Particle.y, _Particle.radius, Math.PI*2, false);
        _CanvasContext.fill();
        //Adds the particle velocity to the particle
        _Particle.x += _Particle.vx;
        _Particle.y += _Particle.vy;
        // Decreases fade over time and checks if the fade is at zero, if so then particle is dead.
        _Particle.fade -= 10;
        if (_Particle.fade < 0)
        {
            _Particle.dead = true;
        }
        if(_Particle.dead == true)
        {
            particles.splice(t,1);
        }
    }
}