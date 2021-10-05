import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { CreateServoengineDto } from './dto/create-servoengine.dto';
import { UpdateServoengineDto } from './dto/update-servoengine.dto';
import { Servoengine } from './entities/servoengine.entity';

@Injectable()
export class ServoengineService {
    constructor(
      @InjectRepository(Servoengine)
      private readonly servoengineRepository: Repository<Servoengine>
    )
    {}

    findAll() {
        return this.servoengineRepository.find();
      }

      async findOne(id: string) {
        const servoengine = await this.servoengineRepository.findOne(id)
        return servoengine
      }

      create(createServoengineDto: CreateServoengineDto) {
        const servoengine = this.servoengineRepository.create(createServoengineDto);
        return this.servoengineRepository.save(servoengine)
      }

      async update(id: number, updateServoengineDto: UpdateServoengineDto) {
        console.log("updateServoengineDto", updateServoengineDto)
        const servoengine = await this.servoengineRepository.preload({
          id: id,
          ...updateServoengineDto,
        });
        if (!servoengine) {
          throw new NotFoundException(`servoeginen #${id} not found`);
        }
        return  this.servoengineRepository.save(servoengine);
      }

      async remove(id: string) {
        const servoengine = await this.servoengineRepository.findOne(id);
        return this.servoengineRepository.remove(servoengine)
    }
}
