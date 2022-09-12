import {
    Drawer,
    DrawerOverlay,
    DrawerContent,
    DrawerBody,
    DrawerCloseButton
} from '@chakra-ui/react';

const DrawerSideBar = (props) =>{

    return(
        <>
        <Drawer
        isOpen={props.isOpen}
        placement='left'
        size={'full'}
        onClose={props.onClose}
      >
        <DrawerOverlay />
        <DrawerContent>
          <DrawerCloseButton />
          <DrawerBody>
           
          </DrawerBody>
        </DrawerContent>
      </Drawer>
        </>
    )
}

export default DrawerSideBar;