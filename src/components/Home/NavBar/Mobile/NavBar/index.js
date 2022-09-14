import { Flex, Link, useDisclosure } from "@chakra-ui/react";
import DarkMode from "../../../../DarkMode";
import MenuNav from "../../../../DashBoard/SideBar/Mobile/Menu";
import NavLogo from "../../../../NavLogo";
import DrawerSideBar from "../DrawerSideBar";

const SideBarMobile = () =>{

    const { isOpen, onOpen, onClose } = useDisclosure();

    return(
        <>
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
                <Link
            href={'/'}
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