import { Component, Input, Output, EventEmitter } from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `<h2>Welcome {{name}}!</h2>
    <p>User name: {{userName}}</p>
    <p>User Age: {{userAge}}</p>
    <button (click)="change(true)">+</button>
    <button (click)="change(false)">-</button>`,
    styles: [`h2, p {color:red;}`]
})
export class ChildComponent {
    name = "Vitalii";
    _userAge: number;
    @Input() userName: string;
    @Input()
    set userAge(age: number) {
        if (age < 0) {
            this._userAge = 0;
        }
        else if (age > 100) {
            this._userAge = 100;
        } else
            this._userAge = age;
    }
    get userAge(): number {
        return this._userAge;
    }

    @Output() onChanged = new EventEmitter<boolean>();
    change(increased:any) {
        this.onChanged.emit(increased);
    }
}