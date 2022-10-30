"use strict";
exports.__esModule = true;
var Guest = /** @class */ (function () {
    function Guest(name, age, guestId) {
        this.name = name;
        this.age = age;
        this.guestId = guestId;
    }
    Guest.prototype.getName = function () {
        return this.name;
    };
    Guest.prototype.getAge = function () {
        return this.age;
    };
    Guest.prototype.getGuestId = function () {
        return this.guestId;
    };
    return Guest;
}());
exports["default"] = Guest;
