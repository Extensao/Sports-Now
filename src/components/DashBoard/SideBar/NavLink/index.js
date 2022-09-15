import { Box, Button, Link, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { GlobalProvider } from '../../../../../context/globalContext';
import { link } from './links'

const NavLink = (prop) => {

    const { 
        menu
      } = useContext(GlobalProvider);

  return (
    <>
    {
        link.map(l =>{
            return(
                <>
                <Link
                key={l.id}
                href={l.href}
                _hover={{
                    layerStyle:'none'
                }}
                >
                    <Button
                    mt={l.mt}
                    w={'100%'}
                    display={'flex'}
                    justifyContent={menu ? 'start' : {base:'start',md:'center'}}
                    my={l.my}
                    >
                        <Box fontSize={'1rem'}>{l.icon}</Box><Text ml={menu ? '.5rem' : {base:'1rem',md:'0'}} display={menu ? 'block' : {base:'block',md:'none'}}>{l.name}</Text>
                    </Button>
                </Link>
                </>
            )
        })
    }
    </>
  )
}

export default NavLink