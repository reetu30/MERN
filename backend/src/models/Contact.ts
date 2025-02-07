import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("contact")
export class Contact {
    @PrimaryGeneratedColumn()
    id:any;

    @Column("varchar") 
    email!:string;

    @Column("varchar")
    subject!: string;

    @Column("varchar")
    message!:string;

    @CreateDateColumn({name:"created_at"})
    createdAt!: Date;
}