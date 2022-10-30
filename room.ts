import Guest from "./guest";

export type RoomStatus = "open" | "closed";
export type RoomType = "SINGLE" | "DUAL";

class Room {
  private roomId: number;
  private roomName: string;
  private pricePerHour: number;
  private roomStatus: RoomStatus;
  private roomType: RoomType;
  private roomGuests: Guest[];
  private checkInTime: any;
  private checkOutTime: any;

  constructor(
    roomId: number,
    roomName: string,
    pricePerHour: number,
    roomStatus: RoomStatus,
    roomType: RoomType,
    roomGuests: Guest[],
    checkInTime: any,
    checkOutTime: any
  ) {
    this.roomId = roomId;
    this.roomName = roomName;
    this.pricePerHour = pricePerHour;
    this.roomStatus = roomStatus;
    this.roomType = roomType;
    this.roomGuests = roomGuests;
    this.checkInTime = checkInTime;
    this.checkOutTime = checkOutTime;
  }

  getRoomId(): number {
    return this.roomId;
  }
  getRoomName(): string {
    return this.roomName;
  }
  getPricePerHour(): number {
    return this.pricePerHour;
  }
  getRoomStatus(): RoomStatus {
    return this.roomStatus;
  }
  getRoomType(): RoomType {
    return this.roomType;
  }
  getRoomGuests(): Guest[] {
    return this.roomGuests;
  }
  getCheckInTime(): any {
    return this.checkInTime;
  }
  getCheckOutTime(): any {
    return this.checkOutTime;
  }
  setRoomGuests(_roomGuest: Guest[]): void {
    this.roomGuests = _roomGuest;
  }
  setCheckInTime(_checkInTime: any): void {
    this.checkInTime = _checkInTime;
  }
  setCheckOutTime(_checkOutTime: any): void {
    this.checkOutTime = _checkOutTime;
  }

  cleanRoom(): void {
    this.checkOutTime = null;
    this.checkInTime = null;
    this.roomGuests = [];
    this.roomStatus = "open";
  }

  checkInRoom(_guest: Guest[]): number {
    if (_guest.length > 2) {
      throw new Error("Guess cannot more than 2 in a room");
    }
    console.log(_guest, "guest");

    this.roomGuests = _guest;
    this.checkInTime = new Date().getTime();
    this.roomStatus = "closed";

    return this.getRoomId();
  }
  checkOutRoom(): number {
    this.checkOutTime = new Date().getTime();

    let timeSpent = this.checkOutTime - this.checkInTime;
    console.log(timeSpent, "timeSpent");

    let priceCost = (timeSpent / 1000 / 60 / 60) * this.pricePerHour;

    if (timeSpent < 2 * 60 * 60 * 1000) {
      return 100000;
    }
    return priceCost;
  }
}

export default Room;
