import Booking from "./Booking";
import Guest from "./guest";
import Room, { RoomType } from "./room";

function sliceIntoChunks(arr, chunkSize) {
  const res = [];
  for (let i = 0; i < arr.length; i += chunkSize) {
    const chunk = arr.slice(i, i + chunkSize);
    res.push(chunk);
  }
  return res;
}

class roomManager {
  private roomLists: Room[] = [];

  constructor() {
    // Dùng for để tạo phòng mặc định khởi đầu chẵn thì phòng đôi , lẻ phòng đơn
    for (let i = 1; i <= 1000; i++) {
      if (i % 2 === 0) {
        this.roomLists.push(
          new Room(i, "Vip" + i, 50000, "open", "DUAL", [], null, null)
        );
      } else {
        this.roomLists.push(
          new Room(i, "Vip" + i, 50000, "open", "SINGLE", [], null, null)
        );
      }
    }
  }

  getRoomList(): Room[] {
    return this.roomLists;
  }

  getRoomById(_roomId: number): Room {
    try {
      for (let i = 0; i < this.roomLists.length; i++) {
        if (this.roomLists[i].getRoomId() === _roomId) {
          return this.roomLists[i];
        }
      }
      throw new Error("Room with id: " + _roomId + " not found ");
    } catch (err) {
      console.log(err);
    }
  }

  // Kiểm tra xem còn phòng trống không , true là còn phòng.
  isNotAllRoomFull(): boolean {
    return this.roomLists.some((el) => el.getRoomStatus() === "open");
  }

  // Gợi ý phòng gần nhất
  recommendRoom(_roomType: RoomType, _requestedNumber: number): Room[] {
    let recommendRoom: Room[] = [];
    try {
      for (let i = 0; i < this.roomLists.length; i++) {
        if (
          this.roomLists[i].getRoomStatus() === "open" &&
          this.roomLists[i].getRoomType() === _roomType
        ) {
          if (recommendRoom.length < _requestedNumber) {
            recommendRoom.push(this.roomLists[i]);
          }
        }
      }
      if (recommendRoom.length === _requestedNumber) {
        return recommendRoom;
      } else {
        throw new Error("All room is full ");
      }
    } catch (err) {
      console.log(err);
    }
  }

  // Logic can cai thien them theo bai toan thuc te
  handleBookingForGuest(_bookingInfo: Booking): Room[] {
    let listGuests = _bookingInfo.getGuestList();
    console.log(listGuests, " listGuests");

    const chunkedListGuest = sliceIntoChunks(listGuests, 2);
    console.log(chunkedListGuest, "chunkListGuest");

    const requestSingleRoom = _bookingInfo.getRequestSingleRoom();
    const requestDualRoom = _bookingInfo.getRequestDualRoom();

    const dualRoomsRecomend = this.recommendRoom("DUAL", requestDualRoom);
    const singleRoomsRecomend = this.recommendRoom("SINGLE", requestSingleRoom);
    const recommendRoom = dualRoomsRecomend.concat(singleRoomsRecomend);

    for (let i = 0; i < recommendRoom.length; i++) {
      recommendRoom[i].checkInRoom(chunkedListGuest[i]);
    }

    return recommendRoom;
  }
}

// Run code =====================>

const guest1 = new Guest("Thang", 28, "744444");
const guest2 = new Guest("Long", 28, "222222");
const guestBooking = new Booking([guest1, guest2, guest1, guest2], 4, 0, 2);

let roomManager1 = new roomManager();
let roomRentedList = roomManager1.handleBookingForGuest(guestBooking);
console.log(roomRentedList, "rômcheck1");

let room1 = roomManager1.getRoomById(2);
console.log(room1, "room1");

let checkout = room1.checkOutRoom();

console.log(checkout, "checkOutRoom");
