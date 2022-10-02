import { connection } from "../../../../../../config/mySql";

const putUpdateUser =  async (req,res) =>{
    if (req.method === 'PUT') {
      
        const promisePool = connection.promise();
        
        var {NickName,Telefone,UiD} = req.body;

        const sql = `
                        UPDATE tb_user u SET u.nick_name = ?, u.telefone = ?
                        WHERE u.id_user = ?
                    `;

        await promisePool.query(sql,
            [NickName,Telefone,UiD])
               .then(([rows]) =>{
                 res.status(200).json(rows)
               }).catch(err=>{
                 console.log(err)
               })

    }
}

export default putUpdateUser;