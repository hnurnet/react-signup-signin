import mysql from "mysql";

const db = mysql.createConnection({
    host:"localhost",
    user:"root",
    password:"Xaajimacow3321",
    database:"loginregister"
});


export default db;