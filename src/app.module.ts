import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersService } from './users/users.service';
import { UsersController } from './users/users.controller';
import { OperationsController } from './operations/operations.controller';
import { OperationsService } from './operations/operations.service';
import { PrismaModule } from './prisma/prisma.module';
import { TelegramService } from './telegram/telegram.service';
import { TelegramModule } from './telegram/telegram.module';

@Module({
  imports: [PrismaModule, TelegramModule],
  controllers: [AppController, OperationsController, UsersController],
  providers: [AppService, OperationsService, UsersService, TelegramService],
})
export class AppModule {}
