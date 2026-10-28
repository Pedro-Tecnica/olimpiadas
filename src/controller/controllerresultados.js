import { conectar } from "../database/conexion.js";
const bdd = await conectar();

export const cmenuResultado = (peq, resp) => {
    resp.render('resultados/resultados');
};

export const caltaResultado = (peq, resp) => {
    resp.render('resultados/resultadosaltas');
};

export const cmostrarResultados = async (peq, resp) => {
    try {
        let mostrarsql = "SELECT idParticipacion, idAtleta, idEvento, edicion, medalla FROM participaciones order by idParticipacion";
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('resultados/resultadosmostrar', { registros });
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

    let Altasql = "INSERT INTO participaciones (idParticipacion, idAtleta, idEvento, edicion, medalla) VALUES ('"+ id +"','"+ atleta +"','"+ evento +"','"+ edicion +"','"+ medalla +"');";
    
    try {
        
        const [registros] = await bdd.query(Altasql);
        console.log(registros);
        resp.render('index');
    } catch (error) {
        console.log(`error la sentencia insert ${error}`);
    }
}
export const cmodResultado = (peq, resp) => {
    resp.render('resultados/resultadosmod'); 
};

export const modificarResultado = async (peq, resp) => {
    let id = peq.body.idhtml;
    let atleta = peq.body.atletahtml;
    let evento = peq.body.eventohtml;
    let edicion = peq.body.edicionhtml;
    let medalla = peq.body.medallahtml;

    
    let Modsql = "UPDATE participaciones SET idAtleta='"+ atleta +"', idEvento='"+ evento +"', edicion='"+ edicion +"', medalla='"+ medalla +"' WHERE idParticipacion='"+ id +"';";
    
    try {
        const [registros] = await bdd.query(Modsql);
        console.log(registros);
        resp.render('index'); 
    } catch (error) {
        console.log(`error la sentencia update ${error}`);
        resp.send("Error al modificar el resultado");
    }
}

export const consresult = async (peq, resp) => {
    resp.render('resultados/resultadoscons');
};

export const consultaEventoMasParticipantes = async (req, resp) => {
    try {
        const consulta = `SELECT e.nombre AS evento, p.edicion, COUNT(DISTINCT p.idAtleta) AS participantes
            FROM participaciones p
            JOIN eventos e ON e.idEventos = p.idEvento
            WHERE CAST(REGEXP_SUBSTR(p.edicion, '[0-9]{4}') AS UNSIGNED) = (
                SELECT MAX(CAST(REGEXP_SUBSTR(edicion, '[0-9]{4}') AS UNSIGNED))
                FROM participaciones
            )
            GROUP BY e.idEventos, e.nombre, p.edicion
            ORDER BY participantes DESC
            LIMIT 1`;

        const [registros] = await bdd.query(consulta);
        resp.render('resultados/consultaMayorEvento', { registros });
    } catch (error) {
        console.log(`Error al consultar el evento con más participantes: ${error}`);
        resp.send("Error al consultar el evento con más participantes");
    }
};