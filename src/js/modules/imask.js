import IMask from 'imask';

const imask = (inputSelector, maskNumbers) => {
    const inputsImask = document.querySelectorAll(inputSelector);

    if (!inputsImask) return;

    inputsImask.forEach(inputsImask => {
        IMask(inputsImask, {
            mask: maskNumbers
        });
    });
};

export default imask;