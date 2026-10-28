import express from 'express'
import color from 'colors'


import path from 'path';
import {fileURLToPath} from 'url';


const puerto = 3000 
const app = express()
app.set('view engine', 'ejs');


const directorio=path.dirname(fileURLToPath(import.meta.url));
app.set('views', path.join(directorio, 'vistas'));
console.log(directorio);
app.use(express.static(path.join(directorio, 'visuales2')));
app.use('/img', express.static(path.join(directorio, 'img')));



app.use(express.urlencoded({extended:true}));


import {Rinicio} from './rutas/rutaInicio.js'
import {Ratleta} from './rutas/rutaAtleta.js';


app.use(Rinicio);
app.use(Ratleta);




app.listen(puerto,() => {
    console.log(`Servidor Iniciando ${puerto}`.blue);
});