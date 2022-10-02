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
            console.log("Titulo : ", Titulo)
            console.log("Descricao : ", Descricao)
            console.log("Img : ", Img)
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
            console.log("Titulo : ", Titulo)
            console.log("Descricao : ", Descricao)
            console.log("Logradouro : ", Logradouro)
            console.log("Img : ", Img)
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
            console.log("Titulo : ", Titulo)
            console.log("Descricao : ", Descricao)
            console.log("Logradouro : ", Logradouro)
            console.log("Bairro : ", Bairro)
            console.log("Img : ", Img)
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
            console.log("Titulo : ", Titulo)
            console.log("Descricao : ", Descricao)
            console.log("Logradouro : ", Logradouro)
            console.log("Bairro : ", Bairro)
            console.log("Localidade : ", Localidade)
            console.log("Img : ", Img)
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
            console.log("Titulo : ", Titulo)
            console.log("Logradouro : ", Logradouro)
            console.log("Bairro : ", Bairro)
            console.log("Localidade : ", Localidade)
            console.log("Img : ", Img)
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
            console.log("Titulo : ", Titulo)
            console.log("Bairro : ", Bairro)
            console.log("Localidade : ", Localidade)
            console.log("Img : ", Img)
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
            console.log("Titulo : ", Titulo)
            console.log("Bairro : ", Bairro)
            console.log("Localidade : ", Localidade)
            console.log("Img : ", Img)
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
            console.log("Titulo : ", Titulo)
            console.log("Imagem : ", Img)
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
            console.log("Descricao : ", Descricao)
            console.log("Logradouro : ", Logradouro)
            console.log("Img : ", Img)
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
            console.log("Descricao : ", Descricao)
            console.log("Logradouro : ", Logradouro)
            console.log("Bairro : ", Bairro)
            console.log("Img : ", Img)
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
            console.log("Descricao : ", Descricao)
            console.log("Logradouro : ", Logradouro)
            console.log("Bairro : ", Bairro)
            console.log("Localidade : ", Localidade)
            console.log("Img : ", Img)
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
            console.log("Descricao : ", Descricao)
            console.log("Logradouro : ", Logradouro)
            console.log("Localidade : ", Localidade)
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
            console.log("Descricao : ", Descricao)
            console.log("Bairro : ", Bairro)
            console.log("Localidade : ", Localidade)
            console.log("Img : ", Img)
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
            console.log("Descricao : ", Descricao)
            console.log("Localidade : ", Localidade)
            console.log("Img : ", Img)
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
            console.log("Descricao : ", Descricao)
            console.log("Img : ", Img)
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
            console.log("Logradouro : ", Logradouro)
            console.log("Bairro : ", Bairro)
            console.log("Img : ", Img)
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
            console.log("Logradouro : ", Logradouro)
            console.log("Bairro : ", Bairro)
            console.log("Localidade : ", Localidade)
            console.log("Img : ", Img)
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
            console.log("Logradouro : ", Logradouro)
            console.log("Bairro : ", Bairro)
            console.log("Img : ", Img)
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
            console.log("Logradouro : ", Logradouro)
            console.log("Img : ", Img)
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
            console.log("Bairro : ", Bairro)
            console.log("Localidade : ", Localidade)
            console.log("Img : ", Img)
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
            console.log("Bairro : ", Bairro)
            console.log("Img : ", Img)
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
            console.log("Localidade : ", Localidade)
            console.log("Img : ", Img)
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
            console.log("Img : ", Img)
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
            console.log("Titulo : ", Titulo)
            console.log("Descricao : ", Descricao)

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
            console.log("Titulo : ", Titulo)
            console.log("Descricao : ", Descricao)
            console.log("Logradouro : ", Logradouro)

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
            console.log("Titulo : ", Titulo)
            console.log("Descricao : ", Descricao)
            console.log("Logradouro : ", Logradouro)
            console.log("Bairro : ", Bairro)

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
            console.log("Titulo : ", Titulo)
            console.log("Descricao : ", Descricao)
            console.log("Logradouro : ", Logradouro)
            console.log("Bairro : ", Bairro)
            console.log("Localidade : ", Localidade)

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
            console.log("Titulo : ", Titulo)
            console.log("Logradouro : ", Logradouro)
            console.log("Bairro : ", Bairro)
            console.log("Localidade : ", Localidade)

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
            console.log("Titulo : ", Titulo)
            console.log("Bairro : ", Bairro)
            console.log("Localidade : ", Localidade)

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
            console.log("Titulo : ", Titulo)
            console.log("Localidade : ", Localidade)

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
            console.log("Titulo : ", Titulo)

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
            console.log("Descricao : ", Descricao)
            console.log("Logradouro : ", Logradouro)

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
            console.log("Descricao : ", Descricao)
            console.log("Logradouro : ", Logradouro)
            console.log("Bairro : ", Bairro)

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
            console.log("Descricao : ", Descricao)
            console.log("Logradouro : ", Logradouro)
            console.log("Bairro : ", Bairro)
            console.log("Localidade : ", Localidade)

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
            console.log("Descricao : ", Descricao)
            console.log("Logradouro : ", Logradouro)
            console.log("Localidade : ", Localidade)

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
            console.log("Descricao : ", Descricao)
            console.log("Bairro : ", Bairro)
            console.log("Localidade : ", Localidade)

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
            console.log("Descricao : ", Descricao)
            console.log("Localidade : ", Localidade)

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
            console.log("Descricao : ", Descricao)
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
            console.log("Logradouro : ", Logradouro)
            console.log("Bairro : ", Bairro)

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
            console.log("Logradouro : ", Logradouro)
            console.log("Bairro : ", Bairro)
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
            console.log("Logradouro : ", Logradouro)
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
            console.log("Bairro : ", Bairro)
            console.log("Localidade : ", Localidade)
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
            console.log("Bairro : ", Bairro)
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
            console.log("Localidade : ", Localidade)
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