import { Injectable } from '@nestjs/common';
import { CreateBookingDto, BookingDto } from './dto/booking.dto';

@Injectable()
export class BookingService {
  create(createBooking: CreateBookingDto, username: string) {
    // Save to db or do something
    return new BookingDto({ ...createBooking, id: username });
  }
}
