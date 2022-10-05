import React from 'react'
import { connection } from '../../../../../../config/mySql'

const postCriarUser = async (req, res) => {

    if (req.method === 'POST') {

        const promisePool = connection.promise();
        
        var { Nome, Email, Telefone, NickName, PhotoURL, Dia, Mes, Ano, Hora, Minuto} = req.body;
  

        var HoraTratamento = Hora < 9 ? '0'+Hora : Hora;

        var MinutoTratamento = Minuto < 9 ? '0'+Minuto : Minuto;

        var DataFormtDia = Dia < 9 ? '0'+Dia : Dia;

        var DataFormat = Mes < 9 ? DataFormtDia+'/'+'0'+(Mes+1)+'/'+Ano+' '+HoraTratamento+':'+MinutoTratamento : DataFormtDia+'/'+(Mes+1)+'/'+Ano+' '+HoraTratamento+':'+MinutoTratamento;

        const sql = `
                      INSERT INTO tb_user 
                      (nome,email,telefone,criacao_data_user,ativo_login,nick_name,img_user) 
                      VALUES (?,?,?,?,?,?,?)
                    `;

       await promisePool.query(sql,
       [Nome,Email,Telefone,DataFormat,'1',NickName,PhotoURL])
          .then(([rows]) =>{
            res.status(200).json(rows)
          }).catch(err=>{
            console.log(err)
          })
  
      }

}

export default postCriarUser