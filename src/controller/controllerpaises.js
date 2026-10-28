import { conectar } from "../database/conexion.js";
const bdd = await conectar(); 

export const paisesSinMedallas = async (req, resp) => {
    try {
        const mostrarsql = `SELECT p.codigoISO, p.nombre, p.continente
            FROM paises p
            WHERE NOT EXISTS (
                SELECT 1
                FROM atletas a
                JOIN participaciones par ON par.idAtleta = a.idAtletas
                WHERE a.codigoISO = p.codigoISO
                  AND par.medalla IS NOT NULL
                  AND par.medalla <> ''
            )
            ORDER BY p.nombre`;

        const [registros] = await bdd.query(mostrarsql);
        resp.render('paises/paisesSinMedallas', { registros });
    } catch (error) {
        console.log(`Error al consultar países sin medallas: ${error}`);
        resp.send("Error al consultar los países sin medallas");
    }
};

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
        let validaciones = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ?\s]+$/;
        if (!validaciones.test(nombre)) {
        return resp.render('paises/paisesaltas',{error:"Los nombres no pueden contener: Puntos, comas, guiones o numeros."
            });
    }

        const [codigo] =await bdd.query("SELECT * FROM paises WHERE codigoISO = ?", [iso]);
    if(codigo.length > 0){
    return resp.render('paises/paisesaltas',{error:"El codigo ya existe."
    });
}

    const [pais] = await bdd.query("SELECT * FROM paises WHERE nombre = ?", [nombre]);
        if(pais.length > 0){
        return resp.render('paises/paisesaltas',{error:"El pais ya existe."
    });
}

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

    if(codigo.length > 3 || codigo.length <= 2){
    return resp.render('paises/paisesmod',{ error:"El código ISO no puede tener más de 3 caracteres."
    });
}

    let Modsql = "UPDATE paises SET nombre='"+ nombre +"', continente='"+ continente +"' WHERE codigoISO='"+ codigo +"';";
    
    try {   

        const [pais] = await bdd.query("SELECT * FROM paises WHERE nombre = ?", [nombre]);
        if(pais.length > 0){
        return resp.render('paises/paisesmod',{error:"El pais ya existe."
    });
}

        

        const [registros] = await bdd.query(Modsql);
        console.log(registros);
        resp.render('index');
    } catch (error) {
        console.log(`error la sentencia update ${error}`);
        resp.send("Error al modificar el país");
    }
}