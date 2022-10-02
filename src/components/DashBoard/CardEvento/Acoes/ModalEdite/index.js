import { Flex, Modal, ModalBody, ModalCloseButton, ModalContent, ModalOverlay, useDisclosure } from '@chakra-ui/react';
import React, { useState } from 'react'
import { AiOutlineEdit } from 'react-icons/ai';
import FormEventoEditar from './FormEventoEditar';

const BtnModalEdite = (props) => {

    const { isOpen, onOpen, onClose } = useDisclosure();

    const [idEvento, setIdEvento] = useState("");

    return (
        <>
            <Flex
                w={'30px'}
                h={'30px'}
                boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
                justify={'center'}
                cursor={'pointer'}
                borderRadius={'50%'}
                onClick={() => {
                    setIdEvento(props.id)
                    onOpen()
                }}
                align={'center'}
            >
                <AiOutlineEdit />
            </Flex>
            <Modal 
            isOpen={isOpen} 
            onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                    <ModalCloseButton />
                    <ModalBody
                     h={'70vh'}
                     pt={'3rem'}
                    >
                        <FormEventoEditar id={idEvento} />
                    </ModalBody>
                </ModalContent>
            </Modal>
        </>
    )
}

export default BtnModalEdite