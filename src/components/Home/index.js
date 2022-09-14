import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import NavBar from './NavBar/Desktop/NavBar'
import SideBarMobile from './NavBar/Mobile/NavBar'

const HomeContent = () => {
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
            w={'calc(100% - 70px)'}
            p={'.5rem'}
            >
              Home
            </Box>
        </Flex>
</>
  )
}

export default HomeContent