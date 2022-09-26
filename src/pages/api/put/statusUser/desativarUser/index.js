import React from 'react'
import { connection } from '../../../../../../config/mySql';


const handlerStatusDesativarUser = async (req, res) => {

    if (req.method === 'PUT') {

        const promisePool = connection.promise();
        
        var {Email} = req.body;
  
             
        const sql = `
                        UPDATE tb_user u SET u.ativo_login = 0
                        WHERE u.ativo_login = 1 AND u.email = ?
                    `;

       await promisePool.query(sql,
        [Email])
           .then(([rows]) =>{
             res.status(200).json(rows)
           }).catch(err=>{
             console.log(err)
           })
  
      }

}

export default handlerStatusDesativarUser