import { Entity, PrimaryGeneratedColumn, Column, CreateDateColumn, UpdateDateColumn } from 'typeorm';
// import { IsString, IsEmail, Length } from 'class-validator/types';

// Define the User entity
@Entity('users') 
export class User {
  @PrimaryGeneratedColumn()  
  id: any;
  
  @Column("varchar")
  name!:string;

  @Column("varchar", {unique: true}) 
  email!:string;

  @Column("varchar") 
  password!:string;

  @Column("enum", {enum: ['user', 'admin'], default: 'user'}) 
  role!: 'user' | 'admin';

  @CreateDateColumn({name: 'created_at'})
  createdAt!: Date;

  @UpdateDateColumn({name: 'updated_at'})  
  updatedAt!: Date;

  @UpdateDateColumn({name: 'deleted_at'}) 
  deletedAt!: Date;

  @Column({type: "boolean", default: true})
  isActive!:boolean;

  @Column({type: "boolean", default: false})
  isVerified!:boolean;

  @Column({type: "varchar", nullable: true})
  verificationToken!:string;
}