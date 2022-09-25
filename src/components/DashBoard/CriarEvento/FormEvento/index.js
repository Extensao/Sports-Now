import { FormControl, Box, FormLabel, Input, Button } from "@chakra-ui/react";
import { GlobalProvider } from "../../../../../context/globalContext";
import React, { useContext, useState } from 'react'
import { FormEventoCriar } from "../../../../../utils/database/post/eventos/formEvento";


const FormEvento = () => {

    const {
        dataUsers,
        uId,
        onChangeTitulo,
        onChangeDescricao,
        titulo,
        descricao
    } = useContext(GlobalProvider);

    console.log(descricao);
    return (
        <>
            <FormControl
                mt={'2rem'}
                onSubmit={(e) => {
                    e.preventDefault();
                }}
                bg={'#black'}
                p={'1rem'}
                boxShadow={'0 0 10px 0 rgba(0,0,0,.25)'}
                borderRadius={'5px'}
            >
                <Box>
                    <FormLabel>
                        titulo
                    </FormLabel>
                    <Box>
                        <Input
                            type={'text'}
                            value={titulo}
                            onChange={onChangeTitulo}
                        />
                    </Box>

                    <FormLabel>
                        Descricao
                    </FormLabel>
                    <Box>
                        <Input
                            type={'text'}
                            value={descricao}
                            onChange={onChangeDescricao}
                        />
                    </Box>
                </Box>
                <Box
                    display={'flex'}
                    alignItems={'center'}
                    justifyContent={'center'}
                >
                    <Button
                        type={'submit'}
                        w={'100%'}
                        maxW={'700px'}
                        onClick={() => {
                            FormEventoCriar(titulo, descricao, uId);
                            setTimeout(() => {
                                window.location.href = '/dashboard/criarEvento/'
                            }, 6000)

                        }}
                    >
                        Salvar
                    </Button>
                </Box>

            </FormControl>
        </>
    );
}


export default FormEvento