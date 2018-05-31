import { Component } from '@angular/core';
import {Item} from './Item';

@Component({
    selector: 'purchase-app',
    templateUrl: '../../app.html',
    styles: [`h2, p {color:#333;}`]
})
export class AppComponent {
    items: Item[] =
        [
            { purchase: "Bread", done: false, price: 15.9 },
            { purchase: "Butter", done: false, price: 60 },
            { purchase: "Potato", done: true, price: 22.6 },
            { purchase: "Cheese", done: false, price: 310 }
        ];
    addItem(text: string, price: number): void {

        if (text == null || text.trim() == "" || price == null)
            return;
        this.items.push(new Item(text, price));
    };
    name = "Mark";
    userAge = 122;

    clicks: number = 0;
    onChanged(increased: any) {
        increased == true ? this.clicks++ : this.clicks--;
    }

    constructor() { this.log(`constructor`); }

    ngOnInit() { this.log(`onInit`); }

    ngOnDestroy() { this.log(`onDestroy`); }

    private log(msg: string) {
        console.log(msg);
    }
}