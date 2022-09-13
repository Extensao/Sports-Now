import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerBody,
    DrawerCloseButton
} from '@chakra-ui/react';
import NavLink from '../../NavLink';

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
           >
          <DrawerCloseButton />
          <DrawerBody>
          <NavLink/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
        </>
    )
}

export default DrawerSideBar;