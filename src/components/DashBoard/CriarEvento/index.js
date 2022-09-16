import React, { useContext } from 'react'
import { Box, DarkMode, Flex, useDisclosure } from '@chakra-ui/react'
import NavBar from '../SideBar/Desktop/NavBar'
import SideBarMobile from '../SideBar/Mobile/SideBar'
import SideBar from '../SideBar/Desktop/SideBar'
import { GlobalProvider } from '../../../../context/globalContext'

const CriarEventoContent = () => {
  
  const { 
    menu
  } = useContext(GlobalProvider);

  return (
    <>
<Flex
           display={{base:'none',md:'flex'}}
        >     
         <SideBar/>
       <Flex
        w={ menu ? 'calc(100% - 250px)':'calc(100% - 70px)'}
        ml={'auto'}
        direction={'column'}
        >

          <NavBar/>
         <Box
         p={'1rem'}
         >
            Criar Evento
         </Box>
        </Flex>
        </Flex>

        <Flex
              display={{base:'flex',md:'none'}}
              direction={'column'}
        >  
          <SideBarMobile/>
          <Box
            w={'100%'}
            p={'.5rem'}
            >
              Criar Evento
            </Box>
        </Flex>
    </>
  )
}

export default CriarEventoContent