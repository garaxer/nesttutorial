export class CreateBookingDto {
  title: string;
  constructor(object: CreateBookingDto) {
    Object.assign(this, object);
  }
}

export class BookingDto {
  id: string;
  title: string;
  constructor(object: BookingDto) {
    Object.assign(this, object);
  }
}
