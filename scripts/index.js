/*
    Scroll controller with width check
*/

const header = document.getElementById('header');
let prevScrollValue = 0;

document.addEventListener('scroll', () => {
    const newScrollValue = window.scrollY;
    const currentWidth = window.innerWidth;

    // Only apply scroll-based header hide/show when screen width < 786px
    if (currentWidth > 786) {
        if (newScrollValue < prevScrollValue && newScrollValue > 580) {
            // Scrolling up
            header.style.display = "flex";
        } else {
            // Scrolling down or near top
            header.style.display = "none";
        }
    } else {
        // If width is larger than 786, always show header
        header.style.display = "none";
    }

    prevScrollValue = newScrollValue;
});


// Skills animation on scroll
const skillContainers = document.querySelectorAll('.skills .container');

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('visible');
            observer.unobserve(entry.target);
        }
    });
}, { threshold: 0.3 });

skillContainers.forEach(container => observer.observe(container));
