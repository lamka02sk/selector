export default class {

    constructor(settings, instance) {
        this.Settings = settings
        this.Instance = instance
    }

    static closeSelector() {

        document.addEventListener('click', event => {

            const instances = document.querySelectorAll('.selector-element')

            instances.forEach(instance => {
                if(event.target !== instance && !instance.contains(event.target))
                    instance.querySelectorAll('.selector-options, .selector-selected')
                        .forEach(element => element.classList.remove('visible'))
            })

        })

    }

    showOptions(options, parent) {

        const data = this.Settings.data
        const filter = this.Instance.isFilterType()

        parent.querySelector('.selector-selected').addEventListener('click', event => {

            if(parent.matches('[data-disabled]') || this.Instance.render.hasAttribute('data-disabled'))
                return

            options.classList.toggle('visible')
            event.currentTarget.classList.toggle('visible')

            if(filter) {

                const input = parent.querySelector('input')

                input.focus()
                input.value = ''
                input.oninput()

            }

            options.classList.contains('visible')
                ? data.closed
                    ? data.closed()
                    : data.onClose
                        ? data.onClose()
                        : (function() {})()
                : data.opened
                    ? data.opened()
                    : data.onOpen
                        ? data.onOpen()
                        : (function() {})()

        })

    }

    clearFilter(button, input) {
        
        button.addEventListener('click', () => {
            input.value = ''
            input.oninput()
        })

    }

    filterOptions(filter, parent) {

        let inputElement = filter.querySelector('input')
        let options = parent.querySelector('.selector-options')
        this.clearFilter(filter.querySelector('span'), inputElement)

        this.createIndex(options)

        inputElement.oninput = () => {

            const input = inputElement.value.trim().toLowerCase()
            let optionsList = options.querySelectorAll('.selector-option')

            JSON.parse(options.dataset.index).forEach((option, index) => {

                if(~option[0].indexOf(input) || ~option[1].indexOf(input))
                    optionsList[index].classList.add('show')
                else
                    optionsList[index].classList.remove('show')

            })

        }

        inputElement.onkeypress = event => {

            if(event.keyCode && event.keyCode === 13) {

                event.preventDefault()

                let options = parent.querySelectorAll('.selector-option.show')

                if(options.length !== 1)
                    return

                options[0].click()

            }

        }

    }

    createIndex(options) {

        let index = Array.from(options.querySelectorAll('.selector-option')).map(option => {
            return [option.children[0].innerText.toLowerCase(), option.dataset.item.toLowerCase()]
        })

        options.dataset.index = JSON.stringify(index)

    }

    select(parent) {

        let current = parent.querySelector('.selector-selected')
        const settings = this.Settings.data
        let origin = document.querySelector('select[name="' + parent.dataset.reference + '"]')

        parent.querySelector('.selector-options').addEventListener('click', event => {

            let target = event.target
            const selector = '.selector-option'

            if(target.matches(selector) || target.parentNode.matches(selector)) {

                if(!target.matches(selector))
                    target = target.parentNode

                if(target.dataset.disabled || target.dataset.selected || target.parentNode.matches('[data-disabled]'))
                    return

                let selected = parent.querySelector('[data-selected]')
                let option = target.dataset.item

                settings.beforeSelect
                    ? settings.beforeSelect(parent, option)
                    : function() {}

                delete selected.dataset.selected
                target.dataset.selected = ''
                current.dataset.item = option
                current.children[0].innerText = target.children[0].innerText
                current.click()

                origin.querySelector('[selected]').removeAttribute('selected')
                origin.querySelector('[value="' + target.dataset.item + '"]').setAttribute('selected', 'true')

                settings.selected
                    ? settings.selected(parent, target.dataset.item)
                    : settings.onSelect
                        ? settings.onSelect(parent, target)
                        : function() {}

            }

        })

    }

}