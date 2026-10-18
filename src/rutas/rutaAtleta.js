import { mostrarAtletas, altaAtleta } from '../controller/controlleratletas.js'; 
import express from "express";
const Ratleta = express.Router();


Ratleta.get('/atletas', (req, res) => { res.render('atletas'); });


Ratleta.get('/atletas/atletasaltas', (req, res) => { res.render('atletasaltas'); });


Ratleta.post('/atletas/altasalta', altaAtleta);

Ratleta.get('/atletas/mostrar', mostrarAtletas);

export { Ratleta };