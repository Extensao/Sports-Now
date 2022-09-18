import { Box } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { GlobalProvider } from '../../../../context/globalContext';
import SideBar from '../SideBar/Desktop';
import NavBar from '../SideBar/Desktop/NavBar';
import SideBarMobile from '../SideBar/Mobile';
import SearchPermissao from './SearchPermissao';

const AdminContent = () => {

    const { 
        menu
      } = useContext(GlobalProvider);

  return (
    <>
          <Box
           display={{base:'none',md:'block'}}
        >     
         <SideBar/>
         <NavBar/>
         <Box
            p={'1rem'}
            minH={'calc(100vh - 70px)'}
            w={menu ? 'calc(100% - 250px)' : 'calc(100% - 70px)'}
            bg={'red'}
            ml={'auto'}
         >
            <SearchPermissao/>
         </Box>
        </Box>

        <Box
              display={{base:'flex',md:'none'}}
        >  
          <SideBarMobile/>
          <Box
              w={'100%'}
              minH={'calc(100vh - 70px)'}
              p={'.5rem'}
              bg={'red'}
            >
               <SearchPermissao/>
            </Box>
        </Box>
    </>
  )
}

export default AdminContent