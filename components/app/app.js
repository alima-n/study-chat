import {Chat} from './../chat/chat.js';
import {Form} from './../form/form.js';

const USER_NAME = 'Alima';

export class App {
    constructor({el}) {
        this.el = el;
        this.chat = new Chat({
            el: document.createElement('div'),
            data: {messages: [], user: USER_NAME}
        });
        this.form = new Form({
            el: document.createElement('div'),
            onSubmit: this._onFormSubmit.bind(this)
        });

        this.el.append(this.chat.el, this.form.el);

        this.chat.addOne({
            messages: [
                {
                    sender: 'Ekaterina',
                    text: 'Lorem ipsum dolor sit amet',
                    time: '20:35',
                    online: true
                },
                {
                    sender: 'Ivan',
                    text: 'met, consectetur adipisicing elit.',
                    time: '21:15',
                    online: false
                },
                {
                    sender: 'Ekaterina',
                    text: 'Lorem ipsum dolor sit amet',
                    time: '20:35',
                    online: true
                }
            ]
        });
        this.render();
    }

    render() {
        this.chat.render();
        this.form.render();
    }
    _onFormSubmit({text}) {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        this.chat.addOne({
            messages: [
            ...this.chat.data.messages,
            {
                text,
                sender: USER_NAME,
                time: `${hours}:${minutes}`
            }]
        });
        this.chat.setScrollStrategy('bottom');
        this.render();
    }
}
