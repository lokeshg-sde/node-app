import React, { useState } from 'react'
import { makeStyles } from '@material-ui/core'
import TextField from '@material-ui/core/TextField'
import Button from '@material-ui/core/Button'

const useStyles = makeStyles((theme) => ({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    padding: theme.spacing(2),

    '& .MuiTextField-root': {
      margin: theme.spacing(1),
      width: '300px',
    },
    '& .MuiButtonBase-root': {
      margin: theme.spacing(2),
    },
  },
}))

type Props = {
  handleClose: () => void
}

const Form = ({ handleClose }: Props) => {
  const classes = useStyles()
  // create state variables for each input
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleSubmit = (e: { preventDefault: () => void }) => {
    e.preventDefault()
    console.log(firstName, lastName, email, password)
    handleClose()
  }

  return (
    <form className={classes.root} onSubmit={handleSubmit}>
      <TextField
        label="First Name"
        onChange={(e) => setFirstName(e.target.value)}
        required
        value={firstName}
        variant="filled"
      />
      <TextField
        label="Last Name"
        onChange={(e) => setLastName(e.target.value)}
        required
        value={lastName}
        variant="filled"
      />
      <TextField
        label="Email"
        onChange={(e) => setEmail(e.target.value)}
        required
        type="email"
        value={email}
        variant="filled"
      />
      <TextField
        label="Password"
        onChange={(e) => setPassword(e.target.value)}
        required
        type="password"
        value={password}
        variant="filled"
      />
      <div>
        <Button onClick={handleClose} variant="contained">
          Cancel
        </Button>
        <Button color="primary" type="submit" variant="contained">
          Signup
        </Button>
      </div>
    </form>
  )
}

export default Form
