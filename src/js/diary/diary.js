import Utils from './../utils.js';
import separatorTemplate from './tmpls/page_separator_template.js'
import List from './list.js';

const list = new List({
    left: '#page_left',
    right: '#page_right'
});

export default class Header {
    constructor() {
        this.monthYearElements = document.querySelectorAll('.month_year');
        this.weekDaysElements = document.querySelectorAll('.week_days');
        this.separatorElements = document.querySelectorAll('.page_separator');
    }

    render() {
        this.monthYearElements.forEach((el) => {
            el.innerHTML = `<h4>${Utils.getMonthSortAndYear()}</h4>`;
        });
        this.weekDaysElements.forEach((el) => {
            el.innerHTML = `<h1>${Utils.getStartDay().format('D')} - ${Utils.getEndDay().format('D')}</h1>`
        });
        this.separatorElements.forEach((el) => {
            el.innerHTML = separatorTemplate();
        });
        list.render();
    }
};