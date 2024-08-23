
document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('myForm');

    form.addEventListener('submit', function(event) {
        // Clear previous error messages
        const errors = document.querySelectorAll('.error');
        errors.forEach(error => error.style.display = 'none');

        let valid = true;

        // Check name field
        const name = document.getElementById('name');
        if (name.value.trim() === '') {
            document.getElementById('nameError').style.display = 'block';
            valid = false;
        }

        // Check email field
        const email = document.getElementById('email');
        if (email.value.trim() === '') {
            document.getElementById('emailError').style.display = 'block';
            valid = false;
        } else if (!email.value.includes('@')) {
            document.getElementById('emailError').innerText = 'Please enter a valid email address';
            document.getElementById('emailError').style.display = 'block';
            valid = false;
        }

        // Check password field
        const password = document.getElementById('password');
        if (password.value.trim() === '') {
            document.getElementById('passwordError').style.display = 'block';
            valid = false;
        }

        if (!valid) {
            event.preventDefault(); // Prevent form from submitting
        }
    });
});
