import { Box, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React, { useContext } from 'react'
import {MdOutlineSearch} from 'react-icons/md'
import { GlobalProvider } from '../../../../../context/globalContext';

const SearchPermissao = () => {

  const {
    onChangeSearch
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
      placeholder='Enter amount' 
      bg={'#fff'}
      onChange={(e)=>{onChangeSearch(e)}}
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

export default SearchPermissao