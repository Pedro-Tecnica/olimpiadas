import express from 'express';
const Rdeporte = express.Router();

Rdeporte.get('/deportes', (req, res) => {
    res.render('deportes');
});
Rdeporte.get('/deportes/deportesaltas', (req, res) => {
    res.render('deportesaltas');
});

export{Rdeporte};