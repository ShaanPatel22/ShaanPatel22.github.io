$(document).ready(function () {
    const totalSlides = $('.form-slide').length;
    let currentSlide = 0;

    const updateProgressBar = () => {
        const progressPercentage = ((currentSlide + 1) / totalSlides) * 100;
        $('#progress').css('width', `${progressPercentage}%`);
        if (currentSlide === totalSlides - 1) {
            $('#progress').css('background-color', '#28a745');
        } else {
            $('#progress').css('background-color', '#FF4500');
        }
    };

    window.selectOption = (button) => {
        $(button).closest('.form-slide').find('.option-button').removeClass('selected');
        $(button).addClass('selected');
    };

    window.nextSlide = () => {
        if (currentSlide < totalSlides - 1) {
            currentSlide++;
            $('.form-slide').eq(currentSlide - 1).removeClass('active');
            $('.form-slide').eq(currentSlide).addClass('active');
            updateProgressBar();
        }
    };

    window.prevSlide = () => {
        if (currentSlide > 0) {
            currentSlide--;
            $('.form-slide').eq(currentSlide + 1).removeClass('active');
            $('.form-slide').eq(currentSlide).addClass('active');
            updateProgressBar();
        }
    };

    window.completeForm = () => {
        nextSlide();
    };

    updateProgressBar(); // Call on page load to initialize with the correct color
});
