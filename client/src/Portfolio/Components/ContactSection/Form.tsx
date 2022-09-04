import React, { useState } from 'react'
import type { MouseEvent } from 'react'
import { Person, Info } from '@mui/icons-material'

import { Container, Form, Button, Card } from './styled'
import { Details } from './components'
import { EmailField, InputField } from './formControls'

export const Contact = (): JSX.Element => {
  const [email, setEmail] = useState('')
  const [error, setError] = useState(false)
  const [name, setName] = useState('')
  const [subject, setSubject] = useState('')
  const [message, setMessage] = useState('')

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const onSubmit = (event: MouseEvent<HTMLButtonElement>) => {
    // eslint-disable-next-line no-alert
    alert('Form Submitted')
  }

  return (
    <>
      <Container>
        <Form>
          <div id="container">
            <Card height={42} width={36}>
              <InputField
                icon={<Person color="info" sx={{ color: 'grey', fontSize: '2rem' }} />}
                key="full-name"
                placeHolder="Full Name"
                setValue={setName}
                value={name}
              />
              <EmailField isError={error} setError={setError} setValue={setEmail} value={email} />
              <InputField
                icon={<Info color="info" sx={{ color: 'grey', fontSize: '2rem' }} />}
                key="subject"
                placeHolder="Subject"
                setValue={setSubject}
                value={subject}
              />
              <InputField
                key="message"
                multiline
                placeHolder="Enter your message"
                rows={8}
                setValue={setMessage}
                value={message}
              />
            </Card>
            <div id={"infoCards"}>
              <Card height={11} width={20}>
                <Details text="H S R Layout, Bangalore." />
              </Card>
              <Card height={11} width={20}>
                <Details text="Email" />
              </Card>
              <Card height={11} width={20}>
                <Details text="Phone" />
              </Card>
            </div>
          </div>
          <Button onClick={onSubmit} type="button">
            Submit
          </Button>
        </Form>
      </Container>
    </>
  )
}
