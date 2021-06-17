import React, {ChangeEvent, useState} from 'react'
import Header from './components/Header'
import {Box, Button, Grid, InputBase, Typography} from '@material-ui/core'
import {createStyles, makeStyles} from '@material-ui/styles'
import BG from './assets/images/bg.png'
import {ethers} from 'ethers'
import {toast} from 'react-toastify'
import ToastContent from './components/ToastContent'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minHeight: 'calc(100vh - 66px)',
      background: `url(${BG}), #000000`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '2000px 668px',
      backgroundPosition: 'center top',
    },
    card: {
      background:
        'linear-gradient(40.67deg, #0C1E24 -4.37%, #090C12 -4.36%, rgba(32, 59, 73, 0.76) 46.64%, rgba(11, 25, 54, 0.72) 105.68%)',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '4px',
      border: '1px solid',
      borderImage: 'linear-gradient(to right,rgba(6,135,127,1),rgba(48,80,133,1),rgba(73,77,170,0.92)) 1 10',
    },
    label: {
      background: '#07111E',
    },
    notice: {
      background: 'rgba(0, 118, 217, 0.1)',
      borderRadius: '4px',
      fontSize: '12px',
      color: 'rgba(255, 255, 255, 0.9)',
    },
    input: {
      border: '1px solid #176383',
      padding: '5px 10px',
      color: '#fff !important',
    },
  })
)

function App() {
  const classes = useStyles()
  const [address, setAddress] = useState('')

  const send = async () => {
    if (!ethers.utils.isAddress(address)) {
      return toast.error(<ToastContent content={'Invalid address'} status={false} />)
    }

    try {
      console.info(`Send request: ${address}`)
      const result = await fetch(process.env.REACT_APP_HOST ?? '', {
        method: 'POST',
        body: JSON.stringify({
          net: 'bxh',
          address: address,
        }),
        headers: {'Content-Type': 'application/json'},
      })

      console.log(result)
      if (result.status === 200) {
        toast.info(<ToastContent content='Send successfully' status={true} />)
        setAddress('')
        return
      }
      const ret = await result.json()
      toast.error(<ToastContent content={ret.msg} status={false} />)
    } catch (e) {
      console.error(e)
    }
  }

  return (
    <>
      <Header />
      <Box className={classes.root}>
        <Box display='flex' justifyContent='center' alignItems='center' style={{minHeight: `calc(100vh - 66px)`}}>
          <Grid item lg={5} md={6}>
            <Box className={classes.card} p={4} ml={2} mr={2}>
              <Box
                display='inline-block'
                className={classes.label}
                px={4}
                py={2}
                color='#61CBF7'
                borderRadius='4px'
                mb={2}
              >
                Faucet
              </Box>
              <Box className={classes.notice} p={2} borderRadius='4px' mb={4}>
                规则提示：平台将自动发送1个测试网BXH到你的测试网地址，每个地址每天可获取一次，仅用于测试。
              </Box>
              <Typography variant='subtitle2' color='#aaaaaa' mb={1}>
                Testnet account address
              </Typography>
              <Box mb={2}>
                <InputBase
                  className={classes.input}
                  fullWidth={true}
                  placeholder='Enter your testnet account address'
                  value={address}
                  onChange={(e: ChangeEvent<{value: string}>) => setAddress(e.target.value)}
                />
              </Box>
              <Button variant='contained' size='large' fullWidth onClick={send}>
                Send
              </Button>
            </Box>
          </Grid>
        </Box>
      </Box>
    </>
  )
}

export default App
