import express from "express";

import { mostrarAtletas, altaAtleta, eliminarAtleta } from "../controller/controlleratletas.js"; 

const Ratleta = express.Router();

Ratleta.get('/atletas', (req, res) => { res.render('atletas/atletas'); });

Ratleta.get('/atletas/atletasaltas', (req, res) => { res.render('atletas/atletasaltas'); });

Ratleta.post('/atletas/altasalta', altaAtleta);

Ratleta.get('/atletas/atletaseliminar', (req, res) => { res.render('atletas/atletaseliminar'); });

Ratleta.post('/atletas/atletaseliminar', eliminarAtleta);

Ratleta.get('/atletas/atletasmostrar', (req, res) => { res.render('atletas/atletasmostrar'); });

Ratleta.get('/atletas/mostrar', mostrarAtletas);

export { Ratleta };