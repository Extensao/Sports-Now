import { connection } from "../../../../../../config/mySql";

const putEditarEvento = async (req, res) => {

    var {
        ActiveImg
    } = req.body;

    const promisePool = connection.promise();

    if (ActiveImg == true) {
        var {
            Titulo,
            Descricao,
            Logradouro,
            Bairro,
            Localidade,
            Img,
            IdEvento
        } = req.body;

        if (Titulo != "" && Descricao != "" && Img != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.titulo = ?, e.descricao = ?, e.img_evento = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Titulo, Descricao, Img, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })
        } else if (Titulo != "" && Descricao != "" && Logradouro != "" && Img != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.titulo = ?, e.descricao = ?, e.endereco = ?, e.img_evento = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Titulo, Descricao, Logradouro, Img, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })
        } else if (Titulo != "" && Descricao != "" && Logradouro != "" && Bairro != "" && Img != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.titulo = ?, e.descricao = ?, e.endereco = ?, e.bairro = ?, e.img_evento = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Titulo, Descricao, Logradouro, Bairro, Img, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })
        } else if (Titulo != "" && Descricao != "" && Logradouro != "" && Bairro != "" && Localidade != "" && Img != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.titulo = ?, e.descricao = ?, e.endereco = ?, e.bairro = ?, e.localidade = ?, e.img_evento = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Titulo, Descricao, Logradouro, Bairro, Localidade, Img, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })
        } else if (Titulo != "" && Logradouro != "" && Bairro != "" && Localidade != "" && Img != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.titulo = ?,  e.endereco = ?, e.bairro = ?, e.localidade = ?, e.img_evento = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Titulo, Logradouro, Bairro, Localidade, Img, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })
        } else if (Titulo != "" && Bairro != "" && Localidade != "" && Img != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.titulo = ?, e.bairro = ?, e.localidade = ?, e.img_evento = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Titulo, Bairro, Localidade, Img, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })
        } else if (Titulo != "" && Localidade != "" && Img != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.titulo = ?, e.localidade = ?, e.img_evento = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Titulo, Localidade, Img, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })
        } else if (Titulo != "" && Img != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.titulo = ?, e.img_evento = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Titulo, Img, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })
        } else if (Descricao != "" && Logradouro != "" && Img != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.descricao = ?, e.endereco = ?, e.img_evento = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Descricao, Logradouro, Img, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })
        } else if (Descricao != "" && Logradouro != "" && Bairro != "" && Img != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.descricao = ?, e.endereco = ?, e.bairro = ?, e.img_evento = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Descricao, Logradouro, Bairro, Img, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })
        } else if (Descricao != "" && Logradouro != "" && Bairro != "" && Localidade != "" && Img != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.descricao = ?, e.endereco = ?, e.bairro = ?, e.localidade = ?, e.img_evento = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Descricao, Logradouro, Bairro, Localidade, Img, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })
        } else if (Descricao != "" && Bairro != "" && Localidade != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.descricao = ?, e.bairro = ?, e.localidade = ?, e.img_evento = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Descricao, Bairro, Localidade, Img, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })
        } else if (Descricao != "" && Bairro != "" && Localidade != "" && Img != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.descricao = ?, e.bairro = ?, e.localidade = ?, e.img_evento = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Descricao, Bairro, Localidade, Img, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })
        } else if (Descricao != "" && Localidade != "" && Img != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.descricao = ?, e.localidade = ?, e.img_evento = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Descricao, Localidade, Img, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })
        } else if (Descricao != "" && Img != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.descricao = ?, e.img_evento = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Descricao, Img, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })
        } else if (Logradouro != "" && Bairro != "" && Img != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.endereco = ?, e.bairro = ?, e.img_evento = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Logradouro, Bairro, Img, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })
        } else if (Logradouro != "" && Bairro != "" && Localidade != "" && Img != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.endereco = ?, e.bairro = ?, e.localidade = ?, e.img_evento = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Descricao, Bairro, Localidade, Img, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })
        } else if (Logradouro != "" && Localidade != "" && Img != "") {
            const sql = `
                UPDATE tb_evento e SET 
                 e.endereco = ?, e.bairro = ?, e.img_evento = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Descricao, Bairro, Img, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })
        } else if (Logradouro != "" && Img != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.endereco = ?, e.img_evento = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Logradouro, Img, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })
        } else if (Bairro != "" && Localidade != "" && Img != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.bairro = ?, e.localidade = ?, e.img_evento = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Bairro, Localidade, Img, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })
        } else if (Bairro != "" && Img != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.bairro = ?, e.img_evento = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Bairro, Img, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })
        } else if (Localidade != "" && Img != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.localidade = ?, e.img_evento = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Localidade, Img, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })
        } else if (Img != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.img_evento = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Img, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })
        } else {
            console.log("Campos foram mandado pro servido como vázio")
        }
    } else {
        var {
            Titulo,
            Descricao,
            Logradouro,
            Bairro,
            Localidade,
            IdEvento
        } = req.body;

        if (Titulo != "" && Descricao != "") {
            const sql = `
                                UPDATE tb_evento e SET 
                                e.titulo = ?, e.descricao = ?
                                WHERE e.id_evento = ?
                         `;

            await promisePool.query(sql,
                [Titulo, Descricao, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })

        } else if (Titulo != "" && Descricao != "" && Logradouro != "") {
            const sql = `
                    UPDATE tb_evento e SET 
                    e.titulo = ?, e.descricao = ?, e.endereco = ?
                    WHERE e.id_evento = ?
                 `;

            await promisePool.query(sql,
                [Titulo, Descricao, Logradouro, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })

        } else if (Titulo != "" && Descricao != "" && Logradouro != "" && Bairro != "") {
            const sql = `
                    UPDATE tb_evento e SET 
                    e.titulo = ?, e.descricao = ?, e.endereco = ?, e.bairro = ?
                    WHERE e.id_evento = ?
                 `;

            await promisePool.query(sql,
                [Titulo, Descricao, Logradouro, Bairro, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })

        } else if (Titulo != "" && Descricao != "" && Logradouro != "" && Bairro != "" && Localidade != "") {
            const sql = `
                    UPDATE tb_evento e SET 
                    e.titulo = ?, e.descricao = ?, e.endereco = ?, e.bairro = ?, e.localidade = ?
                    WHERE e.id_evento = ?
                 `;

            await promisePool.query(sql,
                [Titulo, Descricao, Logradouro, Bairro, Localidade, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })

        } else if (Titulo != "" && Logradouro != "" && Bairro != "" && Localidade != "") {
            const sql = `
                    UPDATE tb_evento e SET 
                    e.titulo = ?, e.endereco = ?, e.bairro = ?, e.localidade = ?
                    WHERE e.id_evento = ?
                 `;

            await promisePool.query(sql,
                [Titulo, Logradouro, Bairro, Localidade, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })

        } else if (Titulo != "" && Bairro != "" && Localidade != "") {
            const sql = `
                    UPDATE tb_evento e SET 
                    e.titulo = ?, e.bairro = ?, e.localidade = ?
                    WHERE e.id_evento = ?
                 `;

            await promisePool.query(sql,
                [Titulo, Descricao, Logradouro, Bairro, Localidade, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })

        } else if (Titulo != "" && Localidade != "") {
            const sql = `
                    UPDATE tb_evento e SET 
                    e.titulo = ?, e.localidade = ?
                    WHERE e.id_evento = ?
                 `;

            await promisePool.query(sql,
                [Titulo, Localidade, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })

        } else if (Titulo != "") {
            const sql = `
                    UPDATE tb_evento e SET 
                    e.titulo = ?
                    WHERE e.id_evento = ?
                 `;

            await promisePool.query(sql,
                [Titulo, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })

        } else if (Descricao != "" && Logradouro != "") {
            const sql = `
                    UPDATE tb_evento e SET 
                    e.descricao = ?, e.endereco = ?
                    WHERE e.id_evento = ?
                 `;

            await promisePool.query(sql,
                [Descricao, Logradouro, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })

        } else if (Descricao != "" && Logradouro != "" && Bairro != "") {
            const sql = `
                    UPDATE tb_evento e SET 
                    e.descricao = ?, e.endereco = ?, e.bairro = ?
                    WHERE e.id_evento = ?
                 `;

            await promisePool.query(sql,
                [Descricao, Logradouro, Bairro, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })

        } else if (Descricao != "" && Logradouro != "" && Bairro != "" && Localidade != "") {
            const sql = `
                    UPDATE tb_evento e SET 
                     e.descricao = ?, e.endereco = ?, e.bairro = ?, e.localidade = ?
                    WHERE e.id_evento = ?
                 `;

            await promisePool.query(sql,
                [Descricao, Logradouro, Bairro, Localidade, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })

        } else if (Descricao != "" && Bairro != "" && Localidade != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.descricao = ?, e.bairro = ?, e.localidade = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Descricao, Logradouro, Localidade, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })
        } else if (Descricao != "" && Bairro != "" && Localidade != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.descricao = ?, e.bairro = ?, e.localidade = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Descricao, Bairro, Localidade, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })

        } else if (Descricao != "" && Localidade != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.descricao = ?, e.localidade = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Descricao, Localidade, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })

        } else if (Descricao != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.descricao = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Descricao, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })
        } else if (Logradouro != "" && Bairro != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.endereco = ?, e.bairro = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Logradouro, Bairro, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })

        } else if (Logradouro != "" && Bairro != "" && Localidade != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.endereco = ?, e.bairro = ?, e.localidade = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Logradouro, Bairro, Localidade, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })

        } else if (Logradouro != "" && Localidade != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.endereco = ?, e.localidade = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Logradouro, Localidade, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })
        } else if (Logradouro != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.endereco = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Logradouro, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })
        } else if (Bairro != "" && Localidade != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.bairro = ?, e.localidade = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Bairro, Localidade, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })
        } else if (Bairro != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.bairro = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Bairro, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })
        } else if (Localidade != "") {
            const sql = `
                UPDATE tb_evento e SET 
                e.localidade = ?
                WHERE e.id_evento = ?
             `;

            await promisePool.query(sql,
                [Localidade, IdEvento])
                .then(([rows]) => {
                    res.status(200).json(rows)
                }).catch(err => {
                    console.log(err)
                })
        } else {
            console.log("Campos foram mandado pro servido como vázio")
        }
    }
}

export default putEditarEvento