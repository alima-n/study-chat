export class Form {
    constructor({el, onSubmit}) {
        this.el = el;
        this.onSubmit = onSubmit;
        this.el.addEventListener('submit', this._onSubmit.bind(this));
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
}
