import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { GlobalProvider } from '../../../../../../context/globalContext';

const ModalVisualizar = (props) => {

  const {
    img,
  } = useContext(GlobalProvider);

  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Button
        mt={'.5rem'}
        w={'100%'}
        fontWeight={'bolder'}
        onClick={() => {
          console.log(props.id)
          onOpen()
      }}
      >
        Ver Mais
      </Button>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Modal Title</ModalHeader>
          <ModalCloseButton />
          <ModalBody>

          </ModalBody>

          <ModalFooter>
            <Button variant='ghost'>Secondary Action</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalVisualizar