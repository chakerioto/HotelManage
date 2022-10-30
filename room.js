"use strict";
exports.__esModule = true;
var Room = /** @class */ (function () {
    function Room(roomId, roomName, pricePerHour, roomStatus, roomType, roomGuests, checkInTime, checkOutTime) {
        this.roomId = roomId;
        this.roomName = roomName;
        this.pricePerHour = pricePerHour;
        this.roomStatus = roomStatus;
        this.roomType = roomType;
        this.roomGuests = roomGuests;
        this.checkInTime = checkInTime;
        this.checkOutTime = checkOutTime;
    }
    Room.prototype.getRoomId = function () {
        return this.roomId;
    };
    Room.prototype.getRoomName = function () {
        return this.roomName;
    };
    Room.prototype.getPricePerHour = function () {
        return this.pricePerHour;
    };
    Room.prototype.getRoomStatus = function () {
        return this.roomStatus;
    };
    Room.prototype.getRoomType = function () {
        return this.roomType;
    };
    Room.prototype.getRoomGuests = function () {
        return this.roomGuests;
    };
    Room.prototype.getCheckInTime = function () {
        return this.checkInTime;
    };
    Room.prototype.getCheckOutTime = function () {
        return this.checkOutTime;
    };
    Room.prototype.setRoomGuests = function (_roomGuest) {
        this.roomGuests = _roomGuest;
    };
    Room.prototype.setCheckInTime = function (_checkInTime) {
        this.checkInTime = _checkInTime;
    };
    Room.prototype.setCheckOutTime = function (_checkOutTime) {
        this.checkOutTime = _checkOutTime;
    };
    Room.prototype.cleanRoom = function () {
        this.checkOutTime = null;
        this.checkInTime = null;
        this.roomGuests = [];
        this.roomStatus = "open";
    };
    Room.prototype.checkInRoom = function (_guest) {
        if (_guest.length > 2) {
            throw new Error("Guess cannot more than 2 in a room");
        }
        console.log(_guest, "guest");
        this.roomGuests = _guest;
        this.checkInTime = new Date().getTime();
        this.roomStatus = "closed";
        return this.getRoomId();
    };
    Room.prototype.checkOutRoom = function () {
        this.checkOutTime = new Date().getTime();
        var timeSpent = this.checkOutTime - this.checkInTime;
        console.log(timeSpent, "timeSpent");
        var priceCost = (timeSpent / 1000 / 60 / 60) * this.pricePerHour;
        if (timeSpent < 2 * 60 * 60 * 1000) {
            return 100000;
        }
        return priceCost;
    };
    return Room;
}());
exports["default"] = Room;
