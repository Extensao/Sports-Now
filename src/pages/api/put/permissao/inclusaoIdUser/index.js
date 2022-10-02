import React from 'react'
import { connection } from '../../../../../../config/mySql';

const putsInclusaoIdUser = async (req, res) => {

    if (req.method === 'PUT') {

        const promisePool = connection.promise();
        
        var {UiD,Email} = req.body;

        const sql = `
                        UPDATE tb_permissao p SET p.id_user = ? 
                        WHERE p.email = ? 
                    `;

       await promisePool.query(sql,
       [UiD,Email])
          .then(([rows]) =>{
            res.status(200).json(rows)
          }).catch(err=>{
            console.log(err)
          })
  
      }

}

export default putsInclusaoIdUser