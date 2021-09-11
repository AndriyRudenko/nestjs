import { Module } from '@nestjs/common';
import { ServoengineController } from './servoengine.controller';
import { ServoengineService } from './servoengine.service';

@Module({
    controllers: [ServoengineController],
    providers:[ServoengineService]
})
export class ServoengineModule {}
