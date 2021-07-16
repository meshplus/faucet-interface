import { ThemeProvider } from '@emotion/react'
import { CssBaseline } from '@material-ui/core'
import React from 'react'
import ReactDOM from 'react-dom'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import App from './App'
import theme from './theme'

ReactDOM.render(
  <React.StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <ToastContainer
        position='top-center'
        hideProgressBar={true}
        newestOnTop={false}
        closeButton={<></>}
        pauseOnFocusLoss
        pauseOnHover
        autoClose={3000}
      />
      <App />
    </ThemeProvider>
  </React.StrictMode>,
  document.getElementById('root')
)
