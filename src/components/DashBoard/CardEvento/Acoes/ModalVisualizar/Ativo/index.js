import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useContext, useState } from 'react'
import { GlobalProvider } from '../../../../../../../context/globalContext';
import { FiChevronDown } from 'react-icons/fi';

const VisualizarAtivo = (props) => {

    const {
        dataEventoAtivo,
        handlerInformacaoEventoAtivoView,
        handlerInformacaoOrganizadorAtivoView,
        informacaoEventoAtivoViewHidden,
        informacaoOrganizadorAtivoViewHidden
    } = useContext(GlobalProvider);

   

    return (
        <>
            {
                dataEventoAtivo?.map((d) => {
                    if (d?.id_evento == props.id)
                        return (
                            <>
                                <Box
                                px={'.5rem'}
                                >
                                    <Flex
                                        boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
                                        p={'1rem'}
                                        mt={'1rem'}
                                        borderRadius={'.5rem'}
                                        w={'100%'}
                                        justify={'space-between'}
                                    >
                                        <Text
                                            fontWeight={'bolder'}
                                        >
                                            Informações do Organizador
                                        </Text>
                                        <Flex
                                            justify={'center'}
                                            align={'center'}
                                            w={'30px'}
                                            h={'30px'}
                                            borderRadius={'50%'}
                                            cursor={'pointer'}
                                            boxShadow={'0 0 10px 0 rgba(0,0,0,.25)'}
                                            onClick={handlerInformacaoOrganizadorAtivoView}
                                        >
                                               <Box
                                            transition={'.5s ease-in-out'}
                                            transform={informacaoOrganizadorAtivoViewHidden ? 'rotate(180deg)' : null}
                                            >
                                                <FiChevronDown />
                                            </Box>
                                        </Flex>
                                    </Flex>
                                    <Box
                                        px={'.5rem'}
                                        display={informacaoOrganizadorAtivoViewHidden ? 'none' : 'block'}
                                    >
                                        <Box
                                            mt={'1rem'}
                                        >
                                            <Text
                                                fontWeight={'bolder'}
                                            >
                                                Nome
                                            </Text>
                                            <Box>
                                                <Text>
                                                    {d?.nome}
                                                </Text>
                                            </Box>
                                        </Box>
                                        <Box
                                            my={'.5rem'}
                                        >
                                            <Text
                                                fontWeight={'bolder'}
                                            >
                                                Email
                                            </Text>
                                            <Box>
                                                <Text>
                                                    {d?.email}
                                                </Text>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Text
                                                fontWeight={'bolder'}
                                            >
                                                Telefone
                                            </Text>
                                            <Box>
                                                <Text>
                                                    {d?.telefone}
                                                </Text>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Flex
                                        boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
                                        p={'1rem'}
                                        mt={'1rem'}
                                        borderRadius={'.5rem'}
                                        w={'100%'}
                                        justify={'space-between'}
                                    >
                                        <Text
                                            fontWeight={'bolder'}
                                        >
                                            Informações do Evento
                                        </Text>
                                        <Flex
                                            justify={'center'}
                                            align={'center'}
                                            w={'30px'}
                                            h={'30px'}
                                            borderRadius={'50%'}
                                            cursor={'pointer'}
                                            boxShadow={'0 0 10px 0 rgba(0,0,0,.25)'}
                                            onClick={handlerInformacaoEventoAtivoView}
                                        >
                                            <Box
                                                transition={'.5s ease-in-out'}
                                                transform={informacaoEventoAtivoViewHidden ? 'rotate(180deg)' : null}
                                            >
                                                <FiChevronDown />
                                            </Box>
                                        </Flex>
                                    </Flex>
                                    <Box
                                        px={'.5rem'}
                                        display={informacaoEventoAtivoViewHidden ? 'none' : 'block'}
                                    >
                                        <Box
                                            mt={'1rem'}
                                        >
                                            <Text
                                                fontWeight={'bolder'}
                                            >
                                                Titulo
                                            </Text>
                                            <Box>
                                                <Text>
                                                    {d.titulo}
                                                </Text>
                                            </Box>
                                        </Box>
                                        <Box
                                            my={'.5rem'}
                                        >
                                            <Text
                                                fontWeight={'bolder'}
                                            >
                                                Descrição
                                            </Text>
                                            <Box>
                                                <Text>
                                                    {d?.descricao}
                                                </Text>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Text
                                                fontWeight={'bolder'}
                                            >
                                                Endereço
                                            </Text>
                                            <Box>
                                                <Text>
                                                    {d?.endereco}
                                                </Text>
                                            </Box>
                                        </Box>
                                        <Box
                                            my={'.5rem'}
                                        >
                                            <Text
                                                fontWeight={'bolder'}
                                            >
                                                Bairro
                                            </Text>
                                            <Box>
                                                <Text>
                                                    {d?.bairro}
                                                </Text>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Text
                                                fontWeight={'bolder'}
                                            >
                                                Localidade
                                            </Text>
                                            <Box>
                                                <Text>
                                                    {d?.localidade}
                                                </Text>
                                            </Box>
                                        </Box>
                                        <Box>
                                            <Text
                                                fontWeight={'bolder'}
                                            >
                                                Data de criação
                                            </Text>
                                            <Box>
                                                <Text>
                                                    {d?.criacao_data_evento}
                                                </Text>
                                            </Box>
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

export default VisualizarAtivo