window.onload = function() {
    var canvas = document.getElementById('animationCanvas');
    var context = canvas.getContext('2d');

    // Set canvas size to fill the window
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    var particles = [];
    var numParticles = 2000;
    var colors = ['#d762d1', '#8eddc0', '#5b8cd9', '#7f46c4'];

    // Create particles
    for (var i = 0; i < numParticles; i++) {
        var angle = 2 * Math.PI * Math.random();
        particles.push({
            x: canvas.width / 2,
            y: canvas.height / 2,
            radius: Math.random() * Math.min(canvas.width, canvas.height) / 0.5,
            angle: angle,
            speed: 0.01 * Math.random(),
            size: Math.random() * 3,
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }

    var animate = function() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw particles
        for (var i = 0; i < particles.length; i++) {
            var p = particles[i];

            p.x = canvas.width / 2 + p.radius * Math.cos(p.angle);
            p.y = canvas.height / 2 + p.radius * Math.sin(p.angle);
            p.angle = (p.angle + p.speed) % (2 * Math.PI); // keep angle within 0 to 2π

            context.beginPath();
            context.arc(p.x, p.y, p.size, 0, 2 * Math.PI, false);
            context.fillStyle = p.color;
            context.fill();
        }

        requestAnimationFrame(animate);
    };

    animate();
};