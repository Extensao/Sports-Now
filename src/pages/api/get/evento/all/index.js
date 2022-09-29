import { connection } from '../../../../../../config/mySql'

const getEvento = async (req, res) => {


  if (req.method === 'GET') {

    const promisePool = connection.promise();

    const sql = 'select * from card_evento';

    await promisePool.query(sql)
      .then(([rows]) =>{
        res.status(200).json(rows)
      }).catch(err=>{
        console.log(err)
      })

  }

}

export default getEvento