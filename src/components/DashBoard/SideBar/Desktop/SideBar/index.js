import {Box, Flex} from '@chakra-ui/react'
import NavLogo from '../../NavLogo';

const SideBar = () =>{

    return(
        <>
        <Flex
          minH={'100vh'}
          w={'100%'}
          maxW={'250px'}
          bg={'#ccc'}
          px={'10px'}
          direction={'column'}
          >
            <Box
            
            >
               <NavLogo/>
            </Box>
        </Flex>
        </>
    )
}

export default SideBar;
