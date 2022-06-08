import '../css/main.sass'

import Settings from './Modules/settings'
import Core from './Modules/core'

window.Selector = class {

    constructor(settings) {
        settings = new Settings(settings)
        Core.constructor(settings)
    }

    enable(element = null) {
        Core.enable(element)
    }

    disable(element = null) {
        Core.disable(element)
    }

    destroy() {
        Core.destroy()
    }

}
