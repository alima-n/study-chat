export class Form {
    constructor({el, onSubmit}) {
        this.el = el;
        this.onSubmit = onSubmit;
        this.el.addEventListener('submit', this._onSubmit.bind(this));
    }

    render() {
        this.el.innerHTML = `
            <form>
                <textarea></textarea>
                <input type="submit" value="Отправить"/>
            </form>
        `;
    }
    _onSubmit(event) {
        event.preventDefault();
        this.onSubmit({
            text: event.target.querySelector('textarea').value
        });
    }
}
