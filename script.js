document.addEventListener('DOMContentLoaded', () => {
    const sections = document.querySelectorAll('section');
    const projectItems = document.querySelectorAll('.project-item');

    const options = {
        root: null,
        rootMargin: '0px',
        threshold: 0.3
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });

    projectItems.forEach(item => {
        observer.observe(item);
    });
});
