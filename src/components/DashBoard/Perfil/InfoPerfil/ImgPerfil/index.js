import { Box, Flex } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { GlobalProvider } from '../../../../../../context/globalContext';

const ImgPerfil = () => {

    const {login} = useContext(GlobalProvider);

  return (
   <>
   <Flex
   justify={{base:'center',md:'start'}}
   >
   <Box
           w={'80px'}
           h={'80px'}
           borderRadius={'10px'}
           cursor={'pointer'}
           bgImage={`url('${login?.photoURL}')`}
           bgSize={'80px'}
           bgPosition={'center'}
           bgRepeat={'no-repeat'}
        ></Box>
   </Flex>     
   </>
  )
}

export default ImgPerfil