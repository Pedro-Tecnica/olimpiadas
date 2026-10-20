import express from "express";
import { cmenuDeporte, caltaDeporte, mostrarDeportes, altaDeporte, eliminarDeporte } from "../controller/controllerdeporte.js";

const Rdeporte = express.Router();

Rdeporte.get('/deportes/deportesaltas', (req, res) => { res.render('deportes/deportesaltas'); });
Rdeporte.get('/deportes', cmenuDeporte);
Rdeporte.get('/deportes/deportesaltas', caltaDeporte);
Rdeporte.post('/deportes/altasalta', altaDeporte);

Rdeporte.get('/deportes/deporteseliminar', (req, res) => { res.render('deportes/deporteseliminar'); });
Rdeporte.post('/deportes/deporteseliminar', eliminarDeporte);
Rdeporte.get('/deportes/mostrar', mostrarDeportes);

export { Rdeporte };