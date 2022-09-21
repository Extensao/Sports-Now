import axios from "axios";

const FormPerfilUser = (nome,email,telefone,nickName,photoURL) =>{

    var dateCreate = new Date();

    var dia = dateCreate.getDate();
    var mes = dateCreate.getMonth();
    var ano = dateCreate.getFullYear();
    var hora = dateCreate.getHours();
    var minuto = dateCreate.getMinutes();

    axios.post("/api/post/user/criarUser/",
    {
        Nome: nome,
        Email: email,
        Telefone: telefone,
        NickName: nickName,
        PhotoURL: photoURL,
        Dia: dia,
        Mes: mes,
        Ano: ano,
        Hora: hora,
        Minuto: minuto
    })
    .then((res)=>{
        setDataEventos(res.data)
    })
    .catch((err)=>{
       console.log(err)
    });
}

export {FormPerfilUser};