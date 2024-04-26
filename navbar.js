document.addEventListener('DOMContentLoaded', function() {
    const menuItems = document.querySelectorAll('.menu-item');

    menuItems.forEach(function(item) {
        item.addEventListener('mouseenter', function() {
            this.style.color = '#ff6347';
            this.style.fontFamily = 'Courier New, Courier, monospace';
        });

        item.addEventListener('mouseleave', function() {
            this.style.color = '#fff';
            this.style.fontFamily = 'Arial, sans-serif';
        });
    });
});

