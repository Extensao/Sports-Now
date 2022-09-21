import axios from "axios";

const AtivarLoginUser = (email) =>{
    axios.put("/api/put/statusUser/ativarUser/",
    {
        Email: email
    })
    .then((res)=>{
        console.log("Deu tudo certo")
    })
    .catch((err)=>{
       console.log(err)
    });
}

export {AtivarLoginUser};