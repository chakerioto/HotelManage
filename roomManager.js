"use strict";
exports.__esModule = true;
var Booking_1 = require("./Booking");
var guest_1 = require("./guest");
var room_1 = require("./room");
function sliceIntoChunks(arr, chunkSize) {
    var res = [];
    for (var i = 0; i < arr.length; i += chunkSize) {
        var chunk = arr.slice(i, i + chunkSize);
        res.push(chunk);
    }
    return res;
}
var roomManager = /** @class */ (function () {
    function roomManager() {
        this.roomLists = [];
        // Dùng for để tạo phòng mặc định khởi đầu chẵn thì phòng đôi , lẻ phòng đơn
        for (var i = 1; i <= 1000; i++) {
            if (i % 2 === 0) {
                this.roomLists.push(new room_1["default"](i, "Vip" + i, 50000, "open", "DUAL", [], null, null));
            }
            else {
                this.roomLists.push(new room_1["default"](i, "Vip" + i, 50000, "open", "SINGLE", [], null, null));
            }
        }
    }
    roomManager.prototype.getRoomList = function () {
        return this.roomLists;
    };
    roomManager.prototype.getRoomById = function (_roomId) {
        try {
            for (var i = 0; i < this.roomLists.length; i++) {
                if (this.roomLists[i].getRoomId() === _roomId) {
                    return this.roomLists[i];
                }
            }
            throw new Error("Room with id: " + _roomId + " not found ");
        }
        catch (err) {
            console.log(err);
        }
    };
    // Kiểm tra xem còn phòng trống không , true là còn phòng.
    roomManager.prototype.isNotAllRoomFull = function () {
        return this.roomLists.some(function (el) { return el.getRoomStatus() === "open"; });
    };
    // Gợi ý phòng gần nhất
    roomManager.prototype.recommendRoom = function (_roomType, _requestedNumber) {
        var recommendRoom = [];
        try {
            for (var i = 0; i < this.roomLists.length; i++) {
                if (this.roomLists[i].getRoomStatus() === "open" &&
                    this.roomLists[i].getRoomType() === _roomType) {
                    if (recommendRoom.length < _requestedNumber) {
                        recommendRoom.push(this.roomLists[i]);
                    }
                }
            }
            if (recommendRoom.length === _requestedNumber) {
                return recommendRoom;
            }
            else {
                throw new Error("All room is full ");
            }
        }
        catch (err) {
            console.log(err);
        }
    };
    // Logic can cai thien them theo bai toan thuc te
    roomManager.prototype.handleBookingForGuest = function (_bookingInfo) {
        var listGuests = _bookingInfo.getGuestList();
        console.log(listGuests, " listGuests");
        var chunkedListGuest = sliceIntoChunks(listGuests, 2);
        console.log(chunkedListGuest, "chunkListGuest");
        var requestSingleRoom = _bookingInfo.getRequestSingleRoom();
        var requestDualRoom = _bookingInfo.getRequestDualRoom();
        var dualRoomsRecomend = this.recommendRoom("DUAL", requestDualRoom);
        var singleRoomsRecomend = this.recommendRoom("SINGLE", requestSingleRoom);
        var recommendRoom = dualRoomsRecomend.concat(singleRoomsRecomend);
        for (var i = 0; i < recommendRoom.length; i++) {
            recommendRoom[i].checkInRoom(chunkedListGuest[i]);
        }
        return recommendRoom;
    };
    return roomManager;
}());
// Run code =====================>
var guest1 = new guest_1["default"]("Thang", 28, "744444");
var guest2 = new guest_1["default"]("Long", 28, "222222");
var guestBooking = new Booking_1["default"]([guest1, guest2, guest1, guest2], 4, 0, 2);
var roomManager1 = new roomManager();
var roomRentedList = roomManager1.handleBookingForGuest(guestBooking);
console.log(roomRentedList, "rômcheck1");
var room1 = roomManager1.getRoomById(2);
console.log(room1, "room1");
var checkout = room1.checkOutRoom();
console.log(checkout, "checkOutRoom");
