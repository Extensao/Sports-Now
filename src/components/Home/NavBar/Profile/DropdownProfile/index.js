import React,{ useContext, useEffect } from "react";
import { Link, MenuItem, MenuList, Text } from "@chakra-ui/react";
import {RiDashboardFill} from 'react-icons/ri';
import {GoSignOut,GoSignIn} from 'react-icons/go';
import { GlobalProvider } from "../../../../../../context/globalContext";
import { handlerConnectGoogle } from "../../../../../../utils/authentication/signIn";
import { handlerDesconectGoogle } from "../../../../../../utils/authentication/signOut";
import { DesativoUser } from "../../../../../../utils/database/put/putStatus/DesativoUser";
import { AtivoUser } from "../../../../../../utils/database/put/putStatus/AtivoUser";

const DropdownProfile = () =>{

     const {
        login
    } = useContext(GlobalProvider);

    useEffect(()=>{
        setTimeout(()=>{
            if(login != null) AtivoUser(login.email)
        },1000)
    })

return(
    <>
   <MenuList>
    {
        !login ? 
        <MenuItem
        onClick={()=>{
            handlerConnectGoogle()
           }
        }
        >
           <GoSignIn/> <Text ml={'.5rem'}>Entrar</Text>
        </MenuItem>
        :
        <>
        <Link
            href="/dashboard"
            _hover={{
                layerStyle:'none'
            }}
        >
        <MenuItem
        >
         <RiDashboardFill/><Text ml={'.5rem'}>DashBoard</Text>
        </MenuItem>
        </Link>
        <MenuItem
        onClick={()=>{
             DesativoUser(login.email);
              setTimeout(()=>{
                handlerDesconectGoogle();
              },1000)
            }
        }
        >
         <GoSignOut/> <Text ml={'.5rem'}>Sair</Text>
        </MenuItem>
        </>
    }
  </MenuList>
        </>
    )
}

export default DropdownProfile;