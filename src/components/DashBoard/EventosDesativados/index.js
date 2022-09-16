import { Box, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import NavBar from '../SideBar/Desktop/NavBar'
import SideBarMobile from '../SideBar/Mobile'
import SideBar from '../SideBar/Desktop'
import { GlobalProvider } from '../../../../context/globalContext'

const EventoDesativadosContent = () => {
  
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
             Eventos Desativar 
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
              Área de eventos desativados para mobile
            </Box>
        </Box>
    </>
  )
}

export default EventoDesativadosContent