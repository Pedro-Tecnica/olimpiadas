import 'dotenv/config';
import mysql from 'mysql2/promise'
export async function conectar(){
    try{
        const bdd= await mysql.createPool({
            host:process.env.DB_HOST || 'localhost',
            database:process.env.DB_NAME || 'olimpiadas',
            user:process.env.DB_USER || 'root',
            password:process.env.DB_PASSWORD
        })
        console.log('conectado')
        return bdd;

    }catch(error){
        console.log('error al conectar la base de datos')}
}