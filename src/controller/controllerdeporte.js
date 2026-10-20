import { conectar } from "../database/conexion.js";
const bdd = await conectar();

export const cmenuDeporte = (peq, resp) => {
    resp.render('deportes/deportes');
};

export const caltaDeporte = (peq, resp) => {
    resp.render('deportes/deportesaltas');
};

export const mostrarDeportes = async (peq, resp) => {
    try {
        let mostrarsql = "SELECT idDeportes, nombre FROM deportes order by idDeportes";
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('deportes/deportesmostrar', { registros });
    } catch (error) {
        console.log(error);
        resp.send("Error al mostrar deportes");
    }
};

export const altaDeporte = async (peq, resp) => {
    let id = peq.body.idhtml;
    let nombre = peq.body.nombrehtml;

    let Altasql = "INSERT INTO deportes (idDeportes, nombre) VALUES ('"+ id +"','"+ nombre +"');";
    
    try {
        const [registros] = await bdd.query(Altasql);
        console.log(registros);
        resp.render('index'); 
    } catch (error) {
        console.log(`error la sentencia insert ${error}`);
        resp.send("Error al guardar el deporte");
    }
};

export const eliminarDeporte = async (peq, resp) => {
    let id = peq.body.idhtml;
    let eliminarSql = "DELETE FROM deportes WHERE idDeportes = '"+ id +"';";

    try {
        const [registros] = await bdd.query(eliminarSql);
        console.log(registros);
        resp.render('index');
    } catch (error) {
        console.log(`error la sentencia delete ${error}`);
        resp.send("Error al eliminar el deporte");
    }
};

export const cmodDeporte = (peq, resp) => {
    resp.render('deportes/deportesmod');
};

export const modificarDeporte = async (peq, resp) => {
    let id = peq.body.idhtml;
    let nombre = peq.body.nombrehtml;

    let Modsql = "UPDATE deportes SET nombre='"+ nombre +"' WHERE idDeportes='"+ id +"';";
    
    try {
        const [registros] = await bdd.query(Modsql);
        console.log(registros);
        resp.render('index');
    } catch (error) {
        console.log(`error la sentencia update ${error}`);
        resp.send("Error al modificar el deporte");
    }
}