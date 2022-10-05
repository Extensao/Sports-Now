import { Box, FormLabel, Input, InputGroup, InputRightElement, Radio, RadioGroup, SimpleGrid, Stack, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { GlobalProvider } from '../../../../../../context/globalContext';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const LocalidadeEvento = () => {

    const {
        onChangeLogradouro,
        onChangeBairro,
        onChangeLocalidade,
        localidadeHidden,
        localidade
    } = useContext(GlobalProvider);


    return (
        <>

            <Box
                px={'.5rem'}
                display={localidadeHidden ? 'none' : 'block'}
            >
  
                <Box
                    my={'.5rem'}
                >
                    <FormLabel>
                        Endereço
                    </FormLabel>
                    <Box>

                        <Input
                        type={'text'}
                        maxLength={200}
                        placeholder={'Informe o endereço em que vai acontecer o evento. ex Rua Reverendo Elias Fontes'}
                        onChange={onChangeLogradouro}
                    />
                    </Box>
                </Box>
                <Box
                    my={'.5rem'}
                >
                    <FormLabel>
                        Bairro
                    </FormLabel>
                    <Box>
                        <Input
                        type={'text'}
                        maxLength={200}
                        placeholder={'Informe o bairro em que vai acontecer o evento. ex Flodoaldo Pontes Pinto'}
                        onChange={onChangeBairro}
                    />
                    </Box>
                </Box>
                <Box>
                    <FormLabel>
                         Estado UF - (RO)
                    </FormLabel>
                    <Box>
                        <Input
                        type={'text'}
                        maxLength={2}
                        value={localidade.toUpperCase()}
                        placeholder={'Informe o estado em que vai acontecer o evento. ex Rondônia'}
                        onChange={onChangeLocalidade}
                    />
                    </Box>
                </Box>
            </Box>
            <ToastContainer/>
        </>
    )
}

export default LocalidadeEvento