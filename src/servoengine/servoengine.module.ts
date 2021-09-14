import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ServoengineController } from './servoengine.controller';
import { ServoengineService } from './servoengine.service';
import {Servoengine} from './entities/servoengine.entity'

@Module({
    imports:[TypeOrmModule.forFeature([Servoengine])],
    controllers: [ServoengineController],
    providers:[ServoengineService]
})
export class ServoengineModule {}
