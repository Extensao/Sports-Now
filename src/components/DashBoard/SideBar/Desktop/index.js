import {Flex,Box} from '@chakra-ui/react'
import NavBar from './NavBar';
import SideBar from './SideBar';

const SideBarDesktop = () =>{

    return(
        <>
        <Flex
           display={{base:'none',md:'flex'}}
        >
        <SideBar/>
        <NavBar/>
            <Box
              w={'calc(100% - 250px)'}
              h={'calc(100vh - 50px)'}
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