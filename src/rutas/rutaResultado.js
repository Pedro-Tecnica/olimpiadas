import express from 'express';
const Rresultado = express.Router();

Rresultado.get('/resultados', (req, res) => {
    res.render('resultados');
});
Rresultado.get('/resultados/resultadostodos', (req, res) => {
    res.render('resultadostodos');
});
export{Rresultado}; 