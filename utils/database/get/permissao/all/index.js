import axios from "axios";

const GetAllPermissao = (setDataPermissoes) =>{
    axios.get("/api/get/permisso/all/")
    .then((res)=>{
        setDataPermissoes(res.data)
    })
    .catch((err)=>{
       console.log(err)
    });
}

export {GetAllPermissao};