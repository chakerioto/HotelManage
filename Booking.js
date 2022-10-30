"use strict";
exports.__esModule = true;
var Booking = /** @class */ (function () {
    function Booking(_guestLists, _numberGuest, _requestSingleRoom, _requestDualRoom) {
        this.guestLists = _guestLists;
        this.numberGuest = _numberGuest;
        this.requestSingleRoom = _requestSingleRoom;
        this.requestDualRoom = _requestDualRoom;
    }
    Booking.prototype.getRequestSingleRoom = function () {
        return this.requestSingleRoom;
    };
    Booking.prototype.getRequestDualRoom = function () {
        return this.requestDualRoom;
    };
    Booking.prototype.getGuestList = function () {
        return this.guestLists;
    };
    return Booking;
}());
exports["default"] = Booking;
