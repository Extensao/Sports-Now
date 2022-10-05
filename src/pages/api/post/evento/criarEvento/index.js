import React from 'react'
import { connection } from '../../../../../../config/mySql'

const postCriarEvento = async (req, res) => {

    if (req.method === 'POST') {

        const promisePool = connection.promise();
        
        
        var { Titulo, Descricao, Dia, Mes, Ano, Hora, Minuto, Logradouro, Bairro, Localidade, UiD, UrlImg } = req.body;
    
        var HoraTratamento = Hora < 9 ? '0'+Hora : Hora;

        var MinutoTratamento = Minuto < 9 ? '0'+Minuto : Minuto;

        var DataFormtDia = Dia < 9 ? '0'+Dia : Dia;

        var DataFormat = Mes < 9 ? DataFormtDia+'/'+'0'+(Mes+1)+'/'+Ano+' '+HoraTratamento+':'+MinutoTratamento : DataFormtDia+'/'+(Mes+1)+'/'+Ano+' '+HoraTratamento+':'+MinutoTratamento;
        
        await promisePool.query('INSERT INTO tb_evento ( img_evento, ativo, titulo, descricao, criacao_data_evento, endereco, bairro, localidade, id_comentario, id_like, id_user) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
        [UrlImg, 1, Titulo, Descricao, DataFormat, Logradouro, Bairro, Localidade, null, null, UiD])
            .then(([rows]) =>{
                res.status(200).json(rows)
            }).catch(err=>{
                console.log(err)
            })
     
      }

}

export default postCriarEvento