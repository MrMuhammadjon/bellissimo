import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { Provider } from 'react-redux'
import { store } from './App/store.js'
import Router from './Router/Router.jsx'
import { AppContext, AppContextProvider } from './Context/AppContext.jsx'
import { Toaster } from 'react-hot-toast'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Provider store={store}>
      <AppContextProvider>
        <Router/>
         <Toaster position="top-right" reverseOrder={false} />
      </AppContextProvider>
    </Provider>
  </StrictMode>,
)
