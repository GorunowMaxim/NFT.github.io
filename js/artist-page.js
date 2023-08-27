const headerItems = document.querySelectorAll('.section-cards__item');

headerItems.forEach((el) => {
    el.addEventListener('click', () => {
        headerItems.forEach((element) => {
            element.classList.remove('section-cards__item_active')
        });
        el.classList.add('section-cards__item_active');
    });
});