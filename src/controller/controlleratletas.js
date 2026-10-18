import { conectar } from "../database/conexion.js";
const bdd= await conectar();





export const mostrarAtletas= async (peq,resp)=>{

    try{
        let mostrarsql="SELECT idAtletas, nombre, genero, edad, altura, peso FROM atletas order by idAtletas";
        const[registros]= await bdd.query(mostrarsql)
        console.log(registros)
        resp.render('atletasmostrar',{registros});
    }
    catch(error){
        console.log(error);
    }
}

export const altaAtleta= async(peq,resp)=>{
let id,nombre,gene,edad,alt,peso;
id=peq.body.idhtml;
nombre=peq.body.nomhtml;
gene=peq.body.genehtml;
alt=peq.body.althtml;
peso=peq.body.pesohtml;

let Altasql = "INSERT INTO atletas (idAtletas, nombre, genero, edad, alt, peso) VALUES ('"+ idAtletas+"','"+ nombre +"','"+ genero+"','"+edad+"','"+altura+"','"+peso+"');";
try{
    const[registros]= await  bdd.query(Altasql);
    console.log(registros)
    resp.render('index')
    }catch(error){
        console.log(`error la sentencia insert ${error}`);
    }
}
