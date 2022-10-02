import { connection } from "../../../../../../../config/mySql";


const getEventoAtivo = async (req, res) => {


  if (req.method === 'GET') {

    const promisePool = connection.promise();


    const sql = 'SELECT *  FROM card_evento c WHERE c.ativo = 1';

    await promisePool.query(sql)
      .then(([rows]) =>{
        res.status(200).json(rows)
      }).catch(err=>{
        console.log(err)
      })

  }

}

export default getEventoAtivo