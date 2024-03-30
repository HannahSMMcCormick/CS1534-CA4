document.addEventListener('DOMContentLoaded', function() {
    // Get all bottle containers
    const bottleContainers = document.querySelectorAll('.bottle-container');

    // Add event listeners to each container
    bottleContainers.forEach(container => {
        // Get the info square within the container
        const infoSquare1 = container.querySelector('.info-square1');
        const infoSquare2 = container.querySelector('.info-square2');
        const infoSquare3 = container.querySelector('.info-square3');

        // Show corresponding info square on hover
        container.addEventListener('mouseenter', () => {
            // Hide all info squares
            bottleContainers.forEach(container => {
                const square1 = container.querySelector('.info-square1');
                if (square1) square1.style.display = 'none';
                const square2 = container.querySelector('.info-square2');
                if (square2) square2.style.display = 'none';
                const square3 = container.querySelector('.info-square3');
                if (square3) square3.style.display = 'none';
            });

            // Show info square of the current container
            if (infoSquare1) infoSquare1.style.display = 'block';
            if (infoSquare2) infoSquare2.style.display = 'block';
            if (infoSquare3) infoSquare3.style.display = 'block';
        });

        // Hide info square when mouse leaves
        container.addEventListener('mouseleave', () => {
            // Hide info square when mouse leaves
            if (infoSquare1) infoSquare1.style.display = 'none';
            if (infoSquare2) infoSquare2.style.display = 'none';
            if (infoSquare3) infoSquare3.style.display = 'none';
        });
    });
});
