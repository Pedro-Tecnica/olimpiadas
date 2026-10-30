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
       
        let mostrarsql = "SELECT p.idParticipacion, a.nombre AS nombre_atleta, e.nombre AS nombre_evento, p.edicion, p.medalla FROM participaciones p JOIN atletas a ON p.idAtleta = a.idAtletas JOIN eventos e ON p.idEvento = e.idEventos ORDER BY p.idParticipacion";
        
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('resultados/resultadosmostrar', { registros });
    } catch (error) {
        console.log(error);
        resp.send("Error al mostrar resultados");
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
export const buscarParticipacionesAtleta = async (peq, resp) => {
    let idAtleta = peq.body.idhtml;

    try {
        
        let buscarsql = "SELECT a.nombre AS atleta, e.nombre AS evento, p.edicion, p.medalla FROM participaciones p JOIN atletas a ON p.idAtleta = a.idAtletas JOIN eventos e ON p.idEvento = e.idEventos WHERE a.idAtletas = ?";
        
        const [registros] = await bdd.query(buscarsql, [idAtleta]);
        console.log(registros);
     
        resp.render('resultados/buscaratleta', { registros, idAtleta }); 
        
    } catch (error) {
        console.log(`error en la búsqueda: ${error}`);
        resp.send("Error al buscar las participaciones del atleta");
    }
};