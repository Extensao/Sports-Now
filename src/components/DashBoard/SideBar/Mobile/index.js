import {Flex,Link,useDisclosure} from '@chakra-ui/react'
import DarkMode from '../../../DarkMode';
import NavLogo from '../../../NavLogo';
import DrawerSideBar from './DrawerSideBar';
import MenuNav from './Menu';

const SideBarMobile = () =>{

    const { isOpen, onOpen, onClose } = useDisclosure();

    return(
        <>
            <Flex
            h={'70px'}
            w={'100%'}
            bg={'#ccc'}
            borderBottom={'2px solid #000'}
            justify={'space-between'}
            align={'center'}
            isOpen={isOpen}
            px={'1rem'}
            >
                <MenuNav isOpen={isOpen} onOpen={onOpen}/>
                <Link
            href={'/dashboard'}
            >
              <NavLogo/>
            </Link>
                <DarkMode/>
            </Flex>
        <DrawerSideBar isOpen={isOpen} onClose={onClose}/>
        </>
    )
}

export default SideBarMobile;