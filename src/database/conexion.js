import 'dotenv/config';
import mysql from 'mysql2/promise'
export async function conectar(){
<<<<<<< HEAD
    const { DB_HOST, DB_NAME, DB_USER, DB_PASSWORD } = process.env;
    if (!DB_HOST || !DB_NAME || !DB_USER || DB_PASSWORD === undefined) {
        throw new Error('Faltan variables de entorno para conectar a la base de datos.');
    }
=======
    try{
        const bdd= await mysql.createPool({
            host:'localhost',
            database:'olimpiadas',
            user:'root',
            password:'1234'
        })
        console.log('conectado')
        return bdd;
>>>>>>> 4e9d58b (.)

    const bdd = await mysql.createPool({
        host: DB_HOST,
        database: DB_NAME,
        user: DB_USER,
        password: DB_PASSWORD
    });
    console.log('conectado');
    return bdd;
}