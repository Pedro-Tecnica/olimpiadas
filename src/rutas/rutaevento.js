import express from "express";
import { cmenuEvento, caltaEvento, altaEvento, mostrarEventos, bajaEvento,cbajaEvento,cmodEvento,modificarEvento } from "../controller/controllereventos.js";

const Revento = express.Router();

Revento.get('/eventos', cmenuEvento);
Revento.get('/eventos/eventosaltas', caltaEvento);
Revento.post('/eventos/altasalta', altaEvento);
Revento.get('/eventos/mostrar', mostrarEventos);
Revento.get('/eventos/eventosmod', cmodEvento);
Revento.post('/eventos/modificar', modificarEvento);
Revento.get('/eventos/eventoseliminar', cbajaEvento);
Revento.post('/eventos/eliminar', bajaEvento);
export { Revento };