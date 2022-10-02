import axios from "axios";

const DesativarEvento = (id) => {

    axios.put("/api/put/evento/desativar",
    {
        IdEvento: id,
    })
    .then((res)=>{
        console.log("Deu tudo certo")
    })
    .catch((err)=>{
       console.log(err)
    });

}

export {DesativarEvento}