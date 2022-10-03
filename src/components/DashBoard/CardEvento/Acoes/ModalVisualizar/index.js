import { Box, Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalOverlay, useDisclosure } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { GlobalProvider } from '../../../../../../context/globalContext';
import VisualizarAtivo from './Ativo';
import VisualizarDesativo from './Desativo';

const ModalVisualizar = (props) => {

  const { isOpen, onOpen, onClose } = useDisclosure();

  const {
    informacaoOrganizadorDesativoViewHidden,
    informacaoEventoDesativoViewHidden,
    informacaoEventoAtivoViewHidden,
    informacaoOrganizadorAtivoViewHidden
  } = useContext(GlobalProvider);

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
        <ModalContent
          py={'2rem'}
        >
          <ModalCloseButton />
          <ModalBody>
            {
              props.ativo ?
                <>
                  <Box
                    h={!informacaoEventoAtivoViewHidden || !informacaoOrganizadorAtivoViewHidden ? '60vh' : '180px'}
                    overflowY={'auto'}
                  >  <VisualizarAtivo id={props.id} />
                  </Box>

                </>
                :
                <>
                  <Box
                    h={!informacaoOrganizadorDesativoViewHidden || !informacaoEventoDesativoViewHidden  ? '60vh' : '180px'}
                    overflowY={'auto'}
                  >  <VisualizarDesativo id={props.id} />
                  </Box>

                </>
            }
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  )
}

export default ModalVisualizar