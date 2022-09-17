import React from 'react'
import { connection } from '../../../../config/mySql'

const handlerPostUser = async (req, res) => {

    if (req.method === 'POST') {

        const promisePool = connection.promise();
        
        var {Nome, SobreNome, Email, Telefone} = req.body;

        console.log(Nome);

        var NomeCompleto = `${Nome} ${SobreNome}`;

        var dateCreate = new Date();
  
       await promisePool.query('INSERT INTO tb_user (img_user,nome,sobre_nome,nome_completo,email,telefone,criacao_data_user,ativo)  VALUES (?,?,?,?,?,?,?,?)',
       ['teste',Nome,SobreNome,NomeCompleto,Email,Telefone,dateCreate,'0'])
          .then(([rows]) =>{
            res.status(200).json(rows)
          }).catch(err=>{
            console.log(err)
          })
  
      }

}

export default handlerPostUser