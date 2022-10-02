import axios from "axios";

const GetAllEventoDesativo = (setDataEventoDesativado) =>{
    axios.get('/api/get/evento/all/desativo/')
    .then((res)=>{
        setDataEventoDesativado(res.data);
    })
    .catch((err)=>{
       console.log(err)
    });
}

export {GetAllEventoDesativo};