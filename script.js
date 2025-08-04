// Simple animated dots for "Neural Network" effect
const canvas = document.getElementById("neuralNetwork");
if (canvas) {
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const dots = [];
    for (let i = 0; i < 50; i++) {
        dots.push({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            dx: (Math.random() - 0.5) * 1.5,
            dy: (Math.random() - 0.5) * 1.5
        });
    }

    function animate() {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        ctx.fillStyle = "#00d0ff";

        dots.forEach(dot => {
            dot.x += dot.dx;
            dot.y += dot.dy;
            if (dot.x < 0 || dot.x > canvas.width) dot.dx *= -1;
            if (dot.y < 0 || dot.y > canvas.height) dot.dy *= -1;

            ctx.beginPath();
            ctx.arc(dot.x, dot.y, 4, 0, Math.PI * 2);
            ctx.fill();
        });

        // Connect dots
        ctx.strokeStyle = "rgba(255, 215, 0, 0.5)";
        dots.forEach(dot1 => {
            dots.forEach(dot2 => {
                const dist = Math.hypot(dot1.x - dot2.x, dot1.y - dot2.y);
                if (dist < 150) {
                    ctx.beginPath();
                    ctx.moveTo(dot1.x, dot1.y);
                    ctx.lineTo(dot2.x, dot2.y);
                    ctx.stroke();
                }
            });
        });

        requestAnimationFrame(animate);
    }

    animate();
}

// Responsive menu toggle
const menuToggle = document.querySelector('.menu-toggle');
const navMenu = document.querySelector('nav ul');

if (menuToggle && navMenu) {
    menuToggle.addEventListener('click', () => {
        navMenu.classList.toggle('show');
    });
}

// Feedback form submit message
const feedbackForm = document.querySelector('.feedback-form');
if (feedbackForm) {
    feedbackForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("✅ Thank you for your feedback!");
        feedbackForm.reset();
    });
}

// Contact form submit message
const contactForm = document.querySelector('.contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        alert("📩 Your message has been sent! We will contact you soon.");
        contactForm.reset();
    });
}
