import { Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { GlobalProvider } from '../../../context/globalContext';
import IconScroolTopPage from './IconScroolTopPage'

const ScroolTopPage = () => {

    const {
        handlerScrollTop
    } = useContext(GlobalProvider);

  return (
   <>
     <Flex
     w={'30px'}
     h={'30px'}
     borderRadius={'50%'}
     bg={'#fff'}
     boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
     onClick={handlerScrollTop}
     position={'fixed'}
     bottom={'1rem'}
     right={'2rem'}
     justify={'center'}
     align={'center'}
     cursor={'pointer'}
     >
        <IconScroolTopPage/>
     </Flex>
   </>
  )
}

export default ScroolTopPage