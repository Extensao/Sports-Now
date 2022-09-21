import axios from "axios";

const InclusaoIdUser = (uId,email) =>{

    axios.put("/api/put/permissao/inclusaoIdUser/",
    {
        UiD: uId,
        Email : email
    })
    .then((res)=>{
        // console.log("Deu tudo certo",res)
    })
    .catch((err)=>{
       console.log(err)
    });
}

export {InclusaoIdUser};