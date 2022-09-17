 import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React, { useContext, useEffect } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalProvider } from '../../../../../context/globalContext';
import { PostPerfil } from '../../../../../utils/database/perfil/post';

 
 const FormPerfil = () => {

  const {
    nome,
    sobreNome,
    email,
    telefone,
    onChangeNome,
    onChangeSobreNome,
    setEmail,
    onChangeTelefone,
    valideteForm
  } = useContext(GlobalProvider);

  
   return (
     <>
       <FormControl
        mt={'2rem'}
        onSubmit={(e)=>{
          e.preventDefault();
        }}
        bg={'#fff'}
        p={'1rem'}
        boxShadow={'0 0 10px 0 rgba(0,0,0,.25)'}
        borderRadius={'5px'}
       >
        <Box
        my={'.5rem'}
        >
          <FormLabel>
            Nome
          </FormLabel>
          <Box>
            <Input
            type={'text'}
            value={nome}
            maxLength={150}
            onChange={onChangeNome}
            />
          </Box>
        </Box>
        <Box
          my={'.5rem'}
        >
          <FormLabel>
            Sobre Nome
          </FormLabel>
          <Box>
            <Input
                type={'text'}
                maxLength={150}
                value={sobreNome}
                onChange={onChangeSobreNome}
            />
          </Box>
        </Box>
        <Box
          my={'.5rem'}
        >
          <FormLabel>
           Email
          </FormLabel>
          <Box>
            <Input
            type={'email'}
            maxLength={150}
            value={email}
            onChange={e=>{setEmail(e.target.value)}}
            />
          </Box>
        </Box>
        <Box>
          <FormLabel>
           Telefone
          </FormLabel>
          <Box>
            <Input
            type={'text'}
            maxLength={15}
            value={telefone}
            onChange={onChangeTelefone}
            />
          </Box>
        </Box>
        <Box
        mt={'1rem'}
        w={'100%'}
       textAlign={'center'}
        >
          <Button
          type={'submit'}
          w={'100%'}
          maxW={'700px'}
          onClick={()=>{
            PostPerfil(nome,sobreNome,email,telefone);
            valideteForm();
          }}
          >
            Salvar
          </Button>
        </Box>
       </FormControl>
       <ToastContainer/>
     </>
   )
 }
 
 export default FormPerfil