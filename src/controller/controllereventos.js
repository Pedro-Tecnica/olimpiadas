import { conectar } from "../database/conexion.js";
const bdd = await conectar();

export const cmenuEvento = (peq, resp) => {
    resp.render('eventos/eventos'); 
};

export const caltaEvento = (peq, resp) => {
    resp.render('eventos/eventosaltas');
};

export const altaEvento = async (peq, resp) => {
    let id = peq.body.idhtml;
    let nombre = peq.body.nombrehtml;
    let deporte = peq.body.deportehtml; 

    
    let Altasql = "INSERT INTO eventos (idEventos, nombre, idDeportes) VALUES ('"+ id +"','"+ nombre +"','"+ deporte +"');";
    
    try {
        const [registros] = await bdd.query(Altasql);
        console.log(registros);
        resp.render('index');
    } catch (error) {
        console.log(`error la sentencia insert ${error}`);

        resp.send("Error al guardar el evento. Fijate si el ID del deporte existe.");
    }
};

export const mostrarEventos = async (peq, resp) => {
    try {

        let mostrarsql = "SELECT e.idEventos, e.nombre, d.nombre AS deporte FROM eventos e JOIN deportes d ON e.idDeportes = d.idDeportes ORDER BY e.idEventos";
        
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('eventos/eventosmostrar', { registros }); 
    } catch (error) {
        console.log(error);
    }
};