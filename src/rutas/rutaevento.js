import express from "express";
import { cmenuEvento, caltaEvento, altaEvento, mostrarEventos } from "../controller/controllereventos.js";

const Revento = express.Router();

Revento.get('/eventos', cmenuEvento);
Revento.get('/eventos/eventosaltas', caltaEvento);
Revento.post('/eventos/altasalta', altaEvento);
Revento.get('/eventos/mostrar', mostrarEventos);

export { Revento };