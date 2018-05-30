import { Component, Input } from '@angular/core';

@Component({
    selector: 'child-comp',
    template: `<h2>Welcome {{name}}!</h2>
    <p>User name: {{userName}}</p>
    <p>User Age: {{userAge}}</p>`,
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
}