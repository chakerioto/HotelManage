import Guest from "./guest";

class Booking {
  private guestLists: Guest[];
  private numberGuest: number;
  private requestSingleRoom: number;
  private requestDualRoom: number;

  constructor(
    _guestLists: Guest[],
    _numberGuest: number,
    _requestSingleRoom: number,
    _requestDualRoom: number
  ) {
    this.guestLists = _guestLists;
    this.numberGuest = _numberGuest;
    this.requestSingleRoom = _requestSingleRoom;
    this.requestDualRoom = _requestDualRoom;
  }

  getRequestSingleRoom(): number {
    return this.requestSingleRoom;
  }
  getRequestDualRoom(): number {
    return this.requestDualRoom;
  }
  getGuestList(): Guest[] {
    return this.guestLists;
  }
}

export default Booking;
