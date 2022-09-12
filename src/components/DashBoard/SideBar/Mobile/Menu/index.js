import {Flex} from '@chakra-ui/react'

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
                X
            </Flex>
        </>
    )
}

export default MenuNav;