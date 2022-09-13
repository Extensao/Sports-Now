import { Button, Text } from '@chakra-ui/react'
import React, { useContext } from 'react'
import { GlobalProvider } from '../../../../../context/globalContext';
import { link } from './links'

const NavLink = () => {

    const { 
        menu
      } = useContext(GlobalProvider);

  return (
    <>
    {
        link.map(l =>{
            return(
                <>
                 <Button
                 mt={l.mt}
                 my={l.my}
                 >
                    {l.icon}<Text ml={menu ? '0' : {base:'1rem',md:'0'}} display={menu ? 'block' :'none'}>{l.name}</Text>
                 </Button>
                </>
            )
        })
    }
    </>
  )
}

export default NavLink