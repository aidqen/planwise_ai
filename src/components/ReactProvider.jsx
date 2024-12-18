'use client' // Mark this as a client component

import { store } from '@/store/store'
import { Provider } from 'react-redux'

export function ReduxProvider({ children }) {
  return (
        <Provider store={store}>{children}</Provider>
  )
}
// return <Provider store={store}><CacheProvider><ChakraProvider>{children}</ChakraProvider></CacheProvider></Provider>;
// }
