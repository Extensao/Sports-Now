import { Box,Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { GlobalProvider } from '../../../../context/globalContext'
import NavBar from '../SideBar/Desktop/NavBar'
import SideBar from '../SideBar/Desktop'
import SideBarMobile from '../SideBar/Mobile'
import CardEvento from '../CardEvento'

const AcompanharEventoContent = () => {

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
            <CardEvento/>
         </Box>
        </Box>

        <Box
              display={{base:'block',md:'none'}}
        >  
          <SideBarMobile/>
          <Box
              w={'100%'}
              minH={'calc(100vh - 70px)'}
              p={'.5rem'}
              bg={'red'}
            >
                 <CardEvento/>
            </Box>
        </Box>
    </>
  )
}

export default AcompanharEventoContent