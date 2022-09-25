import axios from "axios";

const FormEventoCriar = (titulo, descricao, uId) => {

    var dateCreate = new Date();

    var dia = dateCreate.getDate();
    var mes = dateCreate.getMonth();
    var ano = dateCreate.getFullYear();
    var hora = dateCreate.getHours();
    var minuto = dateCreate.getMinutes();

    axios.post("/api/post/eventos/criarEvento/",
        {
            Titulo: titulo,
            Descricao: descricao,
            IdUser: uId,
            Dia: dia,
            Mes: mes,
            Ano: ano,
            Hora: hora,
            Minuto: minuto
            //CriacaoDataEvento: date
        })
        .then((res) => {
            console.log('Criada com sucesso!')
        })
        .catch((err) => {
            console.log(err)
        });
}
export { FormEventoCriar };