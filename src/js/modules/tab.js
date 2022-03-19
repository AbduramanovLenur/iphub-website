const tab = (tabContentSelector, tabBtnsSelector, tabParentSelector) => {
    const tabContent = document.querySelectorAll(tabContentSelector);
    const tabTrigger = document.querySelectorAll(tabBtnsSelector);
    const tabParent = document.querySelector(tabParentSelector);

    if (!tabParent) return;

    function hideTabContent() {
        tabContent.forEach(tab => {
            tab.classList.remove('show');
            tab.classList.add('hide');
        });

        tabTrigger.forEach(btn => btn.classList.remove('is-active'));
    }

    function showTabContent(i = 1) {
        tabContent[i].classList.remove('hide');
        tabContent[i].classList.add('show');

        tabTrigger[i].classList.add('is-active');
    }

    hideTabContent();
    showTabContent();

    tabParent.addEventListener('click', tabShowContentHandler);

    function tabShowContentHandler(e) {
        const target = e.target;

        if (target && target.classList.contains('teams__content-btn')) {
            tabTrigger.forEach((btn, i) => {
                if (target === btn) {
                    hideTabContent();
                    showTabContent(i);
                }
            });
        }
    }
};

export default tab;