import express from "express";

import { mostrarAtletas, altaAtleta, eliminarAtleta, modificarAtleta,cmodAtleta,cmenuConsultas,consultaFemenino,consultaMayores30,consultaPromediosGenero,consultaTotalPorPais,consultaMultiplesOros } from "../controller/controlleratletas.js"; 

const Ratleta = express.Router();

Ratleta.get('/atletas', (req, res) => { res.render('atletas/atletas'); });

Ratleta.get('/atletas/atletasaltas', (req, res) => { res.render('atletas/atletasaltas'); });

Ratleta.post('/atletas/altasalta', altaAtleta);

Ratleta.get('/atletas/atletaseliminar', (req, res) => { res.render('atletas/atletaseliminar'); });

Ratleta.post('/atletas/atletaseliminar', eliminarAtleta);

Ratleta.get('/atletas/atletasmostrar', (req, res) => { res.render('atletas/atletasmostrar'); });

Ratleta.get('/atletas/mostrar', mostrarAtletas);

Ratleta.get('/atletas/atletasmod', cmodAtleta);
Ratleta.post('/atletas/modificar', modificarAtleta);
Ratleta.get('/atletas/consultas', cmenuConsultas);
Ratleta.get('/atletas/consultagenero', consultaFemenino);
Ratleta.get('/atletas/consultamayores', consultaMayores30);
Ratleta.get('/atletas/consulta8', consultaPromediosGenero);
Ratleta.get('/atletas/consulta6',consultaTotalPorPais );
Ratleta.get('/atletas/consulta10', consultaMultiplesOros);
export { Ratleta };