const swiperSlider = (swiperSelector, objSwiper) => {
    try {
        new Swiper(swiperSelector, objSwiper);
    } catch {}
};

export default swiperSlider;