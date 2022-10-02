import { Box, Button, Flex } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { GlobalProvider } from '../../../../../../../context/globalContext';

const Navegation = () => {

  const { 
    pagesEventos,
    currentPageEvento,
    setCurrentPageEvento
  } = useContext(GlobalProvider);

  return (
    <>
      <Flex
        w={'100%'}
        mt={'2rem'}
        direction={'row'}
        justify={'center'}
        align={'center'}
        bg={'green'}
        borderRadius={'10px'}
        p={'1rem'}
      >
      {
        Array.from(Array(pagesEventos),
        (item,index)=>{
          return(
            <>
                 <Button
                   value={index}
                   bg={index == currentPageEvento ? 'aqua' : 'black'}
                   color={'yellow'}
                   mx={'.5rem'}
                   onClick={(e)=>{
                    setCurrentPageEvento(
                           Number(e.target.value)
                       )
                   }}
                   >
                       {index}
                   </Button>
            </>
          )
        })
      }
      </Flex>
    </>
  )
}

export default Navegation