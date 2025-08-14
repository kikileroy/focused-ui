document.addEventListener('DOMContentLoaded', function() {
    const focusableElements = document.querySelectorAll('.focusable');
    const defaultPrimary = document.querySelector('.content-article');
    
    function setPrimary(element) {
        focusableElements.forEach(el => el.classList.remove('primary'));
        element.classList.add('primary');
    }
    
    focusableElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            setPrimary(this);
        });
        
        element.addEventListener('mouseleave', function() {
            setPrimary(defaultPrimary);
        });
    });
});