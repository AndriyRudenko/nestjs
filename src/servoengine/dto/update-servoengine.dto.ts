import { PartialType } from "@nestjs/mapped-types"
import { CreateServoengineDto } from "./create-servoengine.dto"

export class UpdateServoengineDto  extends PartialType(CreateServoengineDto) {}
