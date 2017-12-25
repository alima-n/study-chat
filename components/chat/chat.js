export class Chat {
    constructor( {el, data = {messages: [], user: ''}}) {
        this.el = el;
        this.data = data;
        this.scrollStrategy = 'bottom';
    }

    render({scroll} = {}) {
        this._saveScrollTop();
        this.el.classList.add('chat', 'clearfix');
        this.el.innerHTML = this._getHTML(this.data);
        this._restoreScrollTop(scroll);
    }

    _getHTML() {
        return chatTemplate(this.data);
    }

    _saveScrollTop() {
        let chatBox = this.el.querySelector('.chat__messages');
        if (chatBox) {
            this._scrollTop = chatBox.scrollTop;
        }
    }

    _restoreScrollTop() {
        let chatBox = this.el.querySelector('.chat__messages');
        if (chatBox) {
            switch (this._scrollStrategy) {
                case 'bottom':
                    chatBox.scrollTop = chatBox.scrollHeight;
                    break;
                case 'fixed':
                    chatBox.scrollTop = this._scrollTop;
            }
        }
    }

    setScrollStrategy(strategy) {
        this._scrollStrategy = strategy;
    }

    addOne(data) {
        Object.assign(this.data, data);
    }
}
