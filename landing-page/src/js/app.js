const showNavbar = () => {
    document.querySelector(".nav-menu").classList.toggle("open-nav");
}

document.addEventListener('DOMContentLoaded', function () {
    const buttons = document.querySelectorAll('.accordion-button');

    buttons.forEach(function (button) {
        button.addEventListener('click', function () {
            const targetId = button.getAttribute('data-toggle');
            const targetContent = document.getElementById(targetId);

            if (targetContent.classList.contains('hidden')) {
                targetContent.classList.remove('hidden');
                button.setAttribute('aria-expanded', 'true');
            } else {
                targetContent.classList.add('hidden');
                button.setAttribute('aria-expanded', 'false');
            }
        });
    });
});