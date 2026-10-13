import express from 'express';
const Ratleta = express.Router();

Ratleta.get('/atletas', (req, res) => {
    res.render('atletas');
});
Ratleta.get('/atletas/atletasaltas', (req, res) => {
    res.render('atletasaltas');
});
//Rat.get('/cliente/clibaja',cbaja)
//Rclientes.get('/cliente/climod',cmod)
//Rclientes.get('/cliente/clicons',ccons)
//Rclientes.get('/cliente/climostrar',cmt)
//Rclientes.post('/cliente/clinuevo',clinvo)

export{Ratleta}; 