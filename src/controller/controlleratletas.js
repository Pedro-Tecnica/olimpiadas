import { conectar } from "../database/conexion.js";
const bdd = await conectar();
export const mostrarAtletas = async (peq, resp) => {
    try {
        let mostrarsql = "SELECT idAtletas, nombre, genero, edad, altura, peso, codigoISO FROM atletas order by idAtletas";
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
    
        resp.render('atletas/atletasmostrar', { registros }); 
    } catch (error) {
        console.log(error);
    }
};
export const altaAtleta = async (peq, resp) => {
    
    let id = peq.body.idhtml;
    let nombre = peq.body.nomhtml; 
    let genero = peq.body.generohtml; 
    let edad = peq.body.edadhtml;
    let altura = peq.body.alturahtml; 
    let peso = peq.body.pesohtml; 
     let pais = peq.body.paishtml;
    
    let Altasql = "INSERT INTO atletas (idAtletas, nombre, genero, edad, altura, peso, codigoISO) VALUES ('"+ id +"','"+ nombre +"','"+ genero +"','"+ edad +"','"+ altura +"','"+ peso +"','"+ pais +"');";
    
    try {
        const[registros] = await bdd.query(Altasql);
        console.log(registros);
        resp.render('index'); 
    } catch(error) {
        console.log(`error la sentencia insert ${error}`);
    }
}

export const eliminarAtleta = async (peq, resp) => {

    let id = peq.body.idhtml;

    let Eliminarsql = "DELETE FROM atletas WHERE idAtletas = '"+ id +"';";
    
    try {
        const[registros] = await bdd.query(Eliminarsql);
        console.log(registros);
        resp.render('index');
    } catch(error) {
        console.log(`error la sentencia delete ${error}`);
    }
}
