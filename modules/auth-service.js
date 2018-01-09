export class Auth {
    constructor(provider) {
        this.provider = provider = new firebase.auth.GoogleAuthProvider();
        this.authRef = firebase.auth();
        this.currentUser;
    }

    isSignedIn() {
        if (firebase.auth().currentUser) {
            this.currentUser = firebase.auth().currentUser;
            return true;
        }
    }

    signOut() {
        this.authRef.signOut();
    }

    signIn() {
        this.authRef.signInWithPopup( this.provider );
    }
}
