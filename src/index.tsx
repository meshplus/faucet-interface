import React from 'react'
import ReactDOM from 'react-dom'
import App from './App'
import {CssBaseline} from '@material-ui/core'
import {ToastContainer} from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.render(
  <React.StrictMode>
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
  </React.StrictMode>,
  document.getElementById('root')
)
