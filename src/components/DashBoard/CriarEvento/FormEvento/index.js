import { Box, Button, Flex, FormControl, FormLabel, Input, Text } from "@chakra-ui/react";
import { useContext } from "react";
import { GlobalProvider } from "../../../../../context/globalContext";
import InformacaoEvento from "./InformacaoEvento";
import LocalidadeEvento from "./LocalidadeEvento";
import {FiChevronDown} from  "react-icons/fi";
import { FormEventoCriar } from "../../../../../utils/database/post/evento";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const FormEvento = () =>{

    const {
        img,
        titulo,
        descricao,
        uId,
        logradouro,
        bairro,
        localidade,
        valideteFormEvento,
        handlerInformacao,
        handlerLocalidade,
        informacaoHidden,
        localidadeHidden
      } = useContext(GlobalProvider);


      console.log(img)
    return(
        <>
           <FormControl
                onSubmit={(e)=>{
                  e.preventDefault();
                }}
                bg={'#fff'}
                p={'1rem'}
                boxShadow={'0 0 10px 0 rgba(0,0,0,.25)'}
                borderRadius={'5px'}
           >
            <Box
            className="info"
            mt={'1rem'}
            >
              <Flex
                    justify={'space-between'}
                    align={'center'}
                    my={'1rem'}
                    boxShadow={'0 0 10px 0 rgba(0,0,0,.25)'}
                    px={'1rem'}
                    py={'1.15rem'}
                    borderRadius={'10px'}
              >
                    <Text
                       fontWeight={'bold'}
                    >
                        Informações
                    </Text>
                    <Flex
                    justify={'center'}
                    align={'center'}
                    w={'30px'}
                    h={'30px'}
                    borderRadius={'50%'}
                    cursor={'pointer'}
                    boxShadow={'0 0 10px 0 rgba(0,0,0,.25)'}
                    onClick={handlerInformacao}
                    transition={'.5s ease-in-out'}
                    transform={informacaoHidden ? 'rotate(180deg)': null}
                    >
                        <FiChevronDown/>
                    </Flex>
                </Flex>
                <Box>
                    <InformacaoEvento/>
                </Box>
            </Box>
            <Box
            className="local"
            my={'1rem'}
            >
                <Flex
                  justify={'space-between'}
                  align={'center'}
                  mb={'1rem'}
                  boxShadow={'0 0 10px 0 rgba(0,0,0,.25)'}
                  px={'1rem'}
                  py={'1.15rem'}
                  borderRadius={'10px'}
                >
                    <Text
                    fontWeight={'bold'}
                    >
                        Localidade
                    </Text>
                    <Flex
                        justify={'center'}
                        align={'center'}
                        w={'30px'}
                        h={'30px'}
                        borderRadius={'50%'}
                        cursor={'pointer'}
                        boxShadow={'0 0 10px 0 rgba(0,0,0,.25)'}
                        transition={'.5s ease-in-out'}
                        transform={localidadeHidden ? 'rotate(180deg)': null}
                        onClick={handlerLocalidade}
                    >
                        <FiChevronDown/>
                    </Flex>
                </Flex>
                <Box
                >
                    <LocalidadeEvento/>
                </Box>
            </Box>
             <Flex
             mt={'2rem'}
             justify={'center'}
             >
                <Button
                type={'submit'}
                w={'100%'}
                maxW={'700px'}
                onClick={()=>{      
                    FormEventoCriar( titulo, descricao, logradouro, bairro, localidade, uId, img );
                    valideteFormEvento();
                }}
                >
                    Salvar
                </Button>
             </Flex>
           </FormControl>
           <ToastContainer/>
        </>
    )
}

export default FormEvento;