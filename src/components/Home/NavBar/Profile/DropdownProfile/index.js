import React,{ useContext, useEffect } from "react";
import { Link, MenuItem, MenuList, Text } from "@chakra-ui/react";
import {RiDashboardFill} from 'react-icons/ri';
import {GoSignOut,GoSignIn} from 'react-icons/go';
import { GlobalProvider } from "../../../../../../context/globalContext";
import { handlerConnectGoogle } from "../../../../../../utils/authentication/signIn";
import { handlerDesconectGoogle } from "../../../../../../utils/authentication/signOut";
import { DesativarLoginUser } from "../../../../../../utils/database/put/statusLoginUser/desativarLoginUser";
import { AtivarLoginUser } from "../../../../../../utils/database/put/statusLoginUser/ativarLoginUser";

const DropdownProfile = () =>{

     const {
        login,
        dataUsers
    } = useContext(GlobalProvider);

    useEffect(()=>{
        setTimeout(()=>{
            if(login != null && dataUsers.length > 1) AtivarLoginUser(login.email)
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
            DesativarLoginUser(login.email);
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