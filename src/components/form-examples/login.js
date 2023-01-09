import React from 'react'
import { Form, Button, Col } from 'react-bootstrap'

const Login = () => {
  // Declare state variables to store the form values
  const [username, setUsername] = React.useState('')
  const [password, setPassword] = React.useState('')

  // Function to handle form submission
  const handleSubmit = event => {
    event.preventDefault()
    // Validate the form values here
    // If the form is valid, submit the values to the server for authentication
  }

  // Function to validate the form values
  const validateForm = () => {
    // Validate the username field
    if (username.trim().length === 0) {
      return 'Please enter a valid username'
    }
    // Validate the password field
    if (password.trim().length === 0) {
      return 'Please enter a valid password'
    }
    // If all fields are valid, return true
    return true
  }

  return (
    <div>
      <Form onSubmit={handleSubmit}>
        <Form.Group as={Col} controlId='formUsername'>
          <Form.Label>Username</Form.Label>
          <Form.Control
            type='text'
            value={username}
            onChange={event => setUsername(event.target.value)}
          />
        </Form.Group>
        <Form.Group as={Col} controlId='formPassword'>
          <Form.Label>Password</Form.Label>
          <Form.Control
            type='password'
            value={password}
            onChange={event => setPassword(event.target.value)}
          />
        </Form.Group>
        <Button variant='primary' type='submit'>
          Login
        </Button>
      </Form>
    </div>
  )
}

export default Login
