import { caltaResultado, cmenuResultado, cmostrarResultados, altaResultado,cmodResultado,modificarResultado,consresult,consultaEventoMasParticipantes } from "../controller/controllerresultados.js";
import express from "express";

const Rresultado = express.Router();

Rresultado.get('/resultados', cmenuResultado);
Rresultado.get('/resultado/resultadosaltas', caltaResultado);
Rresultado.get('/resultado/resultadosmostrar', cmostrarResultados);
Rresultado.post('/resultado/resultadosnuevo', altaResultado);
Rresultado.get('/resultado/resultadosmod', cmodResultado);
Rresultado.post('/resultado/modificar', modificarResultado);
Rresultado.get('/resultado/resultadoscons', consresult);
Rresultado.get('/resultado/consultaMayorEvento', consultaEventoMasParticipantes);
export { Rresultado };