import { caltaResultado, cmenuResultado, cmostrarResultados, altaResultado,cmodResultado,modificarResultado,buscarParticipacionesAtleta } from "../controller/controllerresultados.js";
import express from "express";

const Rresultado = express.Router();

Rresultado.get('/resultados', cmenuResultado);
Rresultado.get('/resultado/resultadosaltas', caltaResultado);
Rresultado.get('/resultado/resultadosmostrar', cmostrarResultados);
Rresultado.post('/resultado/resultadosnuevo', altaResultado);
Rresultado.get('/resultado/resultadosmod', cmodResultado);
Rresultado.post('/resultado/modificar', modificarResultado);
Rresultado.get('/resultado/buscaratleta', (req, res) => {
    res.render('resultados/buscaratleta'); 
});
Rresultado.post('/resultado/buscaratleta', buscarParticipacionesAtleta);
export { Rresultado };