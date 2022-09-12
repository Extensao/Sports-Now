import {Flex,Box,useDisclosure} from '@chakra-ui/react'
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
            justify={'space-betewen'}
            align={'center'}
            isOpen={isOpen}
            px={'10px'}
            >
                <MenuNav isOpen={isOpen} onOpen={onOpen}/>
            </Flex>
            <Box
            w={'calc(100% - 70px)'}
            p={'.5rem'}
            >
                BBBB
            </Box>
        </Flex>
        <DrawerSideBar isOpen={isOpen} onClose={onClose}/>
        </>
    )
}

export default SideBarMobile;