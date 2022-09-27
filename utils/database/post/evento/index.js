import axios from "axios";
import { getDownloadURL, ref,  uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../../config/firebase";

const FormEventoCriar = async ( titulo, descricao, logradouro, bairro, localidade, uId, img ) =>{

    var dateCreate = new Date();

    var dia = dateCreate.getDate();
    var mes = dateCreate.getMonth();
    var ano = dateCreate.getFullYear();
    var hora = dateCreate.getHours();
    var minuto = dateCreate.getMinutes();

    const storageRef = ref(storage, 'images/' + img?.name);
    const uploadTask = uploadBytesResumable(storageRef, img);

            getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
                axios.post("/api/post/evento/criarEvento/",
                {
                    Titulo: titulo,
                    Descricao: descricao,
                    Dia: dia,
                    Mes: mes,
                    Ano: ano,
                    Hora: hora,
                    Minuto: minuto,
                    Logradouro: logradouro,
                    Bairro: bairro,
                    Localidade: localidade,
                    UiD: uId,
                    UrlImg: downloadURL
                })
            });
}

export {FormEventoCriar};