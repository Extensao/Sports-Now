import React from 'react'
import { connection } from '../../../../../../config/mySql'

const handlerCriarEvento = async (req, res) => {

    if (req.method === 'POST') {

        const promisePool = connection.promise();

        var { Titulo, Descricao, IdUser, Dia, Mes, Ano, Hora, Minuto } = req.body;

        var HoraTratamento = Hora < 9 ? '0' + Hora : Hora;

        var MinutoTratamento = Minuto < 9 ? '0' + Minuto : Minuto;

        await promisePool.query('INSERT INTO tb_evento (img_evento,desabilitar,titulo,descricao,criacao_data_evento,id_user,id_comentario,id_like) VALUES (?,?,?,?,?,?,?,?)',
            ['img', 1, Titulo, Descricao, Mes < 9 ? Dia + '/' + '0' + (Mes + 1) + '/' + Ano + ' ' + HoraTratamento + ':' + MinutoTratamento : Dia + '/' + (Mes + 1) + '/' + Ano + ' ' + HoraTratamento + ':' + MinutoTratamento, IdUser, null, null])
            .then(([rows]) => {
                res.status(200).json(rows)
            }).catch(err => {
                console.log(err)
            })

    }

}

export default handlerCriarEvento