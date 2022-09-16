import React,{ useContext } from "react";
import { Link, MenuItem, MenuList, Text } from "@chakra-ui/react";
import {RiDashboardFill} from 'react-icons/ri';
import {GoSignOut,GoSignIn} from 'react-icons/go';
import { GlobalProvider } from "../../../../../../context/globalContext";
import { handlerConnectGoogle } from "../../../../../../utils/authentication/signIn";
import { handlerDesconectGoogle } from "../../../../../../utils/authentication/signOut";

const DropdownProfile = () =>{

     const {login} = useContext(GlobalProvider);

return(
    <>
   <MenuList>
    {
        !login ? 
        <MenuItem
        onClick={handlerConnectGoogle}
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
        onClick={handlerDesconectGoogle}
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