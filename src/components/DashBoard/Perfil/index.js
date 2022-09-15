import { Box, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import NavBar from '../SideBar/Desktop/NavBar'
import SideBarMobile from '../SideBar/Mobile/SideBar'
import SideBar from '../SideBar/Desktop/SideBar'
import { GlobalProvider } from '../../../../context/globalContext'

const PerfilContent = () => {

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
             Perfil
         </Box>
        </Flex>
        </Flex>

        <Flex
              display={{base:'flex',md:'none'}}
              direction={'column'}
        >  
          <SideBarMobile/>
          <Box
            w={'calc(100% - 70px)'}
            p={'.5rem'}
            >
                Perfil
            </Box>
        </Flex>
    </>
  )
}

export default PerfilContent