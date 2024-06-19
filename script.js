window.addEventListener('scroll', function() {
    const navbar = document.getElementById('navbar');
    if (window.scrollY > 50) {
        navbar.style.backgroundColor = '#444';
    } else {
        navbar.style.backgroundColor = '#333';
    }
});

document.querySelectorAll('nav ul li a').forEach(item => {
    item.addEventListener('mouseover', function() {
        this.style.backgroundColor = '#fff';
        this.style.color = '#333';
    });
    item.addEventListener('mouseout', function() {
        this.style.backgroundColor = 'transparent';
        this.style.color = '#fff';
    });
});

const mobileMenu = document.getElementById('mobile-menu');
const navList = document.querySelector('.nav-list');

mobileMenu.addEventListener('click', () => {
    navList.classList.toggle('active');
});
