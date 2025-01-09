// queryExecutor.js
import { client } from './client';

// Function to execute a query
const executeQuery:any = async (query:any, values = []) => {
  try {
    const res = await client.query(query, values);
    return res;
  } catch (err:any) {
    console.error('Error executing query:', err?.stack);
    throw err;
  }
};

export { executeQuery };
