import React from 'react'
import { connection } from '../../../../../../config/mySql'

const handlerCriarPermissao = async (req, res) => {

    if (req.method === 'POST') {

        const promisePool = connection.promise();
        
        var { Cep, Logradouro, complemento, Bairro, Localidade, Uf, Ddd } = req.body;

       const sql = `
                        INSERT INTO tb_localidade 
                        (cep,logradouro,complemento,bairro,localidade,uf,ddd) 
                        VALUES (?,?,?,?,?,?)
                    `;

       await promisePool.query(sql,
       [ Cep, Logradouro, complemento, Bairro, Localidade, Uf, Ddd ])
          .then(([rows]) =>{
            res.status(200).json(rows)
          }).catch(err=>{
            console.log(err)
          })
  
      }

}

export default handlerCriarPermissao