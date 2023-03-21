//Criar a pool do postgres
const {Pool} = require ('pg')
//Chamar o arquivo de configuração
require ('dotenv').config()

const pool = new Pool({
    user: process.env.USER,
    host: process.env.HOST,
    password: process.env.PASSWORD,
    database: process.env.DATABASE,
    port: process.env.PORT
})

module.exports = {
    pool
}