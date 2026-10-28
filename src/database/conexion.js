import 'dotenv/config';
import mysql from 'mysql2/promise';
export async function conectar() {
    try {
        const bdd = await mysql.createPool({
            host:'localhost',
            database:'olimpiadas',
            user: 'root',
            password:'1234'
        });
        console.log('conectado');
        return bdd;
        
    } catch (error) {
        console.error('Error al conectar a la base de datos:', error);
        throw error;
    }
}