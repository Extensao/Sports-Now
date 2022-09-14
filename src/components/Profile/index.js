import { Box, Flex, useDisclosure } from '@chakra-ui/react'
import React from 'react'
import DropdownProfile from './DropdownProfile'

const Profile = (props) => {

  const { isOpen, onToggle, onClose } = useDisclosure()

  return (
    <>
    <Flex
    position={'relative'}
    direction={'column'}
    >
    <Flex
   w={props.isOpen ? '80px' : '30px'}
   h={props.isOpen ? '80px' : '30px'}
   boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
   justify={'center'}
   mx={'auto'}
   cursor={'pointer'}
   mb={{base:'1rem',md:'0'}}
   align={'center'}
   onClick={onToggle}
   borderRadius={'50%'}
   >
    P
   </Flex>
   <Box w={'100%'} h={'5px'} bg={'#ccc'} borderRadius={'40px'} display={{base:'block',md:'none'}}></Box>
   <DropdownProfile onClose={onClose} isOpen={isOpen}/>
    </Flex>
    </>
  )
}

export default Profile