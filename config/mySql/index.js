import mysql from 'mysql2';

const connection =  mysql.createPool({
  host: "localhost",
  user: "root",
  database: "extensao_projeto",
  password: "L1A2D3O20#"
})

// MYSQL_HOST = "localhost"
// MYSQL_USER = "root"
// MYSQL_DB = "extensao_projeto"
// MYSQL_PWD ="L1A2D3O20#"

export {connection}
