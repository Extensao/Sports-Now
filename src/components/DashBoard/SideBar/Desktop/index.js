import {Flex,Box} from '@chakra-ui/react'
import { useContext } from 'react';
import { GlobalProvider } from '../../../../../context/globalContext';
import NavBar from './NavBar';
import SideBar from './SideBar';

const SideBarDesktop = () =>{

  const { 
    menu
  } = useContext(GlobalProvider);

    return(
        <>
        <Flex
           display={{base:'none',md:'flex'}}
        >
        <SideBar/>
        <NavBar/>
            <Box
              w={ menu ? 'calc(100% - 250px)':'calc(100% - 70px)'}
              h={'calc(100vh - 70px)'}
              mt={'auto'}
              p={'.5rem'}
            >
                BBB
            </Box>
        </Flex>
        </>
    )
}

export default SideBarDesktop;