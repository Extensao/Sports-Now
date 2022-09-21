import axios from "axios";

const GetAllEvento = (setDataEventos) =>{
    axios.get("/api/get/evento/all/")
    .then((res)=>{
        setDataEventos(res.data)
    })
    .catch((err)=>{
       console.log(err)
    });
}

export {GetAllEvento};