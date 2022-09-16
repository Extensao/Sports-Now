import React, { useContext } from 'react'
import { Box, DarkMode, Flex, useDisclosure } from '@chakra-ui/react'
import NavBar from '../SideBar/Desktop/NavBar'
import SideBarMobile from '../SideBar/Mobile'
import SideBar from '../SideBar/Desktop'
import { GlobalProvider } from '../../../../context/globalContext'

const CriarEventoContent = () => {
  
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
          h={'calc(100vh - 70px)'}
          overflowY={'auto'}
          w={menu ? 'calc(100% - 250px)' : 'calc(100% - 70px)'}
          bg={'red'}
          ml={'auto'}
          >
            Criar Evento
          </Box>
       </Box>
        
        <Box
              display={{base:'block',md:'none'}}
        >  
          <SideBarMobile/>
          <Box
            w={'100%'}
            h={'calc(100vh - 70px)'}
            overflowY={'auto'}
            p={'.5rem'}
            bg={'red'}
            >
              Área de criar evento para mobile
            </Box>
        </Box> 
    </>
  )
}

export default CriarEventoContent