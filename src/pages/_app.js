import '../styles/globals.css'
import { ChakraProvider } from '@chakra-ui/react'
import { GlobalContext } from '../../context/globalContext'

function MyApp({ Component, pageProps }) {
  return (
    <GlobalContext> 
    <ChakraProvider>
      <Component {...pageProps} />
    </ChakraProvider>
    </GlobalContext>
  )
}

export default MyApp