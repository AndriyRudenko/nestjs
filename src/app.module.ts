import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ServoengineModule } from './servoengine/servoengine.module';

@Module({
  imports: [ServoengineModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
