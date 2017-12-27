export class Messages {
    constructor(dataRef) {
        this.dataRef = firebase.database().ref(dataRef);
    }

    initMessaging({limitToLast = 0, events = [], callBack}) {
        events.forEach( (event) => {
            return this.dataRef.limitToLast(limitToLast).on(event, callBack.bind(this));
        });
    }
}
