import express from 'express';
import { mostrarAtletas } from '../controller/controlleratletas.js'; // Asegurate de que la ruta sea correcta

const Ratleta = express.Router();

Ratleta.get('/atletas', (req, res) => {
    res.render('atletas');
});

Ratleta.get('/atletas/atletasaltas', (req, res) => {
    res.render('atletasaltas');
});


Ratleta.get('/atletas/mostrar', mostrarAtletas);

export { Ratleta };