import { Flex } from '@chakra-ui/react'
import React from 'react'
import { VscLayersActive } from 'react-icons/vsc';
import { AtivarEvento } from '../../../../../../utils/database/put/evento/ativar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BtnAtivar = (props) => {

    return (
        <>
            <Flex
                w={'30px'}
                h={'30px'}
                boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
                justify={'center'}
                cursor={'pointer'}
                borderRadius={'50%'}
                align={'center'}
                onClick={() => {
                    AtivarEvento(props.id);
                    toast.success("Ativação realizada com sucesso!");
                    setTimeout(()=>{
                        window.location.href = "/dashboard/acompanharEvento"
                      },5800)
                }}
            >
                <VscLayersActive />
            </Flex>
            <ToastContainer/>
        </>
    )
}

export default BtnAtivar