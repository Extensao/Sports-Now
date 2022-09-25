import mysql from 'mysql2';

const connection = mysql.createPool({
  host: "localhost",
  user: "root",
  database: "extensao_projeto",
  password: ""
  // host: process.env.MYSQL_HOST_HEROKU,
  // user: process.env.MYSQL_USER_HEROKU,
  // database: process.env.MYSQL_DB_HEROKU,
  // password: process.env.MYSQL_PWD_HEROKU
})

export { connection }
