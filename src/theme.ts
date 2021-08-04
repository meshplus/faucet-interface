import { createTheme } from '@material-ui/core';

const theme = createTheme({
  spacing: 5,
  palette: {
    primary: {
      light: '#e1edff',
      main: '#1164FB',
    },
    secondary: {
      main: '#FD7C25',
    },
  },
  components: {
    MuiCard: {
      styleOverrides: {
        root: {
          boxShadow: '0px 5px 43px 0px rgba(228, 232, 245, 0.92)',
          borderRadius: '16px',
        },
      },
    },
    MuiPaper: {
        styleOverrides: {
            root: {
                backgroundColor: '#0a0a0a',
                fontSize: '300px'
            }
        }
    },
    MuiTypography: {
      styleOverrides: {
        root: {
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif !important',
        },
        caption: {
          color: '#7B89B7',
          lineHeight: '22px',
        },
        body2: {
          color: '#767d8f',
        },
      },
    },
    MuiCssBaseline: {
      styleOverrides: {
        html: {
          WebkitFontSmoothing: 'auto',
        },
        body: {
          overflow: 'inherit !important',
          backgroundColor: '#E9EDF2',
          minHeight: '100vh',
          fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif !important',
        },
        button: {
          textTransform: 'capitalize !important',
        },
        a: {
          textDecoration: 'none',
        },
        '& .MuiListItem-padding': {
          padding: '8px 16px !important'
        },
        '& .MuiSelect-root': {
          '& svg': {
            color: 'rgba(255, 255 ,255, .5) !important'
          }
        },
        '& .MuiSelect-select': {
          padding: '10px 60px 10px 15px !important',
        },
        '& .MuiPaper-root': {
          border: '1px solid',
          borderImage: 'linear-gradient(to right,rgba(6,135,127,1),rgba(48,80,133,1),rgba(73,77,170,0.92)) 1 10',
          backgroundColor: '#08151A !important',
          color: '#fff !important'
        },
        '.MuiListItem-root': {
          fontSize: '14px !important',
          '& img': {
            marginRight: '15px'
          }
        },
        '.Mui-disabled': {
          background: '#F1F2F6 !important',
        },
        '.Toastify__toast-container': {
          maxWidth: '260px',
          fontSize: '13px',
          left: '50%',
          transform: 'translateX(-50%)',
        },
        '.Toastify__toast': {
          borderRadius: '8px',
          top: '60px',
          padding: '8px 16px',
          color: 'rgba(255, 255, 255, 0.9)',

          '& svg': {
            marginRight: '5px',
          },
        },
        '.Toastify__toast--info': {
          background:
            'radial-gradient(circle, rgba(223,232,254,1) 0%, rgba(252,255,251,1) 45%, rgba(255,242,250,1) 80%);',
        },
        '.Toastify__toast--error': {
          background: '#132229 !important',
        },
        '.MuiStepLabel-root.Mui-disabled': {
          background: '#fff !important',
        },
        '.MuiFormControlLabel-root': {
          alignItems: 'flex-start !important',
          '& h6': {
            marginTop: '2px',
          },
        },
      },
    },
  },
})

export default theme