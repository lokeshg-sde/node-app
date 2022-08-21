import React from 'react'

import {
  Header,
  Details,
  Container,
  Form,
  Input,
  TextArea,
  Button,
} from '../../Components/ContactSection'

export default function Contact(): JSX.Element {
  return (
    <>
      <Header />
      <Container>
        <Form method="POST" name="contact">
          <Input name="name" placeholder="Full Name" required type="text" />
          <div>
            <Input name="email" placeholder="Email" required type="email" width="46%" />
            <Input name="phone-number" placeholder="Phone Number" type="text" width="46%" />
          </div>
          <div>
            <TextArea name="message" placeholder="Enter your message" required />
            <Details />
          </div>
          <Button type="submit">Submit</Button>
        </Form>
      </Container>
    </>
  )
}
