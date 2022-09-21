import axios from "axios";

const DesativarLoginUser = (email) =>{
    axios.put("/api/put/statusUser/desativarUser/",
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

export {DesativarLoginUser};