document.addEventListener('DOMContentLoaded', function() {
    const navToggle = document.querySelector('.nav-toggle');
    const navlinks = document.querySelectorAll('.nav-link');
    const btn = document.getElementById('btn');

    navToggle.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
    });

    navlinks.forEach(link => {
        link.addEventListener('click', () => {
            document.body.classList.remove('nav-open');
        });
    });

    btn.addEventListener('click', () => {
        document.body.classList.toggle('nav-open');
        
    });
});















