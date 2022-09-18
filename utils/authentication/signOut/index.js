import { signOut } from "firebase/auth"
import { auth } from "../../../config/firebase"
import DesativoUser from '../../database/put/putStatus/DesativoUser'

const handlerDesconectGoogle = async() =>{
  await signOut(auth)
  .then(() =>{
    console.log("Sucesso na desconectividade do provider do google");
  })
  .catch(err =>{
    console.log("Não foi possível se desconectar ao provider do google : ",err)
  })
}

export { handlerDesconectGoogle }