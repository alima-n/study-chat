'use strict';

class Chat {
    constructor() {
        this.target = document.querySelector('#js-app');
        this.target.innerHTML = `
            <div class="user-field">
                <span id="user-pic"></span>
                <span id="user-name"></span>
                <input id="sign-in" type="button" value="Войти" />
                <input id="sign-out" type="button" />
            </div>
            <div class="messages-block">
                <div id="messages"></div>
                <form id="send-form" action="#">
                    <textarea id="message-input" required maxlength="500" placeholder="Введите сообщение..."></textarea>
                    <button id="send-txt">Отправить</button>
                </form>
            </div>
            <form id="image-form" action="#">
                <input id="send-img" type="file" accept="image/*" capture="camera">        
            </form>
        `;

        this.messagesInDatabase = firebase.database().ref('messages');
        this.provider = new firebase.auth.GoogleAuthProvider();
        this.messagesToShow = document.getElementById('messages');
        this.messageInput = document.getElementById('message-input');

        this.signinBtn = document.getElementById('sign-in');
        this.signoutBtn = document.getElementById('sign-out');

        this.signoutBtn.addEventListener('click', ()=> firebase.auth().signOut() );
        this.signinBtn.addEventListener('click', ()=> firebase.auth().signInWithPopup(this.provider) );

        firebase.auth().onAuthStateChanged( this.onAuthStateChanged.bind(this) );
        document.getElementById('send-form').addEventListener('submit', this.pushNewMessageToDB.bind(this));
        document.getElementById('send-img').addEventListener('change', this.saveImageMessage.bind(this));

        this.messageInput.focus();
    }

    static isSignedIn() {
        if (firebase.auth().currentUser) {
            return true;
        } else {
            firebase.auth().signInWithPopup( this.prototype.constructor.provider );
        }
    }

    static setImageUrl(imageUri, imgElement) {
        if (imageUri.startsWith('gs://')) {
            imgElement.src = 'http://dev.nurgazieva.com/loader.svg';
            let imgRef = firebase.storage().refFromURL(imageUri);
            imgRef.getMetadata().then( (metadata) => imgElement.src = metadata.downloadURLs[0] );
        } else {
            imgElement.src = imageUri;
        }
    }

    onAuthStateChanged(user) {
        let userName = document.getElementById('user-name');
        let userPic = document.getElementById('user-pic');

        if (user) {
            userPic.innerHTML = `<img src="${user.photoURL}" alt="Фото пользователя"/>`;
            userName.textContent = user.displayName;
            userName.removeAttribute('hidden');
            this.signoutBtn.removeAttribute('hidden');
            this.signinBtn.setAttribute('hidden', 'true');
            this.messagesInDatabase.limitToLast(10).on('child_added', this.addMessage.bind(this));
            this.messagesInDatabase.limitToLast(10).on('child_changed', this.addMessage.bind(this));
        } else {
            userName.setAttribute('hidden', 'true');
            this.signoutBtn.setAttribute('hidden', 'true');
            this.signinBtn.removeAttribute('hidden');
            userPic.innerHTML = '';
        }
    }

    pushNewMessageToDB(e) {
        e.preventDefault();
        if (+this.messageInput.value !== 0 && this.constructor.isSignedIn()) {
            this.messagesInDatabase.push({
                photoUrl: firebase.auth().currentUser.photoURL,
                name: firebase.auth().currentUser.displayName,
                message: this.messageInput.value});
                this.messageInput.value = null;
        } else if ( +this.messageInput.value === 0 ) {
            alert('Cообщение не может быть пустым!');
        }
    }

    addMessage(data) {
        let val = data.val();
        this.showMessages(data.key, val.name, val.message, val.photoUrl, val.imageUrl);
    }

    showMessages(key, name, msg, picUrl, imageUri) {
        let div = document.getElementById(key);
        if (!div) {
            let container = document.createElement('div');
            container.innerHTML =
            `<div class="message-block">
                <div class="user-info"><span class="pic"></span><i class="name"></i></div>
                <div class="message"></div>
            </div>`;
            div = container.firstChild;
            div.setAttribute('id', key);
            this.messagesToShow.append(div);
        }

        div.querySelector('.pic').innerHTML = `<img src="${picUrl}" alt="${name}" width = "20" height="20" />`;
        div.querySelector('.name').textContent = name;
        let messageElement = div.querySelector('.message');

        if (msg) {
            messageElement.textContent = msg;
        } else if (imageUri) {
            let image = document.createElement('img');
            image.addEventListener('load', () => this.messagesToShow.scrollTop = this.messagesToShow.scrollHeight);
            this.constructor.setImageUrl(imageUri, image);
            messageElement.innerHTML = '';
            messageElement.appendChild(image);
        }

        this.messagesToShow.scrollTop = this.messagesToShow.scrollHeight;
        this.messageInput.focus();
    }

    saveImageMessage(e) {
        e.preventDefault();
        if (this.constructor.isSignedIn()) {
            let file = e.target.files[0];
            let currentUser = firebase.auth().currentUser;
            this.messagesInDatabase.push({
                name: currentUser.displayName,
                imageUrl: 'http://dev.nurgazieva.com/loader.svg',
                photoUrl: currentUser.photoURL
            })
            .then( function(data) {
                let date = new Date();
                let filePath = `${currentUser.displayName}/${date.getFullYear()+'-'+(date.getMonth()+1)+'-'+date.getDate()}/${file.name}`;
                return firebase.storage().ref(filePath).put(file);
            }).then( function(snapshot) {
                let fullPath = snapshot.metadata.fullPath;
                return data.update({imageUrl: firebase.storage().ref(fullPath).toString()});
            });
        }
    }
}


