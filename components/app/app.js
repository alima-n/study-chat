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
            onSubmit: this._onFormSubmit.bind(this),
            onChange: this._onInputChange.bind(this)
        });
        this.el.append(this.chat.el, this.form.el);
        this.chat.el.addEventListener('click', this._onSignInAndOut.bind(this));
        this.render();
    }

    render() {
        this.chat.render();
        this.form.render();
    }

    _onSignInAndOut(e) {
        let signInBtn = document.querySelector('#sign-in');
        let signOutBtn = document.querySelector('#sign-out');

        switch (e.target) {
            case signOutBtn:
                this.chat.signOut();
            case signInBtn:
                this.chat.signIn();
        }
    }

    _onFormSubmit({text}) {
        if (this.chat.auth.isSignedIn() && text != 0) {
            this.chat.messages.dataRef.push({
                avatar: this.chat.userAvatar,
                user: this.chat.userName,
                text,
                time: Date.now()});
        }
    }

    _onInputChange({file}){
        if ( this.chat.auth.isSignedIn() ) {
            let user = this.chat.auth.currentUser;
            this.chat.messages.dataRef.push({
            user: user.displayName,
            fileURL: 'http://dev.nurgazieva.com/loader.svg',
            avatar: user.photoURL,
            time: Date.now()
          }).then(function(data) {
            let date = new Date();
            let filePath = `${user.uid}/${date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()}/${file.name}`;
            return firebase.storage().ref(filePath).put(file).then(function(snapshot) {
              let fullPath = snapshot.metadata.fullPath;
              return data.update({fileURL: firebase.storage().ref(fullPath).toString()});
            }.bind(this));
          }.bind(this)).catch(function(error) {
            console.error('Ошибка при загрузке файла в хранилище', error);
          });

        }
    }

}

