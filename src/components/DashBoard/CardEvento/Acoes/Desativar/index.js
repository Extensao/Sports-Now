import { Flex } from '@chakra-ui/react'
import React from 'react'
import { VscLayersDot } from 'react-icons/vsc';
import { DesativarEvento } from '../../../../../../utils/database/put/evento/desativar';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const BtnDesativar = (props) => {

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
                    DesativarEvento(props.id);
                    toast.success("Desativação realizada com sucesso!");
                    setTimeout(()=>{
                      window.location.href = "/dashboard/eventosDesativados "
                    },5800)
                }}
            >
                <VscLayersDot />
            </Flex>
            <ToastContainer/>
        </>
    )
}

export default BtnDesativar