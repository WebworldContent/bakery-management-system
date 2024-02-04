import mysql from 'mysql2/promise.js';
import dbConfig from "./dbConfig.js";

const pool = mysql.createPool(dbConfig);

const conn = async (callback) => {
    let connection;
    try {
        connection = await pool.getConnection();
        console.log('Connected to MySQL Server DB');

        return await callback(connection);

    } catch (err) {
        console.error('Error executing with MySQL connection: ', err);
        throw err;
    } finally {
        if (connection) {
            connection.release();
            console.log('Connection released');
        }
    }
};

export default conn;