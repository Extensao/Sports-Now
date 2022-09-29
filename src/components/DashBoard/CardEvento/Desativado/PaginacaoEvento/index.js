import { Box, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { GlobalProvider } from '../../../../../../context/globalContext';
import Navegation from './Navigation';

const PaginacaoEventoDesativado = () => {

  const {
    currenItenDesativadoEventos,
    login
  } = useContext(GlobalProvider);

  return (
    <>
      <SimpleGrid
        columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
        gap={'20px'}
        mt={'2rem'}
        px={{ base: '.5rem', sm: '2rem', md: '0' }}
        w={'100%'}
      >
        {
          currenItenDesativadoEventos?.map(e => {
            if(e.email == login?.email)
            return(
              <>
                <Box
                  key={e.id_evento}
                  w={'100%'}
                  maxW={{ base: '100%', md: '310px', lg: '270px' }}
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
                      h={{ base: '105px', md: '120px', lg: '130px' }}
                      w={{ base: '105px', md: '120px', lg: '130px' }}
                      bgSize={'cover'}
                      borderRadius={'50%'}
                      bgRepeat={'no-repeat'}
                      bgImage={`url('${e.img_evento}')`}
                      bgPosition={'center'}
                    >
                    </Box>
                    <Box>
                      <Text>
                        Titulo
                      </Text>
                      <Box>
                        <Text>
                          {e.titulo}
                        </Text>
                      </Box>
                    </Box>
                    <Box>
                      <Text>
                        Email
                      </Text>
                      <Box>
                        <Text>
                          {e.email}
                        </Text>
                      </Box>
                    </Box>
                    <Box>
                      <Text>
                        Ativo
                      </Text>
                      <Box>
                        <Text>
                          {e.ativo}
                        </Text>
                      </Box>
                    </Box>
                  </Box>
                </Box>
              </>
            )
          })
        }
      </SimpleGrid>
      <Navegation />
    </>
  )
}

export default PaginacaoEventoDesativado