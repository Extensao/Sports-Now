import React from 'react'
import { connection } from '../../../../../../config/mySql'

const postCriarPermissao = async (req, res) => {

    if (req.method === 'POST') {

        const promisePool = connection.promise();
        
        var { Email, Dia, Mes, Ano, Hora, Minuto} = req.body;

       var HoraTratamento = Hora < 9 ? '0'+Hora : Hora;

       var MinutoTratamento = Minuto < 9 ? '0'+Minuto : Minuto;

       const sql = `
                        INSERT INTO tb_permissao 
                        (id_user,tipo_permissao,criacao_data_permissao,email) 
                        VALUES (?,?,?,?)
                    `;

       await promisePool.query(sql,
       [null,Email == "leandro.lima@faculdadesapiens.edu.br" ? 'Admin' : 'Usuário', Mes < 9 ? Dia+'/'+'0'+(Mes+1)+'/'+Ano+' '+HoraTratamento+':'+MinutoTratamento : Dia+'/'+(Mes+1)+'/'+Ano+' '+HoraTratamento+':'+MinutoTratamento, Email ])
          .then(([rows]) =>{
            res.status(200).json(rows)
          }).catch(err=>{
            console.log(err)
          })
  
      }

}

export default postCriarPermissao