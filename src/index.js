// Libraries
import fancybox from './lib/fancybox'
import sliderSwiper from './lib/slider-swiper'

// Scripts
import anchorTransition from './ts/data-href'
import scrolled from './ts/scrolled'
import waved from './ts/waved'
import maskTel from './ts/mask-tel'
import inputs from './ts/inputs'
import range from './ts/range'
import formValidate from './ts/form-validate'
import scrollHeader from './ts/scroll-header'
import mobileMenu from './ts/mobile-menu'
import accordion from './ts/accordion'
import calc from './ts/calc'
import ages from './ts/ages'

// Style
import './scss/index.scss'

// Connection
window.addEventListener('DOMContentLoaded', () => {

    fancybox.init()
    sliderSwiper.init()
    anchorTransition.init()
    scrolled.init()
    waved.init()
    maskTel.init()
    inputs.init()
    range.init()
    formValidate.init()
    scrollHeader.init()
    mobileMenu.init()
    accordion.init()
    calc.init()
    ages.init()
    
})