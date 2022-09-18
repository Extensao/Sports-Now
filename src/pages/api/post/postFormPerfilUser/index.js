import React from 'react'
import { connection } from '../../../../../config/mySql'

const handlerPostPerfilUser = async (req, res) => {

    if (req.method === 'POST') {

        const promisePool = connection.promise();
        
        var {Nome,Email,Telefone,NickName,PhotoURL} = req.body;

        var dateCreate = new Date();
  
       await promisePool.query('INSERT INTO tb_user (nome,email,telefone,criacao_data_user,ativo,nick_name,img_user) VALUES (?,?,?,?,?,?,?)',
       [Nome,Email,Telefone,dateCreate,'1',NickName,PhotoURL])
          .then(([rows]) =>{
            res.status(200).json(rows)
          }).catch(err=>{
            console.log(err)
          })
  
      }

}

export default handlerPostPerfilUser