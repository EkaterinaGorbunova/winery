window.addEventListener('DOMContentLoaded', () => {
    const swiper = new Swiper('.swiper', {
        loop: true,
        centeredSlides: true,
        initialSlide: 1,
        autoplay: {
            delay: 1500,
            disableOnInteraction: false
        },
        breakpoints: {
            320: {
                slidesPerView: 1.2,
                spaceBetween: 20,
            },
            450: {
                slidesPerView: 1.4,
                spaceBetween: 30,
            }
        }
    });
})

