import mysql from 'mysql2/promise';

const db = mysql.createConnection({
    host: '34.128.69.174',
    user: 'root',
    database: 'news'
})
            
export default db;