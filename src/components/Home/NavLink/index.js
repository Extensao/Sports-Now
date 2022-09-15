import { Box, Button, Link, Text } from '@chakra-ui/react'
import React from 'react'
import { link } from './links'

const NavLink = (props) => {
  return (
    <>
            {
        link.map(l =>{
            return(
                <>
                <Link
                href={l.href}
                key={l.id}
                _hover={{
                    layerStyle:'none'
                }}
                >
                    <Button
                    w={'100%'}
                    display={'flex'}
                    ml={{base:'0', md:l.ml}}
                    my={{base:l.my,md:'0'}}
                    mt={{base:l.mt,md:'0'}}
                    justifyContent={props.isOpen ? "start" : "center"}
                    >
                        <Box fontSize={'1rem'} mr={'.5rem'}>{l.icon}</Box>
                        <Text  >{l.name}</Text>
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