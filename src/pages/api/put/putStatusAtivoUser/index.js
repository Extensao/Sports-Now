import React from 'react'
import { connection } from '../../../../../config/mySql'

const handlerPutStatusAtivoUser = async (req, res) => {

    if (req.method === 'PUT') {

        const promisePool = connection.promise();
        
        var {Email} = req.body;
  
            await promisePool.query('UPDATE tb_user u SET u.ativo = 1 WHERE u.ativo = 0 AND u.email = ? ',
            [Email])
               .then(([rows]) =>{
                 res.status(200).json(rows)
               }).catch(err=>{
                 console.log(err)
               })
  
      }

}

export default handlerPutStatusAtivoUser