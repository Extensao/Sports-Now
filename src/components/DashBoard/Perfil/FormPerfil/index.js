 import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { GlobalProvider } from '../../../../../context/globalContext';
import { PostPerfil } from '../../../../../utils/database/perfil/post';
 
 const FormPerfil = () => {

  const {
    nome,
    sobreNome,
    email,
    telefone,
    setNome,
    setSobreNome,
    setEmail,
    onChangeTelefone,
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
            maxLength={150}
            onChange={e=>{setNome(e.target.value)}}
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
                onChange={e=>{setSobreNome(e.target.value)}}
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
          onClick={()=>{PostPerfil(nome,sobreNome,email,telefone)}}
          >
            Salvar
          </Button>
        </Box>
       </FormControl>
     </>
   )
 }
 
 export default FormPerfil