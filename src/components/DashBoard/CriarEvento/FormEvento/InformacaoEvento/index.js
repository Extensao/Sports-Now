import { Box, FormLabel, Input, Textarea } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { storage } from '../../../../../../config/firebase';
import { GlobalProvider } from '../../../../../../context/globalContext';

const InformacaoEvento = () => {

    const {
        setImg,
        onChangeTitulo,
        onChangeDescricao,
        informacaoHidden
    } = useContext(GlobalProvider);
    
    return (
        <>
        <Box
        px={'.5rem'}
        display={informacaoHidden ? 'none' : 'block'}
        >
        <Box
        my={'.5rem'}
        >
                <FormLabel
                    htmlFor='imagem'
                    border={'2px dashed #000'}
                    p={'1rem'}
                    borderRadius={'10px'}
                   textAlign={'center'}
                   cursor={'pointer'}
                >
                    Insira uma imagem para o seu evento
                </FormLabel>
                <Box>
                    <Input
                        id={'imagem'}
                        display={'none'}
                        type={'file'}
                        onChange={(e) => {setImg(e.target.files[0])}}
                    />
                </Box>
            </Box>
            <Box
            >
                <FormLabel>
                    Titulo
                </FormLabel>
                <Box>
                    <Input
                        type={'text'}
                        maxLength={150}
                        placeholder={'Informe um titulo para o seu evento'}
                        onChange={onChangeTitulo}
                    />
                </Box>
            </Box>
            <Box
                mt={'.5rem'}
            >
                <FormLabel>
                    Descrição
                </FormLabel>
                <Box>
                    <Textarea
                        type={'text'}
                        maxLength={250}
                        placeholder={'Informe uma descrição para o seu evento'}
                        onChange={onChangeDescricao}
                    />
                </Box>
            </Box>
        </Box>
        </>
    )
}

export default InformacaoEvento