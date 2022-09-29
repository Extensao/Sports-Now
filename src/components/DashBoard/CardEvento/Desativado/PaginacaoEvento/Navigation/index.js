import { Button, Flex } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { GlobalProvider } from '../../../../../../../context/globalContext';

const Navegation = () => {

  const { 
    pagesDesativadoEventos,
    currenItenDesativadoEventos,
    setCurrentPageDesativadoEvento
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
        Array.from(Array(pagesDesativadoEventos),
        (item,index)=>{
          return(
            <>
                 <Button
                   value={index}
                   bg={index == currenItenDesativadoEventos ? 'aqua' : 'black'}
                   color={'yellow'}
                   mx={'.5rem'}
                   onClick={(e)=>{
                    setCurrentPageDesativadoEvento(
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