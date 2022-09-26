import axios from "axios";

const FormEventoCriar = ( titulo, descricao, logradouro, bairro, localidade, uId) =>{

    var dateCreate = new Date();

    var dia = dateCreate.getDate();
    var mes = dateCreate.getMonth();
    var ano = dateCreate.getFullYear();
    var hora = dateCreate.getHours();
    var minuto = dateCreate.getMinutes();

        axios.post("/api/post/evento/criarEvento/",
        {
            Titulo: titulo,
            Descricao: descricao,
            Dia: dia,
            Mes: mes,
            Ano: ano,
            Hora: hora,
            Minuto: minuto,
            Logradouro: logradouro,
            Bairro: bairro,
            Localidade: localidade,
            UiD: uId
        })
        .then((res)=>{
           console.log("Sucesso das informações do evento")
        })
        .catch((err)=>{
           console.log(err)
        });
}

export {FormEventoCriar};