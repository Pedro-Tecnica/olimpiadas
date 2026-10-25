import { conectar } from "../database/conexion.js";
const bdd = await conectar();

export const cmenuResultado = (peq, resp) => {
    resp.render('resultados');
};

export const caltaResultado = (peq, resp) => {
    resp.render('resultadosaltas');
};

export const cmostrarResultados = async (peq, resp) => {
    try {
        let mostrarsql = "SELECT idParticipacion, idAtleta, idEvento, edicion, medalla FROM participaciones order by idParticipacion";
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('resultadosmostrar', { registros });
    } catch (error) {
        console.log(error);
    }
};

export const altaResultado = async (peq, resp) => {
    let id, atleta, evento, edicion, medalla;
    
    id = peq.body.idhtml;
    atleta = peq.body.atletahtml;
    evento = peq.body.eventohtml;
    edicion = peq.body.edicionhtml;
    medalla = peq.body.medallahtml;

<<<<<<< HEAD
    
=======
>>>>>>> 0e6be58d3f804e3c655b64d5c37de7bd4c0dfbba
    let Altasql = "INSERT INTO participaciones (idParticipacion, idAtleta, idEvento, edicion, medalla) VALUES ('"+ id +"','"+ atleta +"','"+ evento +"','"+ edicion +"','"+ medalla +"');";
    
    try {
        const [registros] = await bdd.query(Altasql);
        console.log(registros);
        resp.render('index');
    } catch (error) {
        console.log(`error la sentencia insert ${error}`);
    }
}