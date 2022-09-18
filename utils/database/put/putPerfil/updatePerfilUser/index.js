import axios from "axios";

const UpdatePerfilUser = (nickName,telefone,email) =>{

    console.log(nickName);
    console.log(telefone);
    console.log(email);

    axios.put("/api/put/putFormUser/",
    {
        NickName: nickName,
        Telefone: telefone,
        Email: email
    })
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
       console.log(err)
    });
}

export {UpdatePerfilUser};