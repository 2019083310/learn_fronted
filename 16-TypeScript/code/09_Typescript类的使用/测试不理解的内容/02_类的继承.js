var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var Person = /** @class */ (function () {
    function Person(name, age) {
        this.friend = 'kobe';
        this.name = name;
        this.age = age;
    }
    Person.prototype.eating = function () {
        console.log('eating');
    };
    return Person;
}());
var Teacher = /** @class */ (function (_super) {
    __extends(Teacher, _super);
    function Teacher(name, age, sno) {
        var _this = 
        // super调用父类构造器
        _super.call(this, name, age) || this;
        _this.sno = sno;
        return _this;
    }
    // 对父类方法进行重写
    Teacher.prototype.eating = function () {
        // super调用父类方法
        _super.prototype.eating.call(this);
        console.log('eat');
    };
    Teacher.prototype.teaching = function () {
        console.log('teaching');
    };
    return Teacher;
}(Person));
var Student = /** @class */ (function (_super) {
    __extends(Student, _super);
    function Student(name, age, title) {
        var _this = _super.call(this, name, age) || this;
        _this.title = title;
        return _this;
    }
    Student.prototype.studying = function () {
        console.log('studying');
    };
    return Student;
}(Person));
var t = new Teacher('kobe', 40, 2019083310);
var s = new Student('curry', 30, 'third score');
console.log(t);
console.log(s);
t.eating();
s.eating();
t.teaching();
s.studying();
console.log(Person.prototype);
