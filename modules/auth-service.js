export class Auth {
    constructor(provider) {
        this.provider = provider = new firebase.auth.GoogleAuthProvider();
        this.authRef = firebase.auth();
        this.authRef.onAuthStateChanged( this.onAuthStateChanged.bind(this) );
    }
    isSignedIn() {
        if (firebase.auth().currentUser) {
            return true;
        } else {
            firebase.auth().signInWithPopup( this.provider );
        }
    }
    onAuthStateChanged(user) {
        if (user) {
            this.userName = user.displayName;
            this.userAvatar = user.photoURL;
            return true;
        } else {
            firebase.auth().signInWithPopup( this.provider );
        }
    }
}
