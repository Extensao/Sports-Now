import { connection } from "../../../../../../../config/mySql";


const getEventoAtivo = async (req, res) => {


  if (req.method === 'GET') {

    const promisePool = connection.promise();

    const { uId } = req.query;

    const sql = 'SELECT COUNT(e.id_evento) FROM card_evento e WHERE e.ativo = 1 AND e.id_user = ?';

    await promisePool.query(sql, [uId])
      .then(([rows]) => {
        res.status(200).json(rows)
      }).catch(err => {
        console.log(err)
      })

  }

}

export default getEventoAtivo