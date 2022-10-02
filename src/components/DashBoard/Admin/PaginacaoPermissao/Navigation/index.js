import { Box, Button, Flex } from '@chakra-ui/react';
import React, { useContext } from 'react'
import { GlobalProvider } from '../../../../../../context/globalContext';

const Navegation = () => {

  const { 
    pagesUsers,
    currentPageUser,
    setCurrentPageUser
  } = useContext(GlobalProvider);

  
  return (
    <>
      <Flex
        w={'100%'}
        direction={'row'}
        justify={'center'}
        align={'center'}
        mt={'1.5rem'}
        bg={'green'}
        borderRadius={'10px'}
        p={'1rem'}
      >
      {
        Array.from(Array(pagesUsers),
        (item,index)=>{
          return(
            <>
                 <Button
                   value={index}
                   bg={index == currentPageUser ? 'aqua' : 'black'}
                   color={'yellow'}
                   mx={'.5rem'}
                   onClick={(e)=>{
                    setCurrentPageUser(
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