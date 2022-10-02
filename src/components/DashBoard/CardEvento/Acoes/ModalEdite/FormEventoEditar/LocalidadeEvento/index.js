import { Box, Button, Flex, FormLabel, Input, InputGroup, InputRightElement, Radio, RadioGroup, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { GlobalProvider } from '../../../../../../../../context/globalContext';
import { MdEditOff, MdModeEditOutline } from 'react-icons/md';

const LocalidadeEvento = (props) => {

    const {
        onChangeLogradouro,
        onChangeBairro,
        onChangeLocalidade,
        localidadeHidden,
        dataEventoAtivo,
        handlerActiveEditeEndereco,
        handlerActiveEditeBairro,
        handlerActiveEditeLocalidade,
        activeEditeEndereco,
        activeEditeBairro,
        activeEditeLocalidade,
        localidade
    } = useContext(GlobalProvider);


    return (
        <>
            {
                dataEventoAtivo?.map((e) => {
                    if (e?.id_evento == props.id)
                        return (
                            <>
                                <Box
                                    px={'.5rem'}
                                    display={localidadeHidden ? 'none' : 'block'}
                                >

                                    <Box
                                        my={'.5rem'}
                                    >
                                        <Flex
                                            justify={'space-between'}
                                            align={'center'}
                                            my={'1rem'}
                                        >
                                            <FormLabel>
                                                Endereço
                                            </FormLabel>
                                            <Button
                                                onClick={handlerActiveEditeEndereco}
                                            >
                                                 {
                                                    activeEditeEndereco ?
                                                    <MdEditOff />
                                                    :
                                                    <MdModeEditOutline />
                                                }
                                            </Button>
                                        </Flex>
                                        <Box>

                                            <Input
                                                type={'text'}
                                                maxLength={200}
                                                disabled={!activeEditeEndereco ? true : false}
                                                value={activeEditeEndereco ? null : e?.endereco}
                                                placeholder={'Informe o endereço em que vai acontecer o evento. ex Rua Reverendo Elias Fontes'}
                                                onChange={onChangeLogradouro}
                                            />
                                        </Box>
                                    </Box>
                                    <Box
                                        my={'.5rem'}
                                    >
                                        <Flex
                                            justify={'space-between'}
                                            align={'center'}
                                            my={'1rem'}
                                        >
                                            <FormLabel>
                                                Bairro
                                            </FormLabel>
                                            <Button
                                                onClick={handlerActiveEditeBairro}
                                            >
                                                 {
                                                    activeEditeBairro ?
                                                    <MdEditOff />
                                                    :
                                                    <MdModeEditOutline />
                                                }
                                            </Button>
                                        </Flex>
                                        <Box>
                                            <Input
                                                type={'text'}
                                                maxLength={200}
                                                disabled={!activeEditeBairro ? true : false}
                                                value={activeEditeBairro ? null : e?.bairro}
                                                placeholder={'Informe o bairro em que vai acontecer o evento. ex Flodoaldo Pontes Pinto'}
                                                onChange={onChangeBairro}
                                            />
                                        </Box>
                                    </Box>
                                    <Box>
                                        <Flex
                                            justify={'space-between'}
                                            align={'center'}
                                            my={'1rem'}
                                        >
                                            <FormLabel>
                                                Estado UF - (RO)
                                            </FormLabel>
                                            <Button
                                                onClick={handlerActiveEditeLocalidade}
                                            >
                                                 {
                                                    activeEditeLocalidade ?
                                                    <MdEditOff />
                                                    :
                                                    <MdModeEditOutline />
                                                }
                                            </Button>
                                        </Flex>
                                        <Box>
                                            <Input
                                                type={'text'}
                                                maxLength={2}
                                                disabled={!activeEditeLocalidade ? true : false}
                                                value={activeEditeLocalidade ? null : e?.localidade}
                                                placeholder={'Informe o estado em que vai acontecer o evento. ex Rondônia'}
                                                onChange={onChangeLocalidade}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                            </>
                        )
                })
            }
        </>
    )
}

export default LocalidadeEvento