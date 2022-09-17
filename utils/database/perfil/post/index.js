import axios from "axios";


const PostPerfil = (nome,sobreNome,email,telefone) =>{
    if (nome != "" || sobreNome != "" ||  email != "" || telefone != "") {
        axios.post("/api/postUser/",
        {
           Nome: nome,
           SobreNome: sobreNome,
           Email: email,
           Telefone: telefone
        })
        .then((res)=>{
            alert("Sucesso no post !!",res)
        })
        .catch((err)=>{
           console.log(err)
        });
    } else {
        alert("informe os campos")
    }
}

export {PostPerfil};