import axios from "axios";

const FormPerfilUser = (nome,email,telefone,nickName,photoURL) =>{

    console.log(photoURL)
    axios.post("/api/post/postFormPerfilUser/",
    {
        Nome: nome,
        Email: email,
        Telefone: telefone,
        NickName: nickName,
        PhotoURL: photoURL
    })
    .then((res)=>{
        setDataEventos(res.data)
    })
    .catch((err)=>{
       console.log(err)
    });
}

export {FormPerfilUser};