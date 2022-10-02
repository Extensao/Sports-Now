import { Flex } from '@chakra-ui/react'
import React, { useState } from 'react'
import { AiOutlineDelete } from 'react-icons/ai';
import { ExcluirEvento } from '../../../../../../utils/database/delete/evento/cardEvento';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BtnExluir = (props) => {


    return (
        <>
            <Flex
                w={'30px'}
                h={'30px'}
                mx={'1rem'}
                boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
                justify={'center'}
                cursor={'pointer'}
                borderRadius={'50%'}
                align={'center'}
                onClick={() => {
                    ExcluirEvento(props.id);
                    toast.success("Exclusão realizada com sucesso!");
                    setTimeout(()=>{
                        window.location.href = "/dashboard/acompanharEvento"
                      },5800)
                }}
            >
                <AiOutlineDelete />
            </Flex>
            <ToastContainer/>
        </>
    )
}

export default BtnExluir