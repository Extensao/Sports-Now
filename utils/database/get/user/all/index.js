import axios from "axios";

const GetAllUser = (setDataUsers) =>{
    axios.get("/api/get/user/all")
    .then((res)=>{
        setDataUsers(res.data)
    })
    .catch((err)=>{
       console.log(err)
    });
}

export {GetAllUser};