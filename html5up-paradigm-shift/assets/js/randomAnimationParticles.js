window.onload = function() {
    var canvas = document.getElementById('animationCanvas');
    var context = canvas.getContext('2d');

    var particles = [];
    var numParticles = 200;
    var colors = ['#d762d1', '#8eddc0', '#5b8cd9', '#7f46c4'];

    // Create particles
    for (var i = 0; i < numParticles; i++) {
        particles.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            speedX: (Math.random() - 0.5) * 10,
            speedY: (Math.random() - 0.5) * 10,
            color: colors[Math.floor(Math.random() * colors.length)]
        });
    }

    var animate = function() {
        context.clearRect(0, 0, canvas.width, canvas.height);

        // Update and draw particles
        for (var i = 0; i < particles.length; i++) {
            var p = particles[i];

            p.x += p.speedX;
            p.y += p.speedY;

            if (p.x < 0 || p.x > canvas.width) p.speedX = -p.speedX;
            if (p.y < 0 || p.y > canvas.height) p.speedY = -p.speedY;

            context.beginPath();
            context.arc(p.x, p.y, 5, 0, 2 * Math.PI, false);
            context.fillStyle = p.color;
            context.fill();
        }

        requestAnimationFrame(animate);
    };

    animate();
};