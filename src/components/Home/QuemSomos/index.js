import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import NavBar from '../NavBar/Desktop/NavBar'
import SideBarMobile from '../NavBar/Mobile/NavBar'

const QuemSomosContent = () => {
  return (
    <>
           <Flex
           display={{base:'none',md:'flex'}}
           direction={'column'}
        >     
          <NavBar/>
          <Box
           p={'.5rem'}
          >
            Oi
          </Box>
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
              Quem somos
            </Box>
        </Flex>
    </>
  )
}

export default QuemSomosContent