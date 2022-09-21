import { Box, Flex } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { GlobalProvider } from '../../../../../../context/globalContext';

const Navegation = () => {

  const { 
    pagesUsers
  } = useContext(GlobalProvider);

  return (
    <>
      {
        Array.from(Array(pagesUsers),(item,index)=>{
          return(
            <>
                <Flex
                 key={index}
                 mt={'2rem'}
                 bg={'#ccc'}
                 p={'.25rem'}
                 py={'.5rem'}
                 borderRadius={'5px'}
                 justify={index.length < 1 ?'space-between' :  'center'}
                >
                  <Flex
                  bg={'#000'}
                  mx={'1rem'}
                  color={'#fff'}
                  w={'40px'}
                  h={'40px'}
                  justify={'center'}
                  align={'center'}
                  borderRadius={'40px'}
                  >
                     {index}
                  </Flex>
                </Flex>
            </>
          )
        })
      }
    </>
  )
}

export default Navegation