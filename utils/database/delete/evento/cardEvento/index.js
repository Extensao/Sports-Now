import axios from 'axios'

const ExcluirEvento = (id) => {
    axios.put("/api/delete/evento/cardEvento/",
    {
        IdEvento: id
    })
    .then((res)=>{
        console.log("Deu tudo certo")
    })
    .catch((err)=>{
       console.log(err)
    });
}

export {ExcluirEvento}