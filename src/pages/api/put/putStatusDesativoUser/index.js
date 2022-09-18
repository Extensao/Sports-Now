import React from 'react'
import { connection } from '../../../../../config/mySql'

const handlerPutStatusDesativoUser = async (req, res) => {

    if (req.method === 'PUT') {

        const promisePool = connection.promise();
        
        var {Email} = req.body;
  
        await promisePool.query('UPDATE tb_user u SET u.ativo_login = 0 WHERE u.ativo_login = 1 AND u.email = ?',
        [Email])
           .then(([rows]) =>{
             res.status(200).json(rows)
           }).catch(err=>{
             console.log(err)
           })
  
      }

}

export default handlerPutStatusDesativoUser