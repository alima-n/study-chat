export class Form {
    constructor({el, onSubmit, onChange}) {
        this.el = el;
        this.onSubmit = onSubmit;
        this.onChange = onChange;
        this.el.addEventListener('submit', this._onSubmit.bind(this));
        this.el.addEventListener('change', this._saveImg.bind(this));
    }

    render() {
        this.el.innerHTML = this._getHTML();
    }

    _getHTML() {
        return formTemplate();
    }

    _onSubmit(event) {
        event.preventDefault();
        this.textArea = event.target.querySelector('textarea');
        this.onSubmit({
            text: this.textArea.value
        });
        this.textArea.value = null;
    }

    _saveImg(event) {
        event.preventDefault();
        this.inputFile = document.querySelector('input');
        if ( event.target === this.inputFile ) {
            this.onChange({
                file: event.target.files[0]
            })
        }
    }
}
