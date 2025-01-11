import { executeQuery } from "../../database/queryExecutor";
import { createSchema, createTable } from "../../database/schemaManager";

const findItem = async (id) => {
    // SQL query to select a record
    const query = `
        SELECT * FROM public_schema.users
        WHERE id = $1;
    `;
    const values = [id];
    await createSchema("public_schema");
    await createTable("public_schema", "users");
    const result = await executeQuery(query, values);
    return result.rows[0];
};

const addItem = async(item)=>{
    const {first_name, last_name, email} = item
    const query = `
        INSERT INTO public_schema.users (first_name, last_name, email)
        VALUES ($1, $2, $3)
        RETURNING id, first_name, last_name, email;
    `;
    const values = [first_name, last_name, email];
    const result = await executeQuery(query, values);
    return result.rows[0];
}

const modifyItem = async(id, item)=>{
    const {first_name, last_name, email} = item;
    const query = `
        UPDATE public_schema.users
        SET first_name = $1, last_name = $2, email = $3
        WHERE id = $4
        RETURNING id, first_name, last_name, email;
    `;
    const values = [first_name, last_name, email, id];
    const result = await executeQuery(query, values);
    return result.rows[0];
}

const removeItem = async(id)=>{
    const query = `
        DELETE FROM public_schema.users
        WHERE id = $1
        RETURNING id, first_name, last_name, email;
    `;
    const values = [id];
    const result = await executeQuery(query, values);
    return result.rows[0];
}

const allItem = async()=>{
    const query = `
        SELECT * FROM public_schema.users;
    `;
    const result = await executeQuery(query);
    return result.rows;
}

export default { findItem, addItem, modifyItem, removeItem, allItem };