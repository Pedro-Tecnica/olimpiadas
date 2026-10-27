import { conectar } from "../database/conexion.js";
const bdd = await conectar();
export const mostrarAtletas = async (peq, resp) => {
    try {
        let mostrarsql = "SELECT idAtletas, nombre, genero, edad, altura, peso, codigoISO FROM atletas order by idAtletas";
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        resp.render('atletas/atletasmostrar', { registros }); 
    } catch (error) {
        console.log(error);
    }
};
export const altaAtleta = async (peq, resp) => {
    
    let id = peq.body.idhtml;
    let nombre = peq.body.nomhtml; 
    let genero = peq.body.generohtml; 
    let edad = peq.body.edadhtml;
    let altura = peq.body.alturahtml; 
    let peso = peq.body.pesohtml; 
    let pais = peq.body.paishtml;

if(pais.length > 3 || pais.length <= 2){
    return resp.render('atletas/atletasaltas',{ error:"El código ISO no puede tener más de 3 caracteres."
    });
}

    let Altasql = "INSERT INTO atletas (idAtletas, nombre, genero, edad, altura, peso, codigoISO) VALUES ('"+ id +"','"+ nombre +"','"+ genero +"','"+ edad +"','"+ altura +"','"+ peso +"','"+ pais +"');";
    try {
    
    const [ids] =await bdd.query("SELECT * FROM atletas WHERE idAtletas = ?", [id]);
    if(ids.length > 0){
    return resp.render('atletas/atletasaltas',{error:"El atleta ya existe."
    });
}

    let validaciones = /^[a-zA-ZáéíóúÁÉÍÓÚñÑ?\s]+$/;
    if (!validaciones.test(nombre)) {
        return resp.render('atletas/atletasaltas',{error:"Los nombres no pueden contener: Puntos, comas, guiones o numeros."
            })
    }

    const [paises] =await bdd.query("SELECT * FROM paises WHERE codigoISO = ?", [pais]);
    if(paises.length === 0){
    return resp.render('atletas/atletasaltas',{ error:"El codigo de este pais no existe."            
    });

    }



        const[registros] = await bdd.query(Altasql);
        console.log(registros);
        resp.render('index'); 
        
    } catch(error) {
        console.log(`error la sentencia insert ${error}`);
    }

}

export const eliminarAtleta = async (peq, resp) => {

    let id = peq.body.idhtml;

    let Eliminarsql = "DELETE FROM atletas WHERE idAtletas = '"+ id +"';";
    
    try {

    const [ids] =await bdd.query("SELECT * FROM atletas WHERE idAtletas = ?", [id]);
        if(ids.length == 0){
            return resp.render('atletas/atletaseliminar',{error:"El atleta no existe"
            });
        }

        const[registros] = await bdd.query(Eliminarsql);
        console.log(registros);
        resp.render('index');
    } catch(error) {
        console.log(`error la sentencia delete ${error}`);
    }
};

export const cmodAtleta = (peq, resp) => {
    resp.render('atletas/atletasmod');
};


export const modificarAtleta = async (peq, resp) => {
    let id = peq.body.idhtml;
    let nombre = peq.body.nomhtml;
    let genero = peq.body.generohtml;
    let edad = peq.body.edadhtml;
    let altura = peq.body.alturahtml;
    let peso = peq.body.pesohtml;
    let pais = peq.body.paishtml;


if(pais.length > 3){
            return resp.render('atletas/atletasmod',{ error:"El código ISO solo debe tener más de 3 caracteres."
        });
}


    let Modsql = "UPDATE atletas SET nombre='"+ nombre +"', genero='"+ genero +"', edad='"+ edad +"', altura='"+ altura +"', peso='"+ peso +"', codigoISO='"+ pais +"' WHERE idAtletas='"+ id +"';";
    
    try {
            const [ids] =await bdd.query("SELECT * FROM atletas WHERE idAtletas = ?", [id]);
            if(ids.length == 0){
            return resp.render('atletas/atletasmod',{error:"El atleta no existe"
            });
            }

        const [registros] = await bdd.query(Modsql);
        console.log(registros);
        resp.render('index'); 
    } catch (error) {
        console.log(`error la sentencia update ${error}`);
        return resp.send("Error al modificar el atleta. Fijate si el país existe."); 
  }
}



export const cmenuConsultas = (peq, resp) => {
    resp.render('atletas/consultas');
};


export const consultaFemenino = async (peq, resp) => {
    try {
        // WHERE genero = 'femenino' 
         let mostrarsql = "SELECT idAtletas, nombre, genero, edad, altura, peso, codigoISO FROM atletas WHERE genero = 'femenino' ORDER BY nombre ASC";
        
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
        
        resp.render('atletas/atletasmostrar', { registros }); 
    } catch (error) {
        console.log(error);
        resp.send("Error al mostrar la consulta");
    }
};


export const consultaMayores30 = async (peq, resp) => {
    try {

        let mostrarsql = "SELECT idAtletas, nombre, genero, edad, altura, peso, codigoISO FROM atletas WHERE edad > 30";
        
        const [registros] = await bdd.query(mostrarsql);
        console.log(registros);
       
        resp.render('atletas/atletasmostrar', { registros }); 
    } catch (error) {
        console.log(error);
    }
};
/*export const consulta = (peq, resp) => {
    let id = parseInt(peq.params.idhtml);
    let consultarsql = "SELECT idAtletas, nombre, genero, edad, altura, peso, codigoISO FROM atletas WHERE idAtletas = '"+ id +"';";
    
    try {
        const [registros] = await bdd.query(consultarsql);
        console.log(registros);
    } catch(error) {
        console.log(`error la sentencia select ${error}`);
    }
};*/

