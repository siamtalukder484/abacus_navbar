
document.addEventListener('DOMContentLoaded', () => {
    const toggles = document.querySelectorAll('[data-toggle="toggle"]');

    toggles.forEach((toggleWrapper) => {
        toggleWrapper.addEventListener('click', () => {
            const parent = toggleWrapper.closest('.footer_section');
            const arrowIcon = parent.querySelector('.arrowicon');
            const links = parent.querySelector('.footer_links');

            if (links) {
                links.classList.toggle('active');
            }

            if (arrowIcon) {
                arrowIcon.classList.toggle('rotate');
            }
        });
    });
});
