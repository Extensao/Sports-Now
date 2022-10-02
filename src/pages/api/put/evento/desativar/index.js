import { connection } from "../../../../../../config/mySql";

const putDesativarEvento = async (req, res) => {

        const promisePool = connection.promise();

        var { IdEvento } = req.body;

        const sql = 'UPDATE tb_evento e SET e.ativo = 0 WHERE e.id_evento = ?';

        await promisePool.query(sql,
            [IdEvento])
            .then(([rows]) => {
                res.status(200).json(rows)
            }).catch(err => {
                console.log(err)
            })

}

export default putDesativarEvento