import axios from "axios";

const GetUser = (setDataUsers) =>{
    axios.get("/api/get/getUser")
    .then((res)=>{
        setDataUsers(res.data)
    })
    .catch((err)=>{
       console.log(err)
    });
}

export {GetUser};