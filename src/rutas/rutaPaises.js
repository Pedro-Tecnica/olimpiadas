import express from "express";
import {} from "../controller/controllerpaises.js";

const Rpais = express.Router();

Rpais.get('/paises', (req, resp) => { 
    resp.render('paises'); });



export { Rpais };