import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerBody,
    DrawerCloseButton
} from '@chakra-ui/react';
import Profile from '../../../../Profile';
import NavLink from '../../../NavLink';


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
            <Profile isOpen={props.isOpen}/>
            <NavLink isOpen={props.isOpen}/>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
        </>
    )
}

export default DrawerSideBar;