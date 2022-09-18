import axios from "axios";

const UpdatePermissao = (idUser,tipoPermissao) =>{


    axios.put("/api/put/putFormUser/",
    {
        IdUser: idUser,
        TipoPermissao: tipoPermissao
    })
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
       console.log(err)
    });
}

export {UpdatePermissao};