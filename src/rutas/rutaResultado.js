import { caltaResultado, cmenuResultado, cmostrarResultados, altaResultado } from "../controller/controllerresultados.js";
import express from "express";

const Rresultado = express.Router();

Rresultado.get('/resultados', cmenuResultado);
Rresultado.get('/resultado/resultadosaltas', caltaResultado);
Rresultado.get('/resultado/resultadosmostrar', cmostrarResultados);
Rresultado.post('/resultado/resultadosnuevo', altaResultado);

export { Rresultado }