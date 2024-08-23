document.addEventListener('DOMContentLoaded', () => {
    // Remove spinner and show content when the page is fully loaded
    const spinner = document.getElementById('spinner');
    const content = document.getElementById('content');
    
    spinner.style.display = 'none';
    content.style.display = 'block';
});
