import axios from "axios";

const GetAllEventoAtivo = (setDataEventoAtivo) =>{
    axios.get('/api/get/evento/all/ativo/')
    .then((res)=>{
        setDataEventoAtivo(res.data)
    })
    .catch((err)=>{
       console.log(err)
    });
}

export {GetAllEventoAtivo};