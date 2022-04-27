import '../styles/globals.css'
import {ChakraProvider} from '@chakra-ui/react';
import {extendTheme} from '@chakra-ui/react';
import {Provider} from 'react-redux';
import { createStore, applyMiddleware } from 'redux'; 



const store = createStore(() => [], {}, applyMiddleware())


const theme = extendTheme({
  colors: {
    brand: {
      100: "#f7fafc",
      // ...
      900: "blue",
    },
    primary: {
    'orange': '#F47F39',
      'gray': '#787878',
      'white': '#fffff'
    }
  },
})



function MyApp({ Component, pageProps }) {
  return (
  <ChakraProvider theme={theme}>
    <Provider store={store}>
 <Component {...pageProps} />
 </Provider>
  </ChakraProvider>
)
}


export default MyApp
