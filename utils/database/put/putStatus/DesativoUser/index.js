import axios from "axios";

const DesativoUser = (email) =>{
    axios.put("/api/put/putStatusDesativoUser/",
    {
        Email: email
    })
    .then((res)=>{
        setDataUsers(res.data)
    })
    .catch((err)=>{
       console.log(err)
    });
}

export {DesativoUser};