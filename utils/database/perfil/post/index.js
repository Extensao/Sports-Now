import axios from "axios";


const PostPerfil = (nome,sobreNome,email,telefone) =>{
    if (nome != "" && sobreNome != "" &&  email != "" && telefone != "") {
        axios.post("/api/postUser/",
        {
           Nome: nome,
           SobreNome: sobreNome,
           Email: email,
           Telefone: telefone
        })
        .then((res)=>{
          console.log(res)
          notify
        })
        .catch((err)=>{
           console.log(err)
        });
    }
}

export {PostPerfil};