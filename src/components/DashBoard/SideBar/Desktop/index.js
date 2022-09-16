import {Box, Button, Flex, Link, Text} from '@chakra-ui/react'
import { useContext } from 'react';
import { GlobalProvider } from '../../../../../context/globalContext';
import NavLink from '../NavLink';
import NavLogo from '../../../NavLogo';
import { TbWorld } from 'react-icons/tb'

const SideBar = () =>{

    const { 
        menu
      } = useContext(GlobalProvider);

    return(
        <>
        <Flex
          h={'100vh'}
          w={'100%'}
          overflowY={'auto'}
          overflowX={'hidden'}
          maxW={menu ? '250px':'70px'}
          bg={'#ccc'}
          pb={'1rem'}
          position={'fixed'}
          direction={'column'}
          className={'sidebar'}
          >
            <Flex
             borderBottom={'2px solid #000'}
             h={'70px'}
             w={'100%'}
             py={'2rem'}
             justify={'center'}
             align={'center'}
            >
            <Link
            href={'/dashboard'}
            >
              <NavLogo/>
            </Link>
            </Flex>
            <Box
               py={'1rem'}
               px={'1rem'}
               w={'100%'}
            >
              <NavLink/>
            </Box>
          
             <Link
                 href={'/'}
                _hover={{
                    layerStyle:'none'
                }}
                px={'1rem'}
                mt={'auto'}

                >
                    <Button
                    w={'100%'}
                    display={'flex'}
                    justifyContent={menu ? 'start' : {base:'start',md:'center'}}
                    >
                        <Box fontSize={'1rem'}>
                          <TbWorld/>
                        </Box>
                        <Text ml={menu ? '.5rem' : {base:'1rem',md:'0'}} display={menu ? 'block' : {base:'block',md:'none'}}>
                          Voltar ao site
                        </Text>
                    </Button>
                </Link> 
        </Flex>
        </>
    )
}

export default SideBar;
