
document.addEventListener('DOMContentLoaded', function() {
    const headers = document.querySelectorAll('.accordion-header');
    
    headers.forEach(header => {
        header.addEventListener('click', function() {
            // Close all sections except the one clicked
            headers.forEach(h => {
                if (h !== header) {
                    h.classList.remove('active');
                    h.nextElementSibling.style.display = 'none';
                }
            });

            // Toggle the clicked section
            const content = header.nextElementSibling;
            if (content.style.display === 'block') {
                content.style.display = 'none';
                header.classList.remove('active');
            } else {
                content.style.display = 'block';
                header.classList.add('active');
            }
        });
    });
});
