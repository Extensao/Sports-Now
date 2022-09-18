import React from 'react'
import { connection } from '../../../../../config/mySql'

const handlerPostPermissao = async (req, res) => {

    if (req.method === 'POST') {

        const promisePool = connection.promise();
        
        var {IdUser,TipoPermissao} = req.body;

        var dateCreate = new Date("DD/MM/YYYY");
  
       await promisePool.query('INSERT INTO tb_permissao (id_user,tipo_permissao,data_permissao) VALUES (?,?)',
       [IdUser,TipoPermissao,dateCreate])
          .then(([rows]) =>{
            res.status(200).json(rows)
          }).catch(err=>{
            console.log(err)
          })
  
      }

}

export default handlerPostPermissao