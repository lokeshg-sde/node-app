import React, { useRef } from 'react'
import Dialog from '@material-ui/core/Dialog'
import Form from './SignUpForm'

// eslint-disable-next-line @typescript-eslint/no-explicit-any
const ModalDialog = ({
  open,
  handleClose,
}: {
  open: boolean
  handleClose: () => void
}): JSX.Element => {
  const ref = useRef()

  return (
    // props received from App.js
    <Dialog onClose={handleClose} open={open} ref={ref}>
      <Form handleClose={handleClose} />
    </Dialog>
  )
}

export default ModalDialog
