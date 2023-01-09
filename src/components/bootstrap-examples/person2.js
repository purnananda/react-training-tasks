import React, { useState } from 'react'
import { Form, Container, Button } from 'react-bootstrap'

// Example for React-Bootstrap
const Person2 = () => {
  const [name, setName] = useState('')
  const [city, setCity] = useState('')

  const handleChange = event => {
    const { name, value } = event.target
    if (name === 'name') {
      setName(value)
    }

    if (name === 'city') {
      setCity(value)
    }
  }

  const handleSubmit = event => {
    event.preventDefault()
    // Add your submit logic here

    console.log('name: ', name)
    console.log('city: ', city)
  }

  return (
    <Container fluid='lg'>
      <h2>Using React-Bootstrap</h2>
      <Form onSubmit={handleSubmit}>
        <Form.Group controlId='name'>
          <Form.Label>Name : </Form.Label>
          <Form.Control
            type='text'
            name='name'
            value={name}
            onChange={handleChange}
          />
        </Form.Group>
        <Form.Group controlId='city'>
          <Form.Label>City : </Form.Label>
          <Form.Control
            type='text'
            name='city'
            value={city}
            onChange={handleChange}
          />
        </Form.Group>
        <Button variant='secondary' className='mt-3' type='submit'>
          Submit
        </Button>
      </Form>
    </Container>
  )
}

export default Person2
