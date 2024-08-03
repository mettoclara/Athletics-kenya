let currentSlide = 0;
document.addEventListener('DOMContentLoaded', function () {
    const cvPrintBtns = document.querySelectorAll('.cv-print-btn');
    cvPrintBtns.forEach(function (btn) {
        btn.addEventListener('click', function () {
            btn.classList.add('hidden'); // Hide the print button
            window.print();
        });
    });

    window.onafterprint = function () {
        cvPrintBtns.forEach(function (btn) {
            btn.classList.remove('hidden'); // Show the print button after printing
        });
    };
});





document.addEventListener('DOMContentLoaded', function() {
    const slides = document.querySelectorAll('.cv');
    const prevButton = document.querySelector('.prev');
    const nextButton = document.querySelector('.next');
    const printButtons = document.querySelectorAll('.cv-print-btn');

    function changeSlide(direction) {
        slides[currentSlide].classList.remove('active');
        
        currentSlide += direction;

        if (currentSlide < 0) {
            currentSlide = slides.length - 1;
        } else if (currentSlide >= slides.length) {
            currentSlide = 0;
        }

        slides[currentSlide].classList.add('active');
    }

    function printCV() {
        const activeCV = document.querySelector('.cv.active');
        const originalContent = document.body.innerHTML;
        const watermark = `
            <div class="watermark-container">
                <img src="images/logo1.PNG" alt="Watermark" class="watermark">
            </div>
        `;
        const printContent = `
            <div class="cv-container">
                ${watermark}
                ${activeCV.outerHTML}
            </div>
        `;

        document.body.innerHTML = printContent;
        window.print();
        document.body.innerHTML = originalContent;
        location.reload(); // Reload to reinitialize the JS and CSS
    }

    // Set up event listeners
    prevButton.addEventListener('click', () => changeSlide(-1));
    nextButton.addEventListener('click', () => changeSlide(1));
    printButtons.forEach(button => button.addEventListener('click', printCV));

    // Automatically change slides every 2 seconds
    // setInterval(() => {
    //     changeSlide(1);
    // }, 6000);
});

document.addEventListener('DOMContentLoaded', function() {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.getElementById('nav-links');

    menuToggle.addEventListener('click', function() {
        navLinks.classList.toggle('active');
    });
});

document.addEventListener('DOMContentLoaded', function () {
    const menuToggle = document.querySelector('.menu-toggle');
    const navLinks = document.querySelector('.nav-linksm');

    menuToggle.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});