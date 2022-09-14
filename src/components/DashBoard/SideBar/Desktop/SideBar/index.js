import {Box, Flex, Link} from '@chakra-ui/react'
import { useContext } from 'react';
import { GlobalProvider } from '../../../../../../context/globalContext';
import NavLink from '../../NavLink';
import NavLogo from '../../../../NavLogo';


const SideBar = () =>{

    const { 
        menu
      } = useContext(GlobalProvider);

    return(
        <>
        <Flex
          h={'100vh'}
          w={'100%'}
          overflowY={'auto'}
          overflowX={'hidden'}
          maxW={menu ? '250px':'70px'}
          bg={'#ccc'}
          pb={'1rem'}
          position={'fixed'}
          direction={'column'}
          className={'sidebar'}
          >
            <Flex
             boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
             h={'70px'}
             w={'100%'}
             py={'2rem'}
             justify={'center'}
             align={'center'}
            >
            <Link
            href={'/dashboard'}
            >
              <NavLogo/>
            </Link>
            </Flex>
            <Box
               py={'1rem'}
               px={'1rem'}
               w={'100%'}
            >
              <NavLink/>
            </Box>
        </Flex>
        </>
    )
}

export default SideBar;
