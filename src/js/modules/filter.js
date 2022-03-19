const filter = (filterParentSelector, filterContentSelector, filterBtnSelector) => {
    const filterParent = document.querySelector(filterParentSelector);
    const filterServices = document.querySelectorAll(filterContentSelector);
    const filterBtn = document.querySelectorAll(filterBtnSelector);

    if (!filterParent) return;

    filterParent.addEventListener('click', (event) => {
        if (event.target.closest('[data-js-s]').tagName !== 'LI') return;

        let filterClass = event.target.closest('[data-js-s]').dataset.jsS;

        filterBtn.forEach((btn) => {
            btn.classList.remove('is-active');
        });

        event.target.closest('[data-js-s]').classList.add('is-active');
        
        filterServices.forEach((elem) => {
            elem.classList.add('animated', 'fadeIn');
            elem.classList.remove('hide');
            if (!elem.classList.contains(filterClass) && filterClass !== 'all') {
                elem.classList.add('hide');
                elem.classList.remove('animated', 'fadeIn');
            }
        });
    });
};

export default filter;