document.addEventListener('DOMContentLoaded', function() {

    const bottleContainers = document.querySelectorAll('.bottle-container');


    bottleContainers.forEach(container => {

        const infoSquare1 = container.querySelector('.info-square1');
        const infoSquare2 = container.querySelector('.info-square2');
        const infoSquare3 = container.querySelector('.info-square3');

 
        container.addEventListener('mouseenter', () => {

            bottleContainers.forEach(container => {
                const square1 = container.querySelector('.info-square1');
                if (square1) square1.style.display = 'none';
                const square2 = container.querySelector('.info-square2');
                if (square2) square2.style.display = 'none';
                const square3 = container.querySelector('.info-square3');
                if (square3) square3.style.display = 'none';
            });


            if (infoSquare1) infoSquare1.style.display = 'block';
            if (infoSquare2) infoSquare2.style.display = 'block';
            if (infoSquare3) infoSquare3.style.display = 'block';
        });


        container.addEventListener('mouseleave', () => {

            if (infoSquare1) infoSquare1.style.display = 'none';
            if (infoSquare2) infoSquare2.style.display = 'none';
            if (infoSquare3) infoSquare3.style.display = 'none';
        });
    });
});
