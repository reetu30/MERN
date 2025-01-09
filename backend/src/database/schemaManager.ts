// schemaManager.js
import { executeQuery } from './queryExecutor';

// Function to create a schema
const createSchema = async (schemaName:any) => {
  const query = `CREATE SCHEMA IF NOT EXISTS ${schemaName};`;
  try {
    await executeQuery(query);
    console.log(`Schema "${schemaName}" created successfully or already exists.`);
  } catch (err:any) {
    console.error('Error creating schema:', err.stack);
  }
};

// Function to create a table within a schema
const createTable = async (schemaName:any, table:any) => {
  const query = `
    CREATE TABLE IF NOT EXISTS ${schemaName}.${table} (
      id SERIAL PRIMARY KEY,
      first_name VARCHAR(100),
      last_name VARCHAR(100),
      email VARCHAR(150) UNIQUE,
      created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    );
  `;
  try {
    await executeQuery(query);
    console.log(`Table ${table} created successfully or already exists.`);
  } catch (err:any) {
    console.error('Error creating table:', err.stack);
  }
};

export { createSchema, createTable };
