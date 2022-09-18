import axios from "axios";

const GetEvento = (setDataEventos) =>{
    axios.get("/api/get/getEvento/")
    .then((res)=>{
        setDataEventos(res.data)
    })
    .catch((err)=>{
       console.log(err)
    });
}

export {GetEvento};