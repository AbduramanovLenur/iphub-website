import burger from './modules/burger';
import swiperSlider from './modules/swiper';
import imask from './modules/imask';
import modal from './modules/modals';
import tab from './modules/tab';
import accordion from './modules/accordion';
import search from './modules/search';
import filter from './modules/filter';
import filterSelect from './modules/filter-select';

document.addEventListener('DOMContentLoaded', () => {
    document.body.classList.add('dom-is-ready');
    AOS.init();
    burger();
    swiperSlider('.swiper-solution', {
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        slidesPerView: 4,
        spaceBetween: 30,
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            540: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30
            },
            1000: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
    });
    swiperSlider('.swiper-questions', {
        spaceBetween: 30,
        pagination: {
            el: '.questions-pagination',
            type: 'custom',
            renderCustom: function (swiper, current, total) {
                let currentFormatted = (current < 10) ? `0${current}` : current;
                let totalFormatted = (total < 10) ? `0${total}` : total;

                return `<span class="swiper-questions-pagination-span">${currentFormatted}</span>/${totalFormatted}`;
            }
        },
        navigation: {
            nextEl: '.questions-button-next',
            prevEl: '.questions-button-prev',
        },
    });
    swiperSlider('.swiper-case', {
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
            nextEl: '.case-button-next',
            prevEl: '.case-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            1000: {
                slidesPerView: 2,
                spaceBetween: 30,
            }
        }
    });
    imask('[data-js-phone]', '+{998} (00) 000-00-00');
    modal('[data-js-modal]', '[data-consultaion-btn]', '[data-js-modal-close]');
    swiperSlider('.swiper-teams', {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.teams-button-next',
            prevEl: '.teams-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1000: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
    });
    tab('[data-js-tab-content]', '[data-js-tab-btn]', '[data-js-tab-parent]');
    swiperSlider('.services-reg-swiper', {
        slidesPerView: 4,
        spaceBetween: 30,
        navigation: {
            nextEl: '.services-reg-button-next',
            prevEl: '.services-reg-button-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            480: {
                slidesPerView: 2,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 3,
                spaceBetween: 30,
            },
            1152: {
                slidesPerView: 4,
                spaceBetween: 30,
            }
        }
    });
    accordion('[data-js-accordion]');
    swiperSlider('.swiper-info-companie-task', {
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
            nextEl: '.info-companie-task-next',
            prevEl: '.info-companie-task-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            }
        }
    });
    swiperSlider('.swiper-info-companie-result', {
        slidesPerView: 2,
        spaceBetween: 30,
        navigation: {
            nextEl: '.info-companie-result-next',
            prevEl: '.info-companie-result-prev',
        },
        breakpoints: {
            320: {
                slidesPerView: 1,
                spaceBetween: 30
            },
            768: {
                slidesPerView: 2,
                spaceBetween: 30
            }
        }
    });
    search('[data-js-services-input]', '[data-js-service]');
    filter('[data-js-filter-parent]', '[data-js-service-filter]', '[data-js-services-btn]');
    filterSelect('[data-js-services-select]', '[data-js-service-filter]');
});