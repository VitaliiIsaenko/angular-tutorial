import { Component } from '@angular/core';
     
class Item{
    purchase: string;
    done: boolean;
    price: number;
     
    constructor(purchase: string, price: number) {
  
        this.purchase = purchase;
        this.price = price;
        this.done = false;
    }
}
 
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
        { purchase: "Cheese", done: false, price:310 }
    ];
    addItem(text: string, price: number): void {
         
        if(text==null || text.trim()=="" || price==null)
            return;
        this.items.push(new Item(text, price));
    };
    name = "Mark";
    userAge = 122;
}