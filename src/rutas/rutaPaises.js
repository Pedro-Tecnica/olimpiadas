import express from "express";
import {mostrarPaises, altaPais, eliminarPais, cmodPais, modificarPais} from "../controller/controllerpaises.js";

const Rpais = express.Router();

Rpais.get('/paises', (req, resp) => { 
    resp.render('paises/paises'); });

Rpais.get('/paises/paisesmostrar', mostrarPaises);
Rpais.get('/paises/paisesconsult', (req, resp) => {
    resp.render('paises/paisesconsult');
});

Rpais.get('/paises/paisesaltas', (req, resp) => {
    resp.render('paises/paisesaltas');});

Rpais.post('/paises/paisesaltas', altaPais);

Rpais.get('/paises/paiseseliminar', (req, resp) => {
    resp.render('paises/paiseseliminar');});

Rpais.post('/paises/paiseseliminar', eliminarPais);

Rpais.get('/paises/paisesmod', cmodPais);
Rpais.post('/paises/modificar', modificarPais);


export {Rpais};