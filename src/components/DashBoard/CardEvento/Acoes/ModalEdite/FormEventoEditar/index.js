import { Box, Button, Flex, FormControl, Text } from "@chakra-ui/react";
import { useContext } from "react";
import InformacaoEvento from "./InformacaoEvento";
import LocalidadeEvento from "./LocalidadeEvento";
import { FiChevronDown } from "react-icons/fi";
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { GlobalProvider } from "../../../../../../../context/globalContext";
import { EditarEvento } from "../../../../../../../utils/database/put/evento/editar";


const FormEventoEditar = (props) => {

    const {
        img,
        titulo,
        descricao,
        logradouro,
        bairro,
        localidade,
        handlerInformacao,
        handlerLocalidade,
        informacaoHidden,
        localidadeHidden,
        activeImg,
        valideteFormEventoEditar
    } = useContext(GlobalProvider);


    return (
        <>
            <FormControl
                onSubmit={(e) => {
                    e.preventDefault();
                }}
                overflowY={'auto'}
                p={'1rem'}
                h={!informacaoHidden || !localidadeHidden ? '70vh' : '40vh'}
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
                            transform={informacaoHidden ? 'rotate(180deg)' : null}
                        >
                            <FiChevronDown />
                        </Flex>
                    </Flex>
                    <Box>
                        <InformacaoEvento id={props.id} />
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
                            transform={localidadeHidden ? 'rotate(180deg)' : null}
                            onClick={handlerLocalidade}
                        >
                            <FiChevronDown />
                        </Flex>
                    </Flex>
                    <Box
                    >
                        <LocalidadeEvento id={props.id} />
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
                        onClick={() => {
                            // if(img != "" && img?.type == "image/png" || img?.type == "image/jpg"){ 
                                EditarEvento(titulo, descricao, logradouro, bairro, localidade, img, props.id, activeImg);
                                toast.success("Edição feita com sucesso");
                                setTimeout(()=>{
                                    window.location.href = "/dashboard/acompanharEvento"
                                  },5800)
                            // }
                            // valideteFormEventoEditar();
                        }}
                    >
                        Editar
                    </Button>
                </Flex>
            </FormControl>
            <ToastContainer />
        </>
    )
}

export default FormEventoEditar;