const search = (inputSelector, servicesSelector) => {
    const input = document.querySelector(inputSelector);
    const services = document.querySelectorAll(servicesSelector);

    if (!input) return;

    input.addEventListener('input', function () {
        let value = this.value.trim().toLowerCase();
        if (value != '') {
            services.forEach(service => {
                
                if (service.innerText.toLowerCase().indexOf(value) == -1) {
                    service.classList.add('hide');
                } else {
                    service.classList.remove('hide');
                }
            });
        } else {
            services.forEach(service => {
                service.classList.remove('hide');
            });
        }
    });
};

export default search;