 import { Box, Flex } from '@chakra-ui/react'
import React from 'react'
import ImgPerfil from './ImgPerfil'
import TextPerfil from './TextPerfil'
 
 const InfoPerfil = () => {
   return (
     <>
        <Box
         w={'100%'}
         p={'1rem'}
         boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
         borderRadius={'5px'}
         mt={'.5rem'}
        >
          <Flex
          justify={'space-between'}
          px={'1rem'}
          direction={{base:'column',md:'row'}}
          align={'center'}
          >
            <ImgPerfil/>
            <TextPerfil/>
          </Flex>   
        </Box>
     </>
   )
 }
 
 export default InfoPerfil