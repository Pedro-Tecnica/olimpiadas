import { conectar } from "../database/conexion.js";
const bdd= await conectar();





export const mostrarAtletas= async (peq,resp)=>{

    try{
        let mostrarsql="SELECT idAtletas,nombre,genero,edad, altura,peso from atletas order by idAtletas";
        const[registros]= await bdd.query(mostrarsql)
        console.log(registros)
       resp.render('atletas', { registros });
    }
    catch(error){
        console.log(error);
    }
}
export const altaAtleta= async(peq,resp)=>{
let id,nombre,gene,edad,alt,peso;
id=peq.body.idhtml;
nombre=peq.body.nomhtml;
gene=peq.body.dirhtml;
alt=peq.body.telhtml;
peso=peq.body.telhtml;

let Altasql = "INSERT INTO clientes (idAtletas,nombre,gene,edad,alt,peso) VALUES ('"+ idAtletas+"','"+ nombre +"','"+ genero+"','"+edad+"','"+altura+"','"+peso+"');";
try{
    const[registros]= await  bdd.query(Altasql);
    console.log(registros)
    resp.render('index')
    }catch(error){
        console.log(`error la sentencia insert ${error}`);
    }
}
