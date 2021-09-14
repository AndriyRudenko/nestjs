import { Body, Controller, Delete, Get, HttpException, HttpStatus, NotFoundException, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateServoengineDto } from './dto/create-servoengine.dto';
import { UpdateServoengineDto } from './dto/update-servoengine.dto';
import { ServoengineService } from './servoengine.service';

@Controller('servoengine')
export class ServoengineController {

    constructor(private readonly servoengineService: ServoengineService){}

    @Get()
    findAll(@Query() paginationQuery){
        //const {limit, offset, numbers} = paginationQuery
        return this.servoengineService.findAll()
    }

    @Get(':id')
    findById(@Param('id') id: string){
        const oneServo = this.servoengineService.findOne(id)
        if (!oneServo){
            throw new NotFoundException(`Non exist servoengine with id: ${id}`)
        }
        return oneServo
    }

    @Post()
    create (@Body() createServoengineDto: CreateServoengineDto){
        console.log(createServoengineDto instanceof CreateServoengineDto)
        return this.servoengineService.create(createServoengineDto)
    }
    @Patch(':id')
    update (@Param('id') id:number, @Body() updateServoengineDto: UpdateServoengineDto ){
        console.log("updateServoengineDto controller", updateServoengineDto)
        return this.servoengineService.update(id, updateServoengineDto)
    }
    @Delete(':id')
    remove(@Param('id') id: string){
        return this.servoengineService.remove(id)
    }
}
