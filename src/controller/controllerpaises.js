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

    if(iso.length > 3 || iso.length <= 2){
    return resp.render('paises/paisesaltas',{ error:"El código ISO no puede tener más de 3 caracteres."
    });
}

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
        const [codigo] =await bdd.query("SELECT * FROM paises WHERE codigoISO = ?", [iso]);
        if(codigo.length == 0){
            return resp.render('paises/paiseseliminar',{error:"El Pais no existe"
            });
        }

        const [registros] = await bdd.query(EliminarSql);
        console.log(registros);
        resp.render('index');
    } catch (error) {
        console.log(`error la sentencia delete ${error}`);
    }
};
export const cmodPais = (peq, resp) => {
    resp.render('paises/paisesmod');
};

export const modificarPais = async (peq, resp) => {
    let codigo = peq.body.codigohtml;
    let nombre = peq.body.nombrehtml;
    let continente = peq.body.continentehtml;

    let Modsql = "UPDATE paises SET nombre='"+ nombre +"', continente='"+ continente +"' WHERE codigoISO='"+ codigo +"';";
    
    try {
        const [registros] = await bdd.query(Modsql);
        console.log(registros);
        resp.render('index');
    } catch (error) {
        console.log(`error la sentencia update ${error}`);
        resp.send("Error al modificar el país");
    }
}