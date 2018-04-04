import ItemList from './item_list.js';
import ItemLeftTemplate from "./tmpls/item_left_list_template.js";
import ItemRightTemplate from "./tmpls/item_right_list_template.js";
import getNameDay from "./../services.js";
import Utils from "./../utils.js";

export default class List {
    constructor(container) {
        this.pageLeft = document.querySelector(container.left);
        this.pageRight = document.querySelector(container.right);
        this.itemsLeft = [];
        this.itemsRight = [];
    }

    addLeftPage(data) {
        const itemLeft = new ItemList(data, ItemLeftTemplate);
        this.itemsLeft.push(itemLeft);
        this.pageLeft.appendChild(itemLeft.render());
    }

    addRightPage() {
        const itemRight = new ItemList(null, ItemRightTemplate);
        this.itemsRight.push(itemRight);
        this.pageRight.appendChild(itemRight.render());
    }

    render() {
        Utils.getDaysOfWeek().map((day) => {
            getNameDay({day: day.date(), month: day.month() + 1})
                .then((response) => {
                    this.addLeftPage({
                        numDay: day.date(),
                        nameDay: day.format('ddd'),
                        description: response.data.name_es,
                    });
                    this.addRightPage();
                });
        });

    }
};
