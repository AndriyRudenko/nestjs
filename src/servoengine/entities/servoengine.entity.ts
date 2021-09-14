import { Column, Entity, PrimaryGeneratedColumn } from "typeorm"

@Entity()
export class Servoengine{
    @PrimaryGeneratedColumn()
    id: number
    
    @Column()
    model: string
    @Column()
    brand: string
    @Column('json', {nullable: true})
    sellers: string[]
}