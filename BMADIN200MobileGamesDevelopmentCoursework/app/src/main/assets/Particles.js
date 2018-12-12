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
    for(var i = 0; i < 20; i++)
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
    this.vx = Math.random()*5 - 2;
    this.vy = -Math.random()*5 - 2;

    //Random Gravity Variable
    this.gravity = 1;

    // The radius of the particles
    this.radius = RandomParticle(10, 30);

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

        //Adds the particle velocity to the particle and the particle physics
        _Particle.x += _Particle.vx;
        _Particle.y += _Particle.vy;
        _Particle.vy += _Particle.gravity;
        _Particle.vx += _Particle.gravity * RandomParticle(-2, 2);
        //Makes the aprticles bounce
        if(_Particle.y + (_Particle.radius *2) > canvas.height)
        {
            _Particle.vy *= -1;
            _Particle.y = canvas.height - (_Particle.radius *2);
        }
        //roof
        if(_Particle.y - (_Particle.radius *2) < canvas.height * 0.1)
        {
            _Particle.vy *= -1;
            _Particle.y = canvas.height * 0.1 + (_Particle.radius *2);
        }
         //Left
        if(_Particle.x - (_Particle.radius *2) <= canvas.width * 0.1)
        {
            _Particle.vx *= -1;
            _Particle.x = canvas.width * 0.1 + (_Particle.radius *2);
        }
         //Right
        if(_Particle.x + (_Particle.radius *2) >= canvas.width * 0.9)
        {
            _Particle.vx *= -1;
            _Particle.x = canvas.width * 0.9 - (_Particle.radius *2);
        }
        _Particle.vy += _Particle.gravity;
        // Decreases fade over time and checks if the fade is at zero, if so then particle is dead.
        _Particle.fade -= 5;
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

function RandomParticle(min, max)
{
    return Math.random() * (max - min) + min;
}