import React from 'react'
import { connection } from '../../../../../../config/mySql'

const handlerCriarEvento = async (req, res) => {

    if (req.method === 'POST') {

        const promisePool = connection.promise();
        
        
        var { Titulo, Descricao, Dia, Mes, Ano, Hora, Minuto, Logradouro, Bairro, Localidade, UiD } = req.body;
    
        var HoraTratamento = Hora < 9 ? '0'+Hora : Hora;

        var MinutoTratamento = Minuto < 9 ? '0'+Minuto : Minuto;

        var dataFormat = Mes < 9 ? Dia+'/'+'0'+(Mes+1)+'/'+Ano+' '+HoraTratamento+':'+MinutoTratamento : Dia+'/'+(Mes+1)+'/'+Ano+' '+HoraTratamento+':'+MinutoTratamento;

        await promisePool.query('INSERT INTO tb_evento ( img_evento, ativo, titulo, descricao, criacao_data_evento, endereco, bairro, localidade, id_comentario, id_like, id_user) VALUES (?,?,?,?,?,?,?,?,?,?,?)',
        ["imagem", 1, Titulo, Descricao, dataFormat, Logradouro, Bairro, Localidade, null, null, UiD])
            .then(([rows]) =>{
                res.status(200).json(rows)
            }).catch(err=>{
                console.log(err)
            })
     
      }

}

export default handlerCriarEvento