const accordion = (triggesrSelector) => {
    const triggesSelector = document.querySelectorAll(triggesrSelector);

    if (!triggesSelector) return;

    triggesSelector.forEach(element => {
        element.addEventListener('click', function() {
            this.classList.toggle('is-active');
            this.nextElementSibling.classList.toggle('is-active');

            if (this.classList.contains('is-active')) {
                this.nextElementSibling.classList.add('animated', 'fadeIn');
                this.nextElementSibling.style.maxHeight = `${this.nextElementSibling.scrollHeight}px`;
            } else {
                this.nextElementSibling.classList.remove('animated', 'fadeIn');
                this.nextElementSibling.style.maxHeight = '0px';
            }
        });
    });
};

export default accordion;