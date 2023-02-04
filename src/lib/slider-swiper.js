import Swiper from 'swiper/bundle'
import 'swiper/css/bundle'

const init = () => {

    const sliderGallery = new Swiper('.calculation-slider .swiper', {

        slidesPerView: 'auto',
        loop: true,
        effect: 'fade',
        allowTouchMove: false,
        speed: 1000,

        autoplay: {

            delay: 5000,
            stopOnLastSlide: false,
            disableOnInteraction: false

        }

    })

    window.Swiper = Swiper

}

export default { init }