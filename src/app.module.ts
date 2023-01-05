import { ExceptionModule } from './common/expections/exception.module';
import { APP_PIPE } from '@nestjs/core';

import { ProductModule } from './modules/product/product.module';
import { PrismaModule } from './common/prisma/prisma.module';
import { Module, ValidationPipe } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';

@Module({
  imports: [
    ConfigModule.forRoot(),
    PrismaModule,
    ExceptionModule,
    ProductModule,
  ],
  controllers: [AppController],
  providers: [
    {
      provide: APP_PIPE,
      useValue: new ValidationPipe({
        whitelist: true,
      }),
    },
  ],
})
export class AppModule {}
