import { Box, Button, Flex, FormLabel, Input, Text, Textarea } from '@chakra-ui/react';
import React, { useContext } from 'react';
import { GlobalProvider } from '../../../../../../../../context/globalContext';
import { MdEditOff, MdModeEditOutline } from 'react-icons/md';

const InformacaoEvento = (props) => {

    const {
        setImg,
        onChangeTitulo,
        onChangeDescricao,
        informacaoHidden,
        handlerActiveImg,
        activeImg,
        dataEventoAtivo,
        handlerActiveEditeTitulo,
        activeEditeTitulo,
        handlerActiveEditeDescricao,
        activeEditeDescricao
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
                                    display={informacaoHidden ? 'none' : 'block'}
                                >
                                    <Flex
                                        align={'center'}
                                        mb={'1rem'}
                                    >
                                        <Box
                                            w={'20px'}
                                            h={'20px'}
                                            mr={'.5rem'}
                                            cursor={'pointer'}
                                            boxShadow={'0 0 10px 0 rgba(0,0,0,.25)'}
                                            borderRadius={'50%'}
                                            onClick={handlerActiveImg}
                                        ></Box>
                                        <Text>
                                            {!activeImg ? 'Ativação' : 'Desativação'} de exibição de imagem
                                        </Text>
                                    </Flex>
                                    <Box
                                        mx={'auto'}
                                        h={'150px'}
                                        w={'100%'}
                                        display={!activeImg ? 'block' : 'none'}
                                        bgSize={'100% 100%'}
                                        borderRadius={'5px'}
                                        bgRepeat={'no-repeat'}
                                        mb={'.5rem'}
                                        bgImage={`url('${e.img_evento}')`}
                                        bgPosition={'center'}
                                    >
                                    </Box>
                                    <Box
                                        my={'.5rem'}
                                    >
                                        <FormLabel
                                            htmlFor='imagem'
                                            border={'2px dashed #000'}
                                            p={'1rem'}
                                            display={!activeImg ? 'none' : 'block'}
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
                                                onChange={(e) => { setImg(e.target.files[0]) }}
                                            />
                                        </Box>
                                    </Box>
                                    <Box
                                    >
                                        <Flex
                                            justify={'space-between'}
                                            align={'center'}
                                            my={'1rem'}
                                        >
                                            <FormLabel>
                                                Titulo
                                            </FormLabel>
                                            <Button
                                                onClick={handlerActiveEditeTitulo}
                                            >
                                                {
                                                    activeEditeTitulo ?
                                                        <MdEditOff />
                                                        :
                                                        <MdModeEditOutline />
                                                }
                                            </Button>
                                        </Flex>
                                        <Box>
                                            <Input
                                                type={'text'}
                                                maxLength={150}
                                                disabled={!activeEditeTitulo ? true : false}
                                                value={activeEditeTitulo ? null : e?.titulo}
                                                placeholder={'Informe um titulo para o seu evento'}
                                                onChange={onChangeTitulo}
                                            />
                                        </Box>
                                    </Box>
                                    <Box
                                        mt={'.5rem'}
                                    >
                                        <Flex
                                            justify={'space-between'}
                                            align={'center'}
                                            my={'1rem'}
                                        >
                                            <FormLabel>
                                                Descrição
                                            </FormLabel>
                                            <Button
                                                onClick={handlerActiveEditeDescricao}
                                            >
                                                {
                                                    activeEditeDescricao ?
                                                        <MdEditOff />
                                                        :
                                                        <MdModeEditOutline />
                                                }
                                            </Button>
                                        </Flex>
                                        <Box>
                                            <Textarea
                                                type={'text'}
                                                maxLength={250}
                                                disabled={!activeEditeDescricao ? true : false}
                                                value={activeEditeDescricao ? null : e?.descricao}
                                                placeholder={'Informe uma descrição para o seu evento'}
                                                onChange={onChangeDescricao}
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

export default InformacaoEvento