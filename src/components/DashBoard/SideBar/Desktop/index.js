import {Flex,Box} from '@chakra-ui/react'

const SideBarDesktop = () =>{

    return(
        <>
        <Flex
           display={{base:'none',md:'flex'}}
        >
        <Flex
          minH={'100vh'}
          w={'100%'}
          maxW={'250px'}
          bg={'#ccc'}
          justify={'space-betewen'}
          align={'center'}
          px={'10px'}
          >
          </Flex>
            <Box
              w={'calc(100% - 250px)'}
              p={'.5rem'}
            >
                BBB
            </Box>
        </Flex>
        </>
    )
}

export default SideBarDesktop;