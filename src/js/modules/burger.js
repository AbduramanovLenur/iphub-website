const burger = () => {
    const menu = document.querySelector('.burger');
    const hamburger = document.querySelector('.hamburger');

    if (!menu) return;

    menu.addEventListener('click', () => {
        document.body.classList.toggle('is-active');
        menu.classList.toggle('is-active');
        hamburger.classList.toggle('is-active');
    });
};

export default burger;