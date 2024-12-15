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
    function Person(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    Person.prototype.getFullName = function () {
        return '${this.firstName}${this.lastName}';
    };
    return Person;
}());
var person = new Person("121", "shahnawaz", "shakil");
console.log(person.getFullName());
var PersonWithShortFormConstructor = /** @class */ (function () {
    function PersonWithShortFormConstructor(ssn, firstName, lastName) {
        this.ssn = ssn;
        this.firstName = firstName;
        this.lastName = lastName;
    }
    PersonWithShortFormConstructor.prototype.getFullName = function () {
        return '${this.firstName}${this.lastName}';
    };
    return PersonWithShortFormConstructor;
}());
var personWithShortFormConstructor = new PersonWithShortFormConstructor("122", "shahnawaz1", "shakil1");
console.log(personWithShortFormConstructor);
var PersonWithGetterAndSetter = /** @class */ (function () {
    function PersonWithGetterAndSetter(ssn, firstName, lastName) {
        this._ssn = ssn;
        this._firstName = firstName;
        this._lastName = lastName;
    }
    Object.defineProperty(PersonWithGetterAndSetter.prototype, "ssn", {
        get: function () {
            return this._ssn;
        },
        enumerable: false,
        configurable: true
    });
    return PersonWithGetterAndSetter;
}());
var ExtendedPerson = /** @class */ (function (_super) {
    __extends(ExtendedPerson, _super);
    function ExtendedPerson(firstName, ssn, lastName, jobTitle) {
        var _this = _super.call(this, ssn, firstName, lastName) || this;
        _this.jobTitle = jobTitle;
        return _this;
    }
    return ExtendedPerson;
}(PersonWithGetterAndSetter));
var extendedPerson = new ExtendedPerson("harry", "111", "potter", "scientist");
console.log("ssn is " + extendedPerson.ssn);
