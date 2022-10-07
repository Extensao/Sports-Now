import { signOut } from "firebase/auth"
import { auth } from "../../../config/firebase"

const handlerDesconectGoogle = async() =>{
  await signOut(auth)
  .then(() =>{
    console.log("Sucesso na desconectividade do provider do google");
    setTimeout(()=>{
        window.location.href = "/";
    },1500)
  })
  .catch(err =>{
    console.log("Não foi possível se desconectar ao provider do google : ",err)
  })
}

export { handlerDesconectGoogle }