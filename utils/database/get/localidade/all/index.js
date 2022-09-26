import axios from "axios";

const GetAllLocalidade = (setDataUsers) =>{
    axios.get("/api/get/localidade/all")
    .then((res)=>{
        setDataUsers(res.data)
    })
    .catch((err)=>{
       console.log(err)
    });
}

export {GetAllLocalidade};