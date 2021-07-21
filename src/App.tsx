import {Box, Button, Grid, InputBase, MenuItem, Select, Typography} from '@material-ui/core'
import {createStyles, makeStyles} from '@material-ui/styles'
import {ethers} from 'ethers'
import React, {ChangeEvent, useState} from 'react'
import {toast} from 'react-toastify'
import BG from './assets/images/bg.png'
import Header from './components/Header'
import ToastContent from './components/ToastContent'
import Fish from './images/fish.svg'
import Apple from './images/apple.svg'
import Orange from './images/orange.svg'

const getNetworkTypes = (tokenAddress: string) => {
  switch (tokenAddress) {
    case "0x93C2A4E6fc70124ec59C562a229f91988d6A2865":
      return "bsc"
    case "0xEB2cDAf0fa5E9763fcA90b9c80FA7de3988700f9":
      return "bsc"
    case "0xbdbBC9B9A81c8B56309F46E2Ea650D47697B482c":
      return "erc20"
    case "0x2862F68e270e7024776A6e10a4056D1F3eDA67C6":
      return "erc20"
    default:
      return "erc20"
  }
}

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      minHeight: 'calc(100vh - 54px)',
      background: `url(${BG}), #000000`,
      backgroundRepeat: 'no-repeat',
      backgroundSize: '2000px 668px',
      backgroundPosition: 'center top'
    },
    card: {
      background:
        'linear-gradient(40.67deg, #0C1E24 -4.37%, #090C12 -4.36%, rgba(32, 59, 73, 0.76) 46.64%, rgba(11, 25, 54, 0.72) 105.68%)',
      boxShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
      borderRadius: '4px',
      border: '1px solid',
      borderImage: 'linear-gradient(to right,rgba(6,135,127,1),rgba(48,80,133,1),rgba(73,77,170,0.92)) 1 10'
    },
    label: {
      background: '#07111E'
    },
    notice: {
      background: 'rgba(0, 118, 217, 0.1)',
      borderRadius: '4px',
      fontSize: '12px',
      color: 'rgba(255, 255, 255, 0.9)'
    },
    input: {
      border: '1px solid #176383',
      padding: '5px 10px',
      color: '#fff !important',
      borderRadius: '4px'
    }
  })
)

function App() {
  const classes = useStyles()
  const [address, setAddress] = useState('')
  const [active, setActive] = useState({1: 'active', 2: ''})
  const [token, setToken] = useState('0xEB2cDAf0fa5E9763fcA90b9c80FA7de3988700f9')

  const send = async () => {
    if (!ethers.utils.isAddress(address)) {
      return toast.error(<ToastContent content={'Invalid address'} status={false} />)
    }

    try {
      const type = active[1] !== '' ? 'bxh' : getNetworkTypes(token)
      console.info(`Type: ${type}, ERC20: ${token}, Address: ${address}`)

      const result = await fetch(process.env.REACT_APP_HOST ?? '', {
        method: 'POST',
        body: JSON.stringify({
          net: type,
          address: address,
          erc20_addr: token
        }),
        headers: {'Content-Type': 'application/json'}
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
              <Box p={2} mb={2} bgcolor='#0d131c99' borderRadius={1}>
                <Typography variant='subtitle2' color='#aaaaaa' mb={1}>
                  Select Type
                </Typography>
                <Box display='flex' mb={2} sx={{
                  '& .type': {
                    background: '#061013',
                    border: '1px solid #154356',
                    padding: '10px 20px',
                    color: '#176383',
                    cursor: 'pointer',
                    '&:hover, &.active': {
                      border: '1px solid #1A84B0',
                      color: '#1DB5F4'
                    }
                  },
                  '& .left': {
                    borderTopLeftRadius: '4px',
                    borderBottomLeftRadius: '4px'
                  },
                  '& .right': {
                    borderTopRightRadius: '4px',
                    borderBottomRightRadius: '4px'
                  }
                }}>
                  <Box className={`type left ${active[1]}`} onClick={() => setActive({1: 'active', 2: ''})}>BXH</Box>
                  <Box className={`type right ${active[2]}`} onClick={() => setActive({1: '', 2: 'active'})}>ERC20</Box>
                </Box>
                {
                  active[2] && <>
                    <Typography variant='subtitle2' color='#aaaaaa' mb={1}>
                      Token address
                    </Typography>
                    <Box mb={2}>
                      <Select
                        sx={{
                          border: '1px solid #176383',
                          color: 'rgba(255, 255, 255, 0.8)',
                          '& .MuiSelect-select': {
                            display: 'flex',
                            alignItems: 'center',
                          },
                          '& .MuiPaper-root': {backgroundColor: '#fff'},
                          '& img': {
                            marginRight: '10px'
                          }
                        }}
                        fullWidth
                        value={token}
                        onChange={(event: React.ChangeEvent<{value: unknown}>) => setToken(event.target.value as string)}
                      >
                        <MenuItem value='0xEB2cDAf0fa5E9763fcA90b9c80FA7de3988700f9'>
                          <img src={Apple} alt='token' width={24} height={24} />
                          Apple
                        </MenuItem>
                        <MenuItem value='0x93C2A4E6fc70124ec59C562a229f91988d6A2865'>
                          <img src={Orange} alt='token' width={24} height={24} />
                          Orange
                        </MenuItem>
                        <MenuItem value='0xbdbBC9B9A81c8B56309F46E2Ea650D47697B482c'>
                          <img src='https://cryptologos.cc/logos/tether-usdt-logo.svg?v=013' alt='token' width={24} height={24} />
                          USDT
                        </MenuItem>
                        <MenuItem value='0x2862F68e270e7024776A6e10a4056D1F3eDA67C6'>
                          <img src={Fish} alt='token' width={24} />
                          Fish
                        </MenuItem>
                      </Select>
                    </Box>
                  </>
                }
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
