import pg from 'pg';
import dbConfig from './config'; // Import the config from db/config.js
import { DataSource } from 'typeorm';
// Create a PostgreSQL client using the configuration from db/config.js
// const client = new pg.Client(dbConfig);
export const client:any = new DataSource(dbConfig);

// Function to connect to the database
const connect = async () => {
  try {
    await client.connect();
    console.log('Connected to the database!');
  } catch (err:any) {
    console.error('Error connecting to the database:', err.stack);
  }
};


// Function to disconnect from the database
const disconnect = async () => {
  try {
    await client.end();
    console.log('Connection closed.');
  } catch (err:any) {
    console.error('Error closing the connection:', err.stack);
  }
};

export { client, connect, disconnect };