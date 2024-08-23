// Get modal element
const modal = document.getElementById('modal');

// Get open modal button
const openModalButton = document.getElementById('openModal');

// Get close button
const closeModalButton = document.getElementById('closeModal');

// Function to open the modal
function openModal() {
    modal.style.display = 'flex'; // Use flex to center the modal
}

// Function to close the modal
function closeModal() {
    modal.style.display = 'none';
}

// Event listeners
openModalButton.addEventListener('click', openModal);
closeModalButton.addEventListener('click', closeModal);

// Close the modal if user clicks anywhere outside of the modal content
window.addEventListener('click', (event) => {
    if (event.target === modal) {
        closeModal();
    }
});
