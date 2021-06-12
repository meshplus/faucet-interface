import {Box} from '@material-ui/core'
import CancelIcon from '@material-ui/icons/Cancel'
import CheckCircleIcon from '@material-ui/icons/CheckCircle'
import React from 'react'

const ToastContent = ({content, status}: {content: string; status: boolean}) => {
  return (
    <Box display={'flex'} alignItems={'center'} justifyContent={'center'} fontSize='14px'>
      {status ? (
        <CheckCircleIcon fontSize={'small'} htmlColor={'#0AC571'} />
      ) : (
        <CancelIcon fontSize={'small'} htmlColor={'#f44336'} />
      )}
      <Box>{content}</Box>
    </Box>
  )
}

export default ToastContent
