import { conectar } from "../database/conexion.js";
const bdd = await conectar(); 

export const mostrarPaises = async (req, resp) => {
    try {
        let mostrarsql = "SELECT codigoISO, nombre, continente FROM paises order by codigoISO";
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);

        resp.render('paises/paisesmostrar', { registros });
    } catch (error) {
        console.log(error);
    }
};

export const altaPais = async (req, resp) => {
    let iso = req.body.isohtml;
    let nombre = req.body.nomhtml;
    let continente = req.body.continentehtml;

    let Altasql = "INSERT INTO paises (codigoISO, nombre, continente) VALUES ('"+ iso +"','"+ nombre +"','"+ continente +"');";

    try {
        const [registros] = await bdd.query(Altasql);
        console.log(registros);
        resp.render('index');
    } catch (error) {
        console.log(`error la sentencia insert ${error}`);
    }
};

export const eliminarPais = async (req, resp) => {
    let iso = req.body.isohtml;

    let EliminarSql = "DELETE FROM paises WHERE codigoISO = '"+ iso +"';";

    try {
        const [registros] = await bdd.query(EliminarSql);
        console.log(registros);
        resp.render('index');
    } catch (error) {
        console.log(`error la sentencia delete ${error}`);
    }
};