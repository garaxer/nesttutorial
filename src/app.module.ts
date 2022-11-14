import { Module } from '@nestjs/common';
import { APP_INTERCEPTOR } from '@nestjs/core';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { BookingInterceptor } from './booking/booking.interceptor';
import { BookingModule } from './booking/booking.module';

@Module({
  imports: [BookingModule],
  controllers: [AppController],
  providers: [
    AppService,
    {
      provide: APP_INTERCEPTOR,
      useClass: BookingInterceptor,
    },
  ],
})
export class AppModule {}
