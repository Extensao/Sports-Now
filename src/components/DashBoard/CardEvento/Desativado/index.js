import { Box, Flex, Spinner, Text } from '@chakra-ui/react'
import React, { useContext, useEffect, useRef, useState } from 'react'
import { GlobalProvider } from '../../../../../context/globalContext'
import PaginacaoEvento from './PaginacaoEvento'
import SearchEvento from './SearchEvento'

const CardEventoDesativado = () => {

  const {
    currenItenDesativadoEventos
  } = useContext(GlobalProvider);

  return (
    <>
      {/* {
        currenItenDesativadoEventos != "" ?
          <> */}
            {/* <SearchEvento /> */}
            <PaginacaoEvento />
          {/* </>
          :
          <>
            <Flex
              w={'100%'}
              minH={'calc(100vh - 70px)'}
              justify={'center'}
              align={'center'}
            >
              <Spinner
                thickness='4px'
                speed='0.65s'
                emptyColor='gray.200'
                color='blue.500'
                size='xl'
              />
            </Flex>
          </>
      } */}

    </>
  )
}

export default CardEventoDesativado