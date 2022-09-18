import React from 'react'
import { connection } from '../../../../../config/mySql';


const getPermissao = async (req, res) => {

    if (req.method === 'GET') {

        const promisePool = connection.promise();
  
       await promisePool.query(`
        SELECT 
        p.id_user,
        p.id_permissao,
        u.nome,
        u.email,
        u.telefone,
        u.criacao_data_user,
        u.ativo,
        u.nick_name,
        u.img_user,
        p.tipo_permissao
        FROM extensao_projeto.tb_user u
        JOIN  tb_permissao p ON p.id_user = u.id_user
       `)
          .then(([rows]) =>{
            res.status(200).json(rows)
          }).catch(err=>{
            console.log(err)
          })
  
      }

}

export default getPermissao