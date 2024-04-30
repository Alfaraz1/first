document.addEventListener("DOMContentLoaded", function() {
    const cars = document.querySelectorAll('.car');
    const modal = document.getElementById('modal');
    const modalContent = document.getElementById('modal-content');

    // Function to open modal and display car details
    function openModal(description) {
        modal.style.display = 'block';
        modalContent.innerHTML = description;
    }

    // Function to close modal
    function closeModal() {
        modal.style.display = 'none';
    }

    // Attach click event listener to each car
    cars.forEach(car => {
        car.addEventListener('click', function() {
            const description = this.querySelector('p').textContent;
            openModal(description);
        });
    });

    // Close modal when clicking outside of it
    window.onclick = function(event) {
        if (event.target == modal) {
            closeModal();
        }
    }
});

