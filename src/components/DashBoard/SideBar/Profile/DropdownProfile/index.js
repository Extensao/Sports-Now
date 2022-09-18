import React, { useContext } from "react";
import { Link, MenuItem, MenuList, Text } from "@chakra-ui/react";
import {BsFillPersonFill} from 'react-icons/bs';
import { GlobalProvider } from "../../../../../../context/globalContext";
import {RiAdminFill} from 'react-icons/ri';

const DropdownProfile = () =>{

    const {
            login,
            dataUsers
          } = useContext(GlobalProvider);

    return(
        <>
       <MenuList>
       {
        login.email == 'leandro.lima@faculdadesapiens.edu.br' &&
        <Link
                href="/dashboard/admin"
                _hover={{
                    layerStyle:'none'
                }}
            >
           <MenuItem
            >
               <RiAdminFill/> <Text ml={'.5rem'}>Admin</Text>
            </MenuItem>
        </Link>
      }
       <Link
                href="/dashboard/perfil"
                _hover={{
                    layerStyle:'none'
                }}
            >
           <MenuItem
            >
               <BsFillPersonFill/> <Text ml={'.5rem'}>Perfil</Text>
            </MenuItem>
        </Link>
      </MenuList>
        </>
    )
}

export default DropdownProfile;