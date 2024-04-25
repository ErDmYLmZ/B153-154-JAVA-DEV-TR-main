import React from 'react'
import AppRouterProvider from './router'
import StoreProvider from './store'

const App = () => {



  return (
    <StoreProvider>
      <AppRouterProvider/>
    </StoreProvider>
  )
}

export default App