class Guest {
  private name: string;
  private age: number;
  private guestId: string;

  constructor(name: string, age: number, guestId: string) {
    this.name = name;
    this.age = age;
    this.guestId = guestId;
  }
  public getName(): string {
    return this.name;
  }
  public getAge(): number {
    return this.age;
  }
  public getGuestId(): string {
    return this.guestId;
  }
}

export default Guest;
