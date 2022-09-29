import { Box, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useContext } from 'react'
import {MdOutlineSearch} from 'react-icons/md'
import { GlobalProvider } from '../../../../../../context/globalContext';

const SearchEventoDesativado = () => {

  const {
    onChangeSearchEventoDesatiadoAll
  } = useContext(GlobalProvider);

  return (
    <>
    <Box
    w={'100%'}
    maxW={'1280px'}
    mx={'auto'}
    >
      <InputGroup>
      <Input 
      placeholder='Informe um titulo de evento de seu interesse :)' 
      bg={'#fff'}
      onChange={(e)=>{onChangeSearchEventoDesatiadoAll(e)}}
      />
      <InputRightElement
      cursor={'pointer'}
      zIndex={0}
      >
      <MdOutlineSearch/>
      </InputRightElement>
    </InputGroup>
    </Box>
    </>
  )
}

export default SearchEventoDesativado