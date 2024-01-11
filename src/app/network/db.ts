import mysql from 'mysql2/promise';

const db = mysql.createConnection({
    host: '34.101.187.72',
    user: 'root',
    database: 'news'
})
            
export default db;