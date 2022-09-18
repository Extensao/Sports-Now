import React from 'react'
import { connection } from '../../../../../config/mySql';

const handlerpPutPerfilUser = async (req, res) => {

    if (req.method === 'PUT') {

        const promisePool = connection.promise();
        
        var {NickName,Telefone,Email} = req.body;

       await promisePool.query('UPDATE tb_user u SET u.nick_name = ? , u.telefone = ? WHERE u.email = ?',
       [NickName,Telefone,Email])
          .then(([rows]) =>{
            res.status(200).json(rows)
          }).catch(err=>{
            console.log(err)
          })
  
      }

}

export default handlerpPutPerfilUser