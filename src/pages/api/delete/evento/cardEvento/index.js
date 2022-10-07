import React from 'react'
import { connection } from '../../../../../../config/mySql';

const deleteCardEvento = async(req, res) => {
        const promisePool = connection.promise();
    
        var { IdEvento } = req.body;
        
        const sql = 'DELETE FROM tb_evento WHERE id_evento = ?';
    
        await promisePool.query(sql,[IdEvento])
          .then(() =>{
            res.status(200).json()
          }).catch(err=>{
            console.log(err)
          })
}

export default deleteCardEvento