import React from 'react'
import { connection } from '../../../../../config/mySql';


const getUsers = async (req, res) => {

  if (req.method === 'GET') {

    const promisePool = connection.promise();

   await promisePool.query('SELECT * FROM tb_user ')
      .then(([rows]) =>{
        res.status(200).json(rows)
      }).catch(err=>{
        console.log(err)
      })

  }
}

export default getUsers