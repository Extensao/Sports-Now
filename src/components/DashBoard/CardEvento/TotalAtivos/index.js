import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react'
import { GlobalProvider } from '../../../../../context/globalContext';

const TotalEventoAtivos = () => {

  const {
    dataEventoAtivo,
    login
  } = useContext(GlobalProvider);

  return (
    <>
      <Flex
        bg={'blue'}
        p={'1rem'}
        boxShadow={'0 0 10px 0 rgba(0,0,0,.25)'}
        borderRadius={'10px'}
        justify={'center'}
        align={'center'}
      >
         <Box>
          <Text
           fontWeight={'bold'}
           fontSize={25}
            textAlign={'center'}
          >
            Total de Eventos Ativos
          </Text>
          <Box>
            <Text
             fontWeight={'bold'}
             fontSize={40}
              textAlign={'center'}
            >
              0
            </Text>
          </Box>
        </Box>
      </Flex>
    </>
  )
}

export default TotalEventoAtivos