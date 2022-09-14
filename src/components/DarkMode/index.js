import React,{useContext} from 'react'
import {Flex} from '@chakra-ui/react'
import { GlobalProvider } from '../../../context/globalContext';
import IconsDarkMode from './IconsDarkMode';

const DarkMode = () =>{

    const { 
        handlerDarkMode
      } = useContext(GlobalProvider);

    return(
        <>
        <Flex
         w={'30px'}
         h={'30px'}
         boxShadow={'0 0 10px 0 rgba(0,0,0,.5)'}
         justify={'center'}
         align={'center'}
         onClick={handlerDarkMode}
         borderRadius={'50%'}
         cursor={'pointer'}
         mr={{base:'0',md:'1rem'}}
        >
            <IconsDarkMode/>
        </Flex>
        </>
    )    
}

export default DarkMode;