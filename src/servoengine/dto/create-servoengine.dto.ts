import { IsString } from "class-validator"

export class CreateServoengineDto {
    @IsString()
    model: string

    @IsString()
    readonly brand: string

    @IsString({each: true})
    readonly sellers: string[]
}
