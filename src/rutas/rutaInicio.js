import express from 'express';

import{Ratleta} from './rutaAtleta.js'
import{Rdeporte} from './rutaDeportes.js'
import{Rresultado} from './rutaResultado.js'

const Rinicio = express.Router();

Rinicio.use(Ratleta);
Rinicio.use(Rdeporte);
Rinicio.use(Rresultado);

Rinicio.get('/', (req, resp) => {
    resp.render('index');
});

export{Rinicio};