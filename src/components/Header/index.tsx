import React from 'react'
import {Box, Container, Typography} from '@material-ui/core'
import {makeStyles, createStyles} from '@material-ui/styles'
import Logo from '../../assets/images/logo.svg'

const useStyles = makeStyles(() =>
  createStyles({
    root: {
      background: '#262626',
    },
  })
)

const Header = (): JSX.Element => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <Container maxWidth='lg'>
        <Box display='flex' alignItems='center' py={2}>
          <img src={Logo} alt='Logo' height={34} />
          <Typography variant='h6' ml={1} color='#fff'>
            Faucet
          </Typography>
        </Box>
      </Container>
    </Box>
  )
}

export default Header
