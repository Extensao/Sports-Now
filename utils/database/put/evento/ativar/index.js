import axios from "axios";

const AtivarEvento = (id) => {

    axios.put("/api/put/evento/ativar",
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

export {AtivarEvento}