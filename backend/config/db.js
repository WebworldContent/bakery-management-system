import mysql from 'mysql2/promise';
import dbConfig from "./dbConfig";

const pool = mysql.createPool(dbConfig);

const conn = async (callback) => {
    try {
        const conn = await pool.getConnection();
        console.log('Connected to Mysql Server DB');

        callback(conn);

        conn.release();
    } catch(err) {
        console.log('Error connecting to mysql server: ', err);
    }
};
export default conn;