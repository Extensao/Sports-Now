import React from 'react'
import { connection } from '../../../../../../config/mySql';

const handlerpInclusaoIdUser = async (req, res) => {

    if (req.method === 'PUT') {

        const promisePool = connection.promise();
        
        var {UiD,Email} = req.body;

       await promisePool.query('UPDATE tb_permissao p SET p.id_user = ? WHERE p.email = ? ',
       [UiD,Email])
          .then(([rows]) =>{
            res.status(200).json(rows)
          }).catch(err=>{
            console.log(err)
          })
  
      }

}

export default handlerpInclusaoIdUser