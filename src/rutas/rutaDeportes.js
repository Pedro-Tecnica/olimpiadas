import express from "express";
import { cmenuDeporte, caltaDeporte, mostrarDeportes, altaDeporte } from "../controller/controllerdeporte.js";

const Rdeporte = express.Router();

Rdeporte.get('/deportes', cmenuDeporte);
Rdeporte.get('/deportes/deportesaltas', caltaDeporte);
Rdeporte.post('/deportes/altasalta', altaDeporte);
Rdeporte.get('/deportes/mostrar', mostrarDeportes);

export { Rdeporte };