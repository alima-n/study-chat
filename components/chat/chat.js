import {Auth} from '../../modules/auth-service.js';
import {Messages} from '../../modules/messages-service.js';

export class Chat {
    constructor( {el, data = {user: ''}}) {
        this.el = el;
        this.data = data;
        this.scrollStrategy = 'bottom';
        this.auth = new Auth();
        this.messages = new Messages('messages');
        this.messages.initMessaging({
            limitToLast: 10,
            events: ['child_added', 'child_changed'],
            callBack: this._getMessages
        });
    }

    render() {
        this.el.classList.add('chat', 'clearfix');
        this.el.innerHTML = this._getChatHTML(this.data);
    }

    _getChatHTML() {
        return chatTemplate(this.data);
    }

    _getMessages(data) {
        let val = data.val();
        let ul = document.querySelector('.chat__messages');
        let li = document.getElementById(data.key);
        if (!li) {
            let messageBox = document.createElement('li');
            messageBox.setAttribute('id', data.key);
            messageBox.classList.add('message-box', 'left-img');
            let date = new Date(val.time);
            let hours = date.getHours();
            let minutes = date.getMinutes();
            messageBox.innerHTML = messageTemplate({user: val.user, text: val.text, hours, minutes});
            ul.append(messageBox);
            ul.scrollTop = ul.scrollHeight;
        }
    }


}




