document.addEventListener('DOMContentLoaded', function () {
    var targetElement = document.getElementById('typedname');
    var textToType = "Ritesh Kapoor";
    var typeSpeed = 100; // Adjust to control typing speed

    function typeText(element, text, speed) {
        var index = 0;
        var intervalId = setInterval(function () {
            element.textContent += text[index];
            index++;
            if (index === text.length) {
                clearInterval(intervalId);
            }
        }, speed);
    }

    typeText(targetElement, textToType, typeSpeed);
});
