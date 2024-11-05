document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    document.getElementById('successMessage').style.display = 'block';
    this.reset();
});

function animateNumber(elementId, final, duration) {
    let start = 0;
    const increment = final / (duration / 16);
    const element = document.getElementById(elementId);

    const timer = setInterval(() => {
        start += increment;
        element.textContent = Math.floor(start).toLocaleString();
        if (start >= final) {
            element.textContent = final.toLocaleString();
            clearInterval(timer);
        }
    }, 16);
}

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            if (entry.target.id === 'statistics') {
                animateNumber('volunteerCount', 4000000, 2000);
                animateNumber('userCount', 300000, 2000);
                animateNumber('countryCount', 150, 2000);
            }
            entry.target.classList.add('fade-in');
        }
    });
}, { threshold: 0.1 });

document.querySelectorAll('.section').forEach(section => {
    observer.observe(section);
});
observer.observe(document.getElementById('statistics'));