import {Flex} from '@chakra-ui/react'
import {GiHamburgerMenu} from 'react-icons/gi'

const MenuNav = (props) =>{


    return(
        <>
            <Flex
            onClick={props.onOpen}
            display={props.isOpen ? 'flex' : {base:'flex',md:'none'}}
            justify={'center'}
            align={'center'}
            w={'30px'}
            h={'30px'}
            boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
            borderRadius={'50%'}
            cursor={'pointer'}
            >
                <GiHamburgerMenu/>
            </Flex>
        </>
    )
}

export default MenuNav;