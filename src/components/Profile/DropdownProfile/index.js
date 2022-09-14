import { Box, Button, Flex, Popover, PopoverArrow, PopoverBody, PopoverCloseButton, PopoverContent, PopoverHeader, PopoverTrigger } from "@chakra-ui/react";

const DropdownProfile = (props) =>{

    return(
        <>
        <Box
       className="dropdown-perf"
       mt={'1rem'}
       display={props.isOpen ? 'block' : 'none'}
        >
        <Popover
                isOpen={props.isOpen}
                onClose={props.onClose}
        >
  <PopoverContent 
  w={'100%'}
  >
        <PopoverArrow />
        <PopoverBody
        >
            <Button
            w={'100%'}
            px={{base:'0',md:'2.5rem'}}
            >
                Entrar
            </Button>
        </PopoverBody>
    </PopoverContent>
    </Popover>
        </Box>
        </>
    )
}

export default DropdownProfile;