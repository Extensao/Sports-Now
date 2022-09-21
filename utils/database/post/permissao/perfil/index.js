import axios from "axios";

const CriarPermissao = (email) =>{

    var dateCreate = new Date();

    var dia = dateCreate.getDate();
    var mes = dateCreate.getMonth();
    var ano = dateCreate.getFullYear();
    var hora = dateCreate.getHours();
    var minuto = dateCreate.getMinutes();

    axios.post("/api/post/permissao/criarPermissaoUser/",
    {
        Email: email,
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

export {CriarPermissao};