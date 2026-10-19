import express from "express";

import { mostrarAtletas, altaAtleta, eliminarAtleta } from "../controller/controlleratletas.js"; 

const Ratleta = express.Router();

Ratleta.get('/atletas', (req, res) => { res.render('atletas'); });

Ratleta.get('/atletas/atletasaltas', (req, res) => { res.render('atletasaltas'); });

Ratleta.post('/atletas/altasalta', altaAtleta);

Ratleta.get('/atletas/atletaseliminar', (req, res) => { res.render('atletaseliminar'); });

Ratleta.post('/atletas/atletaseliminar', eliminarAtleta);

Ratleta.get('/atletas/mostrar', mostrarAtletas);

export { Ratleta };