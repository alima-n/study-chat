import {Auth} from '../../modules/auth-service.js';
import {Messages} from '../../modules/messages-service.js';

export class Chat {
    constructor( {el, data = {user: ''}}) {
        this.el = el;
        this.data = data;
        this.scrollStrategy = 'bottom';
        this.auth = new Auth();
        this.messages = new Messages('messages');
        this.auth.authRef.onAuthStateChanged( this.onAuthStateChanged.bind(this) );
        this.userName;
        this.userAvatar;
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
        let message = document.getElementById(data.key);
        if ( !message ) {
            let message = document.createElement('div');
            if ( val.user === firebase.auth().currentUser.displayName ) {
                message.classList.add('is-mine');
            };
            message.innerHTML = messageTemplate({key: data.key, user: val.user, text: val.text, time: val.time});
            if ( val.fileURL ) {
                let url;
                firebase.storage().refFromURL(val.fileURL).getMetadata()
                .then( (metadata) => url = metadata.downloadURLs[0] )
                .then( () => message.innerHTML = messageTemplate({key: data.key, user: val.user, text: val.text, time: val.time, url: url}) )
                .then( () => {
                    let img = message.querySelector('img');
                    img.addEventListener('load', () => ul.scrollTop = ul.scrollHeight);
                });
            }
            ul.append(message);
            ul.scrollTop = ul.scrollHeight;
        }
    }

    onAuthStateChanged(user) {
        let signInBtn = document.querySelector('#sign-in');
        let signOutBtn = document.querySelector('#sign-out');

        if (user) {
            signInBtn.hidden = true;
            signOutBtn.hidden = false;
            this.userName = user.displayName;
            this.userAvatar = user.photoURL;
            this.messages.initMessaging({
                limitToLast: 15,
                events: ['child_added', 'child_changed'],
                callback: this._getMessages
            });
            this.el.querySelector('.chat__user-info').textContent = `Вы вошли в чат как ${this.userName}`;
        } else {
            this.el.innerHTML = this._getChatHTML(this.data);
            signOutBtn.hidden = true;
            signInBtn.hidden = false;
        }
    }

    signOut() {
        this.auth.signOut();
        this.el.querySelector('.chat__messages').innerHTML = null;
    }

    signIn() {
        this.auth.signIn();
    }

}



