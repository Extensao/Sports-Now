import {Flex,Box,useDisclosure} from '@chakra-ui/react'
import DarkMode from '../DarkMode';
import NavLogo from '../NavLogo';
import DrawerSideBar from './DrawerSideBar';
import MenuNav from './Menu';

const SideBarMobile = () =>{

    const { isOpen, onOpen, onClose } = useDisclosure();

    return(
        <>
        <Flex
          display={{base:'flex',md:'none'}}
          direction={'column'}
        >
            <Flex
            h={'70px'}
            w={'100%'}
            bg={'#ccc'}
            justify={'space-between'}
            align={'center'}
            isOpen={isOpen}
            px={'1rem'}
            >
                <MenuNav isOpen={isOpen} onOpen={onOpen}/>
                <NavLogo/>
                <DarkMode/>
            </Flex>
            <Box
            w={'calc(100% - 70px)'}
            p={'.5rem'}
            >
                BBBB
            </Box>
        <DrawerSideBar isOpen={isOpen} onClose={onClose}/>
        </Flex>
        </>
    )
}

export default SideBarMobile;