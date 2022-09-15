import { Box, Flex, Menu, MenuButton } from '@chakra-ui/react'
import Image from 'next/image';
import React, { useContext } from 'react'
import { GlobalProvider } from '../../../context/globalContext';
import DropdownProfile from './DropdownProfile'

const Profile = (props) => {

  const {login} = useContext(GlobalProvider);

  var teste = login?.photoURL;

  console.log(teste)

  return (
    <>
    <Menu>
    <MenuButton
   w={props.isOpen ? '80px' : '30px'}
   h={props.isOpen ? '80px' : '30px'}
   boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
   justify={'center'}
   mx={'auto'}
   cursor={'pointer'}
   bgImage={`url('https://lh3.googleusercontent.com/a/AItbvmlSjQ_qH3CL9qYtisi8fMO4oVlf4rPtdLebi8UQ=s96-c')`}
   bgSize={props.isOpen ? '80px' : '30px'}
   bgPosition={'center'}
   bgRepeat={'no-repeat'}
   mb={{base:'1rem',md:'0'}}
   align={'center'}
   borderRadius={'50%'}
   >
   
   </MenuButton>
   <Box w={'100%'} h={'5px'} bg={'#ccc'} borderRadius={'40px'} display={{base:'block',md:'none'}}></Box>
   <Box
         className={'dropdown-perfil'}
         w={{base:'100%',md:'0'}}
   >
       <DropdownProfile />
   </Box>
    </Menu>
    </>
  )
}

export default Profile