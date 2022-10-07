import axios from "axios";


const UpdateUser = (nickName,telefone,uId) =>{
    axios.put("/api/put/user/updateUser/",
    {
        NickName: nickName,
        Telefone: telefone,
        UiD: uId
    })
    .then((res)=>{
        console.log("Deu tudo certo")
    })
    .catch((err)=>{
       console.log(err)
    });
}

export {UpdateUser}