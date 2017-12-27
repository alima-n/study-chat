import {Chat} from './../chat/chat.js';
import {Form} from './../form/form.js';

export class App {
    constructor({el}) {

        this.el = el;
        this.chat = new Chat({
            el: document.createElement('div'),
            data: {user: 'Alima'}
        });
        this.form = new Form({
            el: document.createElement('div'),
            onSubmit: this._onFormSubmit.bind(this)
        });

        this.el.append(this.chat.el, this.form.el);

        this.render();
    }

    render() {
        this.chat.render();
        this.form.render();
    }
    _onFormSubmit({text}) {
        if (this.chat.auth.isSignedIn() && text != 0) {
            this.chat.messages.dataRef.push({
                avatar: this.chat.auth.userAvatar,
                user: this.chat.auth.userName,
                text,
                time: Date.now()});
        }
    }
}

