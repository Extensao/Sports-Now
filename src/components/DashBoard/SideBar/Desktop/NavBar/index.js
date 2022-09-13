import { Box, Flex} from '@chakra-ui/react'
import { useContext } from 'react';
import { GlobalProvider } from '../../../../../../context/globalContext';
import DarkMode from '../../DarkMode/'
import Profile from '../../Profile';
import Menu from '../Menu';

const NavBar = () =>{

    const { 
        menu
      } = useContext(GlobalProvider);

    return(
        <>
            <Flex
            w={menu ? 'calc(100% - 250px)':'calc(100% - 70px)'}
            h={'70px'}
            boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
            position={'absolute'}
            top={0}
            justify={'space-between'}
            align={'center'}
            right={0}
            px={'1rem'}
            >
                <Menu/>
                <Flex>
                 <DarkMode/>
                 <Profile/>
                </Flex>
            </Flex>
        </>
    )
}

export default NavBar;
