import Events from './events'

export default class Render {

    constructor(element, settings, instance) {

        this.Settings = settings.data
        this.Events = new Events(settings, instance)
        this.Instance = instance
        this._element = element
        this.hideOrigin()

        this._render = null

    }

    hideOrigin() {

        this._element.style.display = 'none'

    }

    renderParent() {

        let template = this.Instance.parentTemplate.cloneNode(true)
        const data = this.Settings

        template.id = this._element.id
        template.dataset.reference = this._element.name
        template.dataset.type = data.type || this._element.dataset.type || 'default'
        this._element.disabled ? template.dataset.disabled = true : ''

        if(data.identifier) {
            template.dataset.identifier = data.identifier
            this._element.setAttribute('data-identifier', data.identifier)
        }

        data.relative ? template.classList.add('relative') : ''
        this._render = template

    }

    renderContent() {

        let result
        let options = this._render.querySelector('.selector-options')

        if(this.Settings.cover)
            options.classList.add('cover')

        this.Events.showOptions(options, this._render)

        if(this.Instance.isFilterType()) {

            const filterRender = this.renderSearch()
            options.appendChild(filterRender)
            this.Events.filterOptions(filterRender, this._render)

        }

        Array.from(this._element.children).forEach(child => {

            const tagName = child.tagName

            if(tagName === 'OPTGROUP')
                result = this.renderGroup(child)
            else if(tagName === 'OPTION')
                result = this.renderOption(child)
            else
                return

            options.appendChild(result)

        })

        if(this.Instance.isFilterType())
            this.Events.createIndex(options)

        this.Events.select(this._render)

    }

    renderSearch() {

        if(!this.Instance.filterTemplate)
            this.Instance.createFilterElement()

        return this.Instance.filterTemplate.cloneNode(true)

    }

    renderGroup(element) {

        let template = this.Instance.groupTemplate.cloneNode(true)
        template.dataset.group = template.children[0].innerText = element.label
        element.disabled ? template.dataset.disabled = true : ''

        Array.from(element.children).forEach(option => {
            template.appendChild(this.renderOption(option))
        })

        return template

    }

    renderOption(element) {

        let template = this.Instance.optionTemplate.cloneNode(true)

        Object.keys(element.dataset).forEach(attribute => {
            template.dataset[attribute] = element.dataset[attribute]
        })

        template.dataset.item = element.value
        template.children[0].innerText = element.innerText
        element.disabled ? template.dataset.disabled = true : ''
        element.selected ? template.dataset.selected = true : ''

        return template

    }

    renderSelected() {

        let selected = this._render.querySelector('.selector-selected')
        let selectedOption = this._element.querySelector('[selected]')
        const data = this.Settings

        if(selectedOption) {
            selected.dataset.item = selectedOption.value
            selected.children[0].innerText = selectedOption.innerText
        } else {
            selected.dataset.item = null
            selected.children[0].innerText = '---'
        }

        if(this._element.dataset.label)
            selected.children[0].innerText = this._element.dataset.label
        else if(data.label)
            selected.children[0].innerText = data.label

    }

    show() {

        const data = this.Settings

        data.beforeCreate
            ? data.beforeCreate()
            : (function() {})()

        this._element.parentNode.insertBefore(this._render, this._element.nextSibling)

        data.created
            ? data.created()
            : data.callback
                ? data.callback()
                : (function() {})()

        return this._render

    }

}