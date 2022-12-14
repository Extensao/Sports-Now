import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerBody,
    DrawerCloseButton,
    Flex
} from '@chakra-ui/react';
import NavLink from '../../../NavLink';
import Profile from '../../Profile';


const DrawerSideBar = (props) =>{

    return(
        <>
        <Drawer
        isOpen={props.isOpen}
        placement='left'
        size={'full'}
        display={'flex'}
        direction={'column'}
        onClose={props.onClose}
      >
        <DrawerOverlay display={{base:'flex',md:'none'}}/>
        <DrawerContent 
           display={{base:'flex',md:'none'}}
           pt={'3rem'}
           pb={'2rem'}
           >
          <DrawerCloseButton />
          <DrawerBody>
            <Flex
            justify={'center'}
            direction={'column'}
            >
               <Profile isOpen={props.isOpen}/>
            </Flex>
            <NavLink isOpen={props.isOpen}/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
        </>
    )
}

export default DrawerSideBar;