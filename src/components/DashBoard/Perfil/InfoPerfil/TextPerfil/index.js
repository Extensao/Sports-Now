import { Box, Flex, keyframes, Text } from '@chakra-ui/react';
import React, { useContext, useState } from 'react'
import { GlobalProvider } from '../../../../../../context/globalContext';
import {IoIosArrowDown} from 'react-icons/io'

const TextPerfil = () => {

    const {login} = useContext(GlobalProvider);

    const [hiddenEmail,setHaddenEmail] = useState(false);

    const handlerHaddenEmail = () => setHaddenEmail(!hiddenEmail);

    const [hiddenNome,setHaddenNome ] = useState(false);

    const handlerHaddenNome = () => setHaddenNome(!hiddenNome);
    

    const spin = keyframes`
    0% { 
          opacity:0;
          transform: translateX(.25rem);
         }
    100% { 
         opacity:1;
         transform: translateX(0);
        }
  `
  return (
   <>
     <Flex
     direction={'column'}
     w={'100%'}
     maxW={{base:'100%',md:'40vw'}}
     >
        <Box
        mb={'.5rem'}
        borderLeft={'5px solid red'}
        py={'.15rem'}
        >

            <Flex        
             position={'relative'}
             cursor={'pointer'}
             mb={'.25rem'}
             justify={'space-between'}
             onClick={handlerHaddenEmail}
             align={'center'}
             ml={'.25rem'}
             >
               <Text
                fontSize={'18px'}
                fontWeight={'bold'}
               >
                    Email 
                </Text>
              <Box
                   transition={'.8s ease-in-out'}
                   transform={!hiddenEmail ? 'rotate(180deg)' : null}
              >
                    <IoIosArrowDown/>
                </Box>
            </Flex>
            {
                hiddenEmail &&
                <Box
                animation={`${spin} 2s ease-in-out`}
                ml={'.25rem'}
                >
                  {login?.email}
                </Box>
            }
        </Box>
        <Box
        mt={'1rem'}
        py={'.15rem'}
        borderLeft={'5px solid red'}
        >
            <Flex        
             position={'relative'}
             cursor={'pointer'}
             justify={'space-between'}
             onClick={handlerHaddenNome}
             align={'center'}
             ml={'.25rem'}
             >
               <Text
               fontSize={'18px'}
               fontWeight={'bold'}
               >
                    Nome 
                </Text>
                
                <Box
                transition={'.5s ease-in-out'}
                transform={!hiddenNome ? 'rotate(180deg)' : null}
                >
                    <IoIosArrowDown/>
                </Box>
            </Flex>
            {
                hiddenNome &&
                <Box 
                animation={`${spin} 2s ease-in-out`}
                ml={'.25rem'}
                >
                  {login?.displayName}
                </Box>
            }
        </Box>
     </Flex>
   </>
  )
}

export default TextPerfil