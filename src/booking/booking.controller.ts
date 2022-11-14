import { Body, Controller, Post } from '@nestjs/common';
import { BookingService } from './booking.service';
import { BookingDto, CreateBookingDto } from './dto/booking.dto';
import { Token, TokenType } from './token.decorator';

@Controller('booking')
export class BookingController {
  constructor(private readonly bookingService: BookingService) {}

  @Post()
  createBooking(
    @Body() booking: CreateBookingDto,
    @Token() token: TokenType,
  ): BookingDto {
    return this.bookingService.create(booking, token);
  }
}
