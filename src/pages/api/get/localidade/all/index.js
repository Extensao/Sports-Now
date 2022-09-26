import React from 'react'
import { connection } from '../../../../../../config/mySql';


const getLocaliddes = async (req, res) => {

  if (req.method === 'GET') {

    const promisePool = connection.promise();

    const sql = 'SELECT * FROM tb_localidade';

    await promisePool.query(sql)
      .then(([rows]) =>{
        res.status(200).json(rows)
      }).catch(err=>{
        console.log(err)
      })

  }
}

export default getLocaliddes