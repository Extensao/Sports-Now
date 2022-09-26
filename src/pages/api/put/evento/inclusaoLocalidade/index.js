import React from 'react'
import { connection } from '../../../../../../config/mySql';

const handlerpInclusaoIdLocalidade = async (req, res) => {

    if (req.method === 'PUT') {

        const promisePool = connection.promise();
        
        var {LiD,Email} = req.body;

        const sql = `
                        UPDATE tb_evento e SET e.id_localidade = ? 
                        WHERE p.email = ? 
                    `;

       await promisePool.query(sql,
       [LiD,Email])
          .then(([rows]) =>{
            res.status(200).json(rows)
          }).catch(err=>{
            console.log(err)
          })
  
      }

}

export default handlerpInclusaoIdLocalidade