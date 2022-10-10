import mysql from "mysql"
import dotenv from 'dotenv'


dotenv.config();
// const pool = mysql.createPool({
//   host : process.env.DB_HOST,
//   user: process.env.DB_USERNAME,
//   password: process.env.DB_PASSWORD,
//   database: process.env.DB_DBNAME
// })


// pool.getConnection((err, conn)=>{
//   if (err) console.log(err) 
//   console.log("Connected successfully")
    
  
// })

//  const db = pool.promise();
// export default db;









// export const db = mysql.createConnection({
//   host:"localhost",
//   user:"root",
//   password: '',
//   database:"blogs"
// })

// working
// export const db = mysql.createConnection({
//   host:"sql11.freesqldatabase.com",
//   user:"sql11525265",
//   password: "MNCiFbLhXI",
//   database:"sql11525265"
// })


export const db = mysql.createConnection({
  host : process.env.DB_HOST,
  user: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_DBNAME
})



  
// db.getConnection(function(err, connection) {
  // connection._pool._freeConnections.indexOf(connection)
//   connection.query( 'SELECT something FROM sometable', function(err, rows) {

//     console.log(pool._freeConnections.indexOf(connection)); // -1

//     connection.release();

//     console.log(pool._freeConnections.indexOf(connection)); // 0

//  });
// });
