import axios from "axios";

const AtivoUser = (email) =>{
    axios.put("/api/put/putStatusAtivoUser/",
    {
        Email: email
    })
    .then((res)=>{
        console.log(res)
    })
    .catch((err)=>{
       console.log(err)
    });
}

export {AtivoUser};