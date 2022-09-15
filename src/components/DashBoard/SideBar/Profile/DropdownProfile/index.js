import React from "react";
import { Link, MenuItem, MenuList, Text } from "@chakra-ui/react";
import {GoSignIn} from 'react-icons/go';

const DropdownProfile = () =>{

    return(
        <>
       <MenuList>
       <Link
                href="/dashboard/perfil"
                _hover={{
                    layerStyle:'none'
                }}
            >
           <MenuItem
            >
               <GoSignIn/> <Text ml={'.5rem'}>Perfil</Text>
            </MenuItem>
        </Link>
      </MenuList>
        </>
    )
}

export default DropdownProfile;