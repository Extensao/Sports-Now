import axios from "axios";

const GetAllEventoDesativoId = (setDataEventoDesativadoId) =>{
    axios.get('/api/get/evento/id/desativo/')
    .then((res)=>{
        setDataEventoDesativadoId(res.data);
    })
    .catch((err)=>{
       console.log(err)
    });
}

export {GetAllEventoDesativoId};