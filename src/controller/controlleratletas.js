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
        if(codigoISO.length > 3){
            alert("El código ISO no puede tener más de 3 caracteres.");
            return;
        }
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
};

export const cmodAtleta = (peq, resp) => {
    resp.render('atletas/atletasmod');
};


export const modificarAtleta = async (peq, resp) => {
    let id = peq.body.idhtml;
    let nombre = peq.body.nomhtml;
    let genero = peq.body.generohtml;
    let edad = peq.body.edadhtml;
    let altura = peq.body.alturahtml;
    let peso = peq.body.pesohtml;
    let pais = peq.body.paishtml;

    let Modsql = "UPDATE atletas SET nombre='"+ nombre +"', genero='"+ genero +"', edad='"+ edad +"', altura='"+ altura +"', peso='"+ peso +"', codigoISO='"+ pais +"' WHERE idAtletas='"+ id +"';";
    
    try {
        const [registros] = await bdd.query(Modsql);
        console.log(registros);
        resp.render('index'); 
    } catch (error) {
        console.log(`error la sentencia update ${error}`);
        resp.send("Error al modificar el atleta. Fijate si el país existe."); // Para que el navegador no se quede colgado
  }
}




/*export const consulta = (peq, resp) => {
    let id = parseInt(peq.params.idhtml);
    let consultarsql = "SELECT idAtletas, nombre, genero, edad, altura, peso, codigoISO FROM atletas WHERE idAtletas = '"+ id +"';";
    
    try {
        const [registros] = await bdd.query(consultarsql);
        console.log(registros);
    } catch(error) {
        console.log(`error la sentencia select ${error}`);
    }
};*/

