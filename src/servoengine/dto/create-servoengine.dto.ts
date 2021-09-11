import { IsString } from "class-validator"

export class CreateServoengineDto {
    @IsString()
    readonly model: string

    @IsString()
    readonly brand: string

    @IsString({each: true})
    readonly sellers: string[]
}
