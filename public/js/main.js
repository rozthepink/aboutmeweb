// Add smooth scrolling to all links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Add hover effect to books
document.querySelectorAll('.book').forEach(book => {
    book.addEventListener('mouseenter', function() {
        this.style.transform = 'rotateY(-30deg)';
    });
    
    book.addEventListener('mouseleave', function() {
        this.style.transform = 'rotateY(0deg)';
    });
}); 