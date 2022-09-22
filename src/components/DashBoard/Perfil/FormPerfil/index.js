 import { Box, Button, FormControl, FormLabel, Input } from '@chakra-ui/react'
import React, { useContext, useState } from 'react'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalProvider } from '../../../../../context/globalContext';
import { FormPerfilUser } from '../../../../../utils/database/post/user/formUser';
import { CriarPermissao } from '../../../../../utils/database/post/permissao/perfil';
import { UpdateUser } from '../../../../../utils/database/put/user';

 
 const FormPerfil = () => {

  const {
    nickName,
    telefone,
    setNickName,
    login,
    onChangeTelefone,
    valideteForm,
    capitaLizer,
    limiteNumber,
    dataUsers,
    uId
  } = useContext(GlobalProvider);


  const [activeEditeNickName,setActiveEditeNickName] = useState(false);

  const handlerActiveEditeNickName = () =>setActiveEditeNickName(!activeEditeNickName)

  const [activeEditeTelefone,setActiveEditeTelefone] = useState(false);

  const handlerActiveEditeTelefone = () =>setActiveEditeTelefone(!activeEditeTelefone)

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
            NickName
          </FormLabel>
          {
            dataUsers.map(e => e.email).includes(login.email) ?
            dataUsers.map(e => 
              e.email == login.email &&
              <>
                <Box>
                <Input
                type={'text'}
                value={activeEditeNickName ? capitaLizer(nickName) : e.nick_name}
                onClick={handlerActiveEditeNickName}
                onChange={e=>{setNickName(e.target.value)}}
                />
              </Box>
              </>
              )
          :
          <Box>
            <Input
            type={'text'}
            value={capitaLizer(nickName)}
            maxLength={150}
            onKeyDown={(e)=>{
              limiteNumber(e);
            }}
            onChange={e=>{setNickName(e.target.value)}}
            />
          </Box>
          }
        </Box>
        <Box>
          <FormLabel>
           Telefone
          </FormLabel>
          {
            dataUsers.map(e => e.email).includes(login.email) ?
            dataUsers.map(e => 
              e.email == login.email &&
              <>
                <Box>
                <Input
                type={'text'}
                value={activeEditeTelefone ? telefone : e.telefone}
                onClick={handlerActiveEditeTelefone}
                onChange={onChangeTelefone}
                />
              </Box>
              </>
              )
          :
          <Box>
          <Input
          type={'text'}
          maxLength={15}
          value={telefone}
          onChange={onChangeTelefone}
          />
        </Box>
          }
        </Box>
        <Box
        mt={'1rem'}
        w={'100%'}
       textAlign={'center'}
        >
          {
            dataUsers.map(e => e.email).includes(login.email) ?
            <Button
            type={'submit'}
            w={'100%'}
            disabled={activeEditeTelefone == true && activeEditeNickName == true ? false : true}
            maxW={'700px'}
            onClick={()=>{
              UpdateUser(nickName,telefone,uId)
              valideteForm();
            }}
            >
              Editar
            </Button>
            :
            <Button
            type={'submit'}
            w={'100%'}
            maxW={'700px'}
            onClick={()=>{
              FormPerfilUser(login?.displayName,login?.email,telefone,nickName,login.photoURL);
              CriarPermissao(login?.email)
              setTimeout(()=>{
                window.location.href = '/dashboard/perfil/'
              },6000)
              valideteForm();
            }}
            >
              Salvar
          </Button>
           }
        </Box>
       </FormControl>
       <ToastContainer/>
     </>
   )
 }
 
 export default FormPerfil