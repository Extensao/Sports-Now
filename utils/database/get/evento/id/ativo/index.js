import axios from "axios";

const GetAllEventoAtivoId = (setDataEventoAtivoId, uId) =>{
    axios.get(`/api/get/evento/id/ativo/${uId}`)
    .then((res)=>{
        setDataEventoAtivoId(res.data)
    })
    .catch((err)=>{
       console.log(err)
    });
}

export {GetAllEventoAtivoId};