import { Injectable } from '@nestjs/common';
import { Servoengine } from './entities/servoengine.entity';

@Injectable()
export class ServoengineService {
    private servoengines: Servoengine[] = [{
        id: 12,
        model: 'SuperModel',
        brand:'My Super Brand',
        sellers: ['Docker WHO', 'Neo']
    }]

    findAll() {
        return this.servoengines;
      }

      findOne(id: string) {
        return this.servoengines.find(item => item.id === +id);
      }

      create(createServoengineDto: any) {
        this.servoengines.push(createServoengineDto);
        return createServoengineDto
      }

      update(id: string, updateServoengineDto: any) {
        const existingServoengine = this.findOne(id);
        if (existingServoengine) {
          // update the existing entity
        }
      }

      remove(id: string) {
        const servoengineIndex = this.servoengines.findIndex(item => item.id === +id);
        if (servoengineIndex >= 0) {
          this.servoengines.splice(servoengineIndex, 1);
        }
    }
}
