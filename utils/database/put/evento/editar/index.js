import axios from "axios";
import { getDownloadURL, ref, uploadBytesResumable } from "firebase/storage";
import { storage } from "../../../../../config/firebase";

const EditarEvento = (titulo, descricao, logradouro, bairro, localidade, img, idEvento, activeImg) => {

    if(activeImg == true){

        const storageRef = ref(storage, 'images/' + img?.name);
        const uploadTask = uploadBytesResumable(storageRef, img);
    
        getDownloadURL(uploadTask.snapshot.ref).then((downloadURL) => {
            axios.put("/api/put/evento/editar/",
                {
                    Titulo: titulo,
                    Descricao: descricao,
                    Logradouro: logradouro,
                    Bairro: bairro,
                    Localidade: localidade,
                    Img: downloadURL,
                    IdEvento: idEvento,
                    ActiveImg : activeImg
                })
                .then((res) => {
                    console.log("Deu tudo certo")
                })
                .catch((err) => {
                    console.log(err)
                });
        })
        console.log("Executou o storage")
    }else{
        axios.put("/api/put/evento/editar/",
        {
            Titulo: titulo,
            Descricao: descricao,
            Logradouro: logradouro,
            Bairro: bairro,
            Localidade: localidade,
            IdEvento: idEvento,
            ActiveImg : activeImg
        })
        .then((res) => {
            console.log("Deu tudo certo");
        })
        .catch((err) => {
            console.log(err)
        });
        console.log("Não executou o storage");

    }
}

export { EditarEvento };