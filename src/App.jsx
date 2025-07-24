import React from 'react'
import { AppContextProvider } from './Context/AppContext'
import { Outlet } from 'react-router-dom'
import Header from './Components/Header'
import Footer from './Components/Footer'
import Welcome from './Components/PageComponetns/Welcome'


const App = () => {
  return (
    <>
    <AppContextProvider>
      <Welcome/>
      <Header/>
      <Outlet/>
      <Footer/>
    </AppContextProvider>
    </>
  )
}

export default App
