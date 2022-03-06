"use strict";
exports.__esModule = true;
var Person = /** @class */ (function () {
    function Person() {
    }
    Person.eating = function () {
        console.log('eating');
    };
    Person.age = 'coder liu';
    return Person;
}());
var p = new Person();
// console.log(p.eating())//编译器就会报错，eating方法不存在
Person.eating(); //正确方式调用
console.log(Person.age);
console.log(Person)
