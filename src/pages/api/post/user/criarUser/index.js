import React from 'react'
import { connection } from '../../../../../../config/mySql'

const handlerCriarUser = async (req, res) => {

    if (req.method === 'POST') {

        const promisePool = connection.promise();
        
        var {Nome,Email,Telefone,NickName,PhotoURL,Dia,Mes,Mes,Ano,Hora,Minuto} = req.body;
  
        var HoraTratamento = Hora < 9 ? '0'+Hora : Hora;

        var MinutoTratamento = Minuto < 9 ? '0'+Minuto : Minuto;

       await promisePool.query('INSERT INTO tb_user (nome,email,telefone,criacao_data_user,ativo_login,nick_name,img_user) VALUES (?,?,?,?,?,?,?)',
       [Nome,Email,Telefone, Mes < 9 ? Dia+'/'+'0'+(Mes+1)+'/'+Ano+' '+HoraTratamento+':'+MinutoTratamento : Dia+'/'+(Mes+1)+'/'+Ano+' '+HoraTratamento+':'+MinutoTratamento,'1',NickName,PhotoURL])
          .then(([rows]) =>{
            res.status(200).json(rows)
          }).catch(err=>{
            console.log(err)
          })
  
      }

}

export default handlerCriarUser