import dotenv from 'dotenv';
import { User } from '../models/User.ts';
import { DataSource } from 'typeorm';
import { Contact } from '../models/Contact.ts';

// Load environment variables from .env file
dotenv.config();

// Return configuration object for PostgreSQL connection
const AppDataSource:any = new DataSource({
  type : 'postgres',
  host: process.env.DB_HOST,
  port: 5432,
  username: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DATABASE,
  synchronize: true,
  logging: false,
  entities: [User, Contact],
  migrations: [],
  subscribers: []
});
export default AppDataSource;