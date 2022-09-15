import { Flex} from '@chakra-ui/react'
import DarkMode from '../../../../DarkMode'
import Profile from '../../Profile';
import Menu from '../Menu';

const NavBar = () =>{


    return(
        <>
            <Flex
            w={'100%'}
            h={'70px'}
            boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
            justify={'space-between'}
            align={'center'}
            px={'1rem'}
            className={'navBar'}
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
