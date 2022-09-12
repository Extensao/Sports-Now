import { Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { GlobalProvider } from '../../../../../../context/globalContext';
import IconMenu from './IconMenu'

const Menu = () => {

    const { 
        handlerMenu
      } = useContext(GlobalProvider);

  return (
    <>
        <Flex
         w={'30px'}
         h={'30px'}
         boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
         justify={'center'}
         align={'center'}
         onClick={handlerMenu}
         cursor={'pointer'}
         borderRadius={'50%'}
        >
         <IconMenu/>
        </Flex>
    </>
  )
}

export default Menu