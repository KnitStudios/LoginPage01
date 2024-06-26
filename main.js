// Add JS here
document.addEventListener('DOMContentLoaded', function() {
    const inputs = document.querySelectorAll('.input-container input');

    inputs.forEach(input => {
        input.addEventListener('focus', () => {
            input.classList.add('not-empty');
        });

        input.addEventListener('blur', () => {
            if (input.value === '') {
                input.classList.remove('not-empty');
            }
        });
    });
});
