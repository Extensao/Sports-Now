import { Box, Button, Flex, SimpleGrid, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { GlobalProvider } from '../../../../../../context/globalContext';
import Navegation from './Navigation';
import BtnAtivar from '../../Acoes/Ativar';
import ModalVisualizar from '../../Acoes/ModalVisualizar';

const PaginacaoEventoDesativado = () => {

  const {
    currenItenDesativadoEventos,
    login,
    setCardIdEvento
  } = useContext(GlobalProvider);

  return (
    <>
      <Box
        minH={'calc(80vh)'}
        mt={'1.5rem'}
      >
        <SimpleGrid
          columns={{ base: 1, md: 2, lg: 3, xl: 4 }}
          gap={'20px'}
          px={{ base: '.5rem', sm: '2rem', md: '0' }}
          w={'100%'}
        >
          {
            currenItenDesativadoEventos?.map(e => {
              if (e?.email == login?.email)
                return (
                  <>
                    <Box
                      key={e?.id_evento}
                      w={'100%'}
                      maxW={{ base: '100%', md: '310px', lg: '270px' }}
                      boxShadow={'0 0 10px 0 rgba(0,0,0,.25)'}
                      mx={'auto'}
                      py={'1rem'}
                      borderRadius={'8px'}
                      px={'1rem'}
                      onClick={()=>{
                        setCardIdEvento(e?.id_evento)
                      }}
                    >
                      <Box>
                      <Box
                          bg={'blue'}
                          p={'.5rem'}
                          mb={'1rem'}
                          borderRadius={'40px'}
                        >
                          <Flex
                            justify={'center'}
                          >
                          <BtnAtivar id = {e?.id_evento}/>
                          </Flex>
                        </Box>
                        <Box
                          mx={'auto'}
                          h={'150px'}
                          w={'100%'}
                          bgSize={'100% 100%'}
                          borderRadius={'8px'}
                          bgRepeat={'no-repeat'}
                          mb={'.5rem'}
                          bgImage={`url('${e?.img_evento}')`}
                          bgPosition={'center'}
                        >
                        </Box>
                        <Box>
                          <Text
                           fontWeight={'bolder'}
                          >
                            Titulo
                          </Text>
                          <Box>
                            <Text
                            >
                              {e?.titulo}
                            </Text>
                          </Box>
                        </Box>
                        <Box
                        my={'.25rem'}
                        >
                          <Text
                           fontWeight={'bolder'}
                          >
                            Descri????o
                          </Text>
                          <Box>
                            <Text>
                              {e?.descricao}
                            </Text>
                          </Box>
                        </Box>
                        <Box>
                          <Text
                           fontWeight={'bolder'}
                          >
                          Data de cria????o
                          </Text>
                          <Box>
                            <Text>
                            {e?.criacao_data_evento}
                            </Text>
                          </Box>
                        </Box>
                      <ModalVisualizar id = {e?.id_evento} ativo = {e?.ativo} />
                      </Box>
                    </Box>
                  </>
                )
            })
          }
        </SimpleGrid>
      </Box>
      <Navegation />
    </>
  )
}

export default PaginacaoEventoDesativado