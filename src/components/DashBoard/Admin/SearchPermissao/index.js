import { Box, Input, InputGroup, InputRightElement } from '@chakra-ui/react'
import React from 'react'
import {MdOutlineSearch} from 'react-icons/md'

const SearchPermissao = () => {
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
      />
      <InputRightElement
      cursor={'pointer'}
      >
      <MdOutlineSearch/>
      </InputRightElement>
    </InputGroup>
    </Box>
    </>
  )
}

export default SearchPermissao