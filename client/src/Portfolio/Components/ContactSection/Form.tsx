import React from 'react'

import { Container, Form, Input, TextArea, Button, Card } from './styled'
import { Details } from './Details'

export const Contact = (): JSX.Element => (
  <>
    <Container>
      <Form method="POST" name="contact">
        <div id="container">
          <Card height={42} width={36}>
            <Input name="name" placeholder="Full Name" required type="text" width="33rem" />
            <Input name="email" placeholder="Email" required type="email" width="33rem" />
            <Input name="subject" placeholder="Subject" required type="text" width="33rem" />
            <TextArea name="message" placeholder="Enter your message" required />
          </Card>
          <div>
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
        <Button type="submit">Submit</Button>
      </Form>
    </Container>
  </>
)
