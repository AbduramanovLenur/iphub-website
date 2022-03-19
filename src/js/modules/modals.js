const modal = (modalSelector, modalBtnSelector, modalCloseSelector) => {
    try {
        const modal = document.querySelector(modalSelector);
        const btns = document.querySelectorAll(modalBtnSelector);
        const close = document.querySelector(modalCloseSelector);

        if (!modal) return;

        modal.addEventListener('click', modalCloseHandler);
        btns.forEach(btn => {
            btn.addEventListener('click', openModalHandler);
        });
        close.addEventListener('click', closeModalHandler);
        document.addEventListener('keydown', keydownCloseHandler);

        function modalCloseHandler(event) {
            if (event.target === modal) {
                closeModal();
            }
        }
        function openModalHandler() {
            openModal();
        }
        function closeModalHandler() {
            closeModal();
        }
        function keydownCloseHandler(event) {
            if (event.code === 'Escape' && modal.classList.contains('is-active')) {
                closeModal();
            };
        }

        function openModal() {
            modal.classList.add('is-active');
            document.body.style.overflow = 'hidden';
        }
        function closeModal() {
            modal.classList.remove('is-active');
            document.body.style.overflow = '';
        }
    } catch (error) { }
};

export default modal;