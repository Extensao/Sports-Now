import axios from "axios";


const UpdateUser = (NickName,Telefone,UiD) =>{
    axios.put("/api/put/user/updateUser/",
    {
        NickName: NickName,
        Telefone: Telefone,
        UiD: UiD
    })
    .then((res)=>{
        console.log("Deu tudo certo")
    })
    .catch((err)=>{
       console.log(err)
    });
}

export {UpdateUser}