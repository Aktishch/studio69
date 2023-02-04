import { Fancybox } from '@fancyapps/ui'
import ru from '@fancyapps/ui/src/Fancybox/l10n/ru'
import '@fancyapps/ui/dist/fancybox.css'

const init = () => {

    Fancybox.defaults.trapFocus = false
    Fancybox.defaults.autoFocus = false
    Fancybox.defaults.placeFocusBack = false
    Fancybox.defaults.l10n = ru

    Fancybox.defaults.template.spinner = `
        <div class="loader">
            <span class="loader__circle">
                <svg class="icon">
                    <use xlink:href="img/icons.svg#loader" />
                </svg>
            </span>
        </div>`

    Fancybox.bind('[data-fancybox-modal]', {

        dragToClose: false,
        mainClass: 'fancybox-modal',

    })

    window.Fancybox = Fancybox

}

export default { init }