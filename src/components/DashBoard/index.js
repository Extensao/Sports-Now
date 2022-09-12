import SideBarDesktop from "./SideBar/Desktop"
import SideBarMobile from "./SideBar/Mobile"
import {Flex,Box} from '@chakra-ui/react'

const SidebarContent = () =>{

    return(
        <>
           <SideBarMobile/>
           <SideBarDesktop/>
        </>
    )
}

export default SidebarContent;