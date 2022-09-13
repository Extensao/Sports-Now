import {Box, Flex} from '@chakra-ui/react'
import { useContext } from 'react';
import { GlobalProvider } from '../../../../../../context/globalContext';
import NavLink from '../../NavLink';
import NavLogo from '../../NavLogo';

const SideBar = () =>{

    const { 
        menu
      } = useContext(GlobalProvider);

    return(
        <>
        <Flex
          minH={'100vh'}
          w={'100%'}
          maxW={menu ? '250px':'70px'}
          bg={'#ccc'}
          direction={'column'}
          >
            <Flex
             boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
             h={'70px'}
             w={'100%'}
             justify={'center'}
             align={'center'}
            >
               <NavLogo/>
            </Flex>
            <NavLink/>
        </Flex>
        </>
    )
}

export default SideBar;
