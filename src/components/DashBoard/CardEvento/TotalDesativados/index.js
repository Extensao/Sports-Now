import { Box, Flex, Text } from '@chakra-ui/react';
import React, { useContext, useEffect, useState } from 'react'
import { GlobalProvider } from '../../../../../context/globalContext';

const TotalEventoDesativados = () => {
  
  const {
    dataEventDesativado,
    login
} = useContext(GlobalProvider);

const [getTotalEventoDesativos,setGetTotalEventoDesativos] = useState("");

useEffect(()=>{
    {
      dataEventDesativado?.map(d =>{
           if(d?.email == login?.email)
           console.log(d.id_evento.toString().split(" ").length)
           setGetTotalEventoDesativos(d.id_evento.toString().split(" ").length == 0 && d?.ativo == 0  ? d.id_evento.toString().split(" ").length : 0 )
        })
    }
})

  return (
   <>
     <Flex
        bg={'blue'}
        p={'1rem'}
        boxShadow={'0 0 10px 0 rgba(0,0,0,.25)'}
        borderRadius={'10px'}
        justify={'center'}
        align={'center'}
      >
        <Box>
          <Text
           fontWeight={'bold'}
           fontSize={25}
            textAlign={'center'}
          >
            Total de Eventos Desativos
          </Text>
          <Box>
            <Text
             fontWeight={'bold'}
             fontSize={40}
              textAlign={'center'}
            >
              {
                getTotalEventoDesativos
              }
            </Text>
          </Box>
        </Box>
      </Flex>
   </>
  )
}

export default TotalEventoDesativados