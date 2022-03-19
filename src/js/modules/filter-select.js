const filterSelect = (parentSelector, contentSelctor) => {
    const parentSelect = document.querySelector(parentSelector);
    const filterServices = document.querySelectorAll(contentSelctor);

    if(!parentSelect) return;

    parentSelect.addEventListener('change', selectValueHandler);

    function selectValueHandler() {
        let value = parentSelect.value;

        filterServices.forEach((elem) => {
            elem.classList.add('animated', 'fadeIn');
            elem.classList.remove('hide');
            if (!elem.classList.contains(value) && value !== 'all') {
                elem.classList.add('hide');
                elem.classList.remove('animated', 'fadeIn');
            }
        });
    }
};

export default filterSelect;