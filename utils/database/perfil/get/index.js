import axios from "axios";

const GetPerfil = (setData) =>{
    axios.get("/api/getAll/")
    .then((res)=>{
        setData(res.data)
    })
    .catch((err)=>{
       console.log(err)
    });
}

export {GetPerfil};