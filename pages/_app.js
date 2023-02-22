import '@/styles/globals.css'
import { extendTheme, ChakraProvider } from '@chakra-ui/react'

const theme =extendTheme({
  colors:{
    brand:{
      cyan : "hsl(172, 67%, 45%)",
      darkCyan: "hsl(183, 100%, 15%)",
      greyCyan: "hsl(184, 14%, 56%)",
      darkGreyCyan : "hsl(186, 14%, 43%)",
      liteGreyCyan: "hsl(185, 41%, 84%)",
      paleGreyCyan : "hsl(189, 41%, 97%)",
      white: "White: hsl(0, 0%, 100%)",
    }
  },
  breakpoints :{
    sm: '376px'    
  }
})
export default function App({ Component, pageProps }) {
  return <ChakraProvider theme={theme}>
        <Component {...pageProps} />
  </ChakraProvider>
  
}
