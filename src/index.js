import express from 'express'
import color from 'colors'

//importa path y fileURLToPath para obtener la ruta del archivo.
import path from 'path';
import {fileURLToPath} from 'url';

//define el puerto del servidor
const puerto = 3000 
const app = express()
app.set('view engine', 'ejs');

//indica la ruta de las vistas
const directorio=path.dirname(fileURLToPath(import.meta.url));
app.set('views', path.join(directorio, 'vistas'));
console.log(directorio);
app.use(express.static(path.join(directorio, 'visuales2')));
app.use('/img', express.static(path.join(directorio, 'img')));


// para tomar datos de un formulario
app.use(express.urlencoded({extended:true}));

//renderiza el servidor
//Rutas de la paginas 
import {Rinicio} from './rutas/rutaInicio.js'
import {Ratleta} from './rutas/rutaAtleta.js';


app.use(Rinicio);
app.use(Ratleta);



//inicia el servidor
app.listen(puerto,() => {
    console.log(`Servidor Iniciando ${puerto}`.blue);
});