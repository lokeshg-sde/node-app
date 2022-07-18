import React, { useRef } from 'react'
import Dialog from '@material-ui/core/Dialog'
import Form from './SignUpForm'

const ModalDialog = ({ open, handleClose }: any) => {
  const ref = useRef()

  return (
    // props received from App.js
    <Dialog ref={ref} onClose={handleClose} open={open}>
      <Form handleClose={handleClose} />
    </Dialog>
  )
}

export default ModalDialog
