export default class ItemList {
    constructor(data, tmpl) {
        this.data = data;
        this.el = document.createElement('div');
        this.tmpl = tmpl;
    }

    render() {
        this.el.innerHTML = this.tmpl(this.data);

        return this.el;
    }
}
