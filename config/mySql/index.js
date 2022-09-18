import mysql from 'mysql2';

const connection =  mysql.createPool({
  // host: process.env.MYSQL_HOST,
  // user: process.env.MYSQL_USER,
  // database: process.env.MYSQL_DB,
  // password: process.env.MYSQL_PWD
  host: 'mysql://b0eabefc25d182:0694f9cc@us-cdbr-east-06.cleardb.net/heroku_1700fc8b6ab2194?reconnect=true',
  user: 'usuario:b0eabefc25d182',
  database: 'us-cdbr-east-06.cleardb.net',
  password: 'heroku_1700fc8b6ab2194'
})

export {connection}
