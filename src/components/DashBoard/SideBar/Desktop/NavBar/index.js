import { Flex} from '@chakra-ui/react'
import { useContext } from 'react';
import { GlobalProvider } from '../../../../../../context/globalContext';
import DarkMode from '../../../../DarkMode'
import Profile from '../../Profile';
import Menu from '../Menu';

const NavBar = () =>{

    const { 
        menu
      } = useContext(GlobalProvider);

    return(
        <>
            <Flex
            w={menu ? 'calc(100% - 250px)' : 'calc(100% - 70px)'}
            h={'70px'}
            borderBottom={'2px solid #000'}
            justify={'space-between'}
            align={'center'}
            px={'1rem'}
            bg={'#fff'}
            ml={'auto'}
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
