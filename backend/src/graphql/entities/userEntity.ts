import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

// Define the User entity
@Entity('users')  // This maps to the 'users' table
export class User {
  @PrimaryGeneratedColumn("uuid")  // Auto-incrementing primary key
  id: any;
  
  @Column("varchar")  // Name column
  name:string | undefined;

  @Column("varchar", {unique: true})  // Email column
  email:string | undefined;
}
