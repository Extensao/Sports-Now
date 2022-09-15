import { Box, Flex, Link } from '@chakra-ui/react'
import React from 'react'
import DarkMode from '../../../../DarkMode'
import NavLogo from '../../../../NavLogo'
import NavLink from '../../../NavLink'
import Profile from '../../Profile'

const NavBar = () => {
  return (
    <>
        <Flex
        w={'100%'}
        h={'70px'}
        px={'1rem'}
        boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
        direction={{base:'column',md:'row'}}
        align={'center'}
        justify={'space-between'}
        >
          <Link
          href={'/'}
          >
            <NavLogo/>
          </Link>
            <Flex>
                <NavLink/>
            </Flex>
            <Flex
            align={'center'}
            >
                <DarkMode/>
                <Profile/>
            </Flex>
        </Flex>
    </>
  )
}

export default NavBar