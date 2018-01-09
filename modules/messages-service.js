export class Messages {
    constructor(dataRef) {
        this.dataRef = firebase.database().ref(dataRef);
    }

    initMessaging({limitToLast = 0, events = [], callback}) {
        events.forEach( (event) => {
            return this.dataRef.limitToLast(limitToLast).on(event, callback.bind(this));
        });
    }
}

