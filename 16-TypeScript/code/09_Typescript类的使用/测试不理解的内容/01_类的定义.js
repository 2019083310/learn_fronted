"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person(name, age, height) {
        this.height = 1.88;
        this.name = name;
        this.age = age;
        // this.height=height
    }
    Person.prototype.eating = function () {
        console.log('eating');
    };
    return Person;
}());
var p = new Person('coder', 18);
console.log(p);
console.log(Person.prototype);
