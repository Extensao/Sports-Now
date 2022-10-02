import { Box, Flex, SimpleGrid, Spinner, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { GlobalProvider } from '../../../../../context/globalContext';
import Navegation from './Navigation';

const PaginacaoPermissao = () => {

  const { 
    currenItenUsers
  } = useContext(GlobalProvider);

  return (
    <>
    {
    currenItenUsers == "" ?
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
    :
    <>
      <Box
           minH={'calc(80vh + 1rem)'}
           mt={'1.5rem'}
        >
      <SimpleGrid
      columns={{base:1,md:2,lg:3,xl:4}}
      gap={'20px'}
      px={{base:'.5rem',sm:'2rem',md:'0'}}
      w={'100%'}
      >
        {
            currenItenUsers?.map(d =>{
              return(
                <>
                    <Box
                    key={d.id_user}
                    w={'100%'}
                    maxW={{base:'100%',md:'310px',lg:'270px'}}
                    boxShadow={'0 0 10px 0 rgba(0,0,0,.25)'}
                    mx={'auto'}
                    borderRadius={'8px'}
                    pt={'2rem'}
                    pb={'1rem'}
                    px={'1rem'}
                    >
                        <Box>
                        <Box
                        mx={'auto'}
                        h={{base:'105px',md:'120px',lg:'130px'}}
                        w={{base:'105px',md:'120px',lg:'130px'}}
                        bgSize={'cover'}
                        borderRadius={'50%'}
                        bgRepeat={'no-repeat'}
                        bgImage={`url('${d.img_user}')`}
                        bgPosition={'center'}
                        >
                        </Box>
                        </Box>
                        <Box>
                        <Text>
                            Nome
                        </Text>
                        <Box>
                            <Text>
                                {d.nome}
                            </Text>
                        </Box>
                        </Box>
                        <Box>
                        <Text>
                            Email
                        </Text>
                        <Box>
                            <Text>
                                {d.email}
                            </Text>
                        </Box>
                        </Box>
                    </Box>
                </>
              )
            })
        }
      </SimpleGrid>
      </Box>
      <Navegation/>
    </>
  }
    </>
  )
}

export default PaginacaoPermissao