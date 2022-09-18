import React from 'react'
import { connection } from '../../../../../config/mySql';

const handlerpPutPermissao = async (req, res) => {

    if (req.method === 'PUT') {

        const promisePool = connection.promise();
        
        var {TipoPermissao,idUser} = req.body;

       await promisePool.query('UPDATE tb_permissao p  SET p.tipo_permissao = ? WHERE p.id_user = ? ',
       [TipoPermissao,idUser])
          .then(([rows]) =>{
            res.status(200).json(rows)
          }).catch(err=>{
            console.log(err)
          })
  
      }

}

export default handlerpPutPermissao