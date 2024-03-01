// Create a canvas element
const canvas = document.createElement('canvas');
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;
document.body.appendChild(canvas);

// Get the drawing context
const ctx = canvas.getContext('2d');

// Define the animation loop
function animate() {
    // Clear the canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    // Draw your animation here
    // For example, draw a rotating square
    ctx.save();
    ctx.translate(canvas.width / 2, canvas.height / 2);
    ctx.rotate(Date.now() / 1000);
    ctx.fillStyle = 'red';
    ctx.fillRect(-50, -50, 100, 100);
    ctx.restore();

    // Request the next frame
    requestAnimationFrame(animate);
}

// Start the animation loop
animate();