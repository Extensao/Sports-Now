import React from 'react'
import { connection } from '../../../../../../config/mySql';


const getPermissao = async (req, res) => {

    if (req.method === 'GET') {

        const promisePool = connection.promise();
  
       await promisePool.query('SELECT * FROM tb_permissao p')
          .then(([rows]) =>{
            res.status(200).json(rows)
          }).catch(err=>{
            console.log(err)
          })
  
      }

}

export default getPermissao