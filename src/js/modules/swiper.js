const swiperSlider = (swiperSelector, objSwiper) => {
    const element = document.querySelector(swiperSelector);
    if (!element) return;
    new Swiper(element, objSwiper);
};

export default swiperSlider;