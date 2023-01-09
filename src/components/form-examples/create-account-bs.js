import React, { useState } from 'react'
import { Container, Form, Button, Row, Col, Alert } from 'react-bootstrap'

const fields = {
  name: 'name',
  email: 'email',
  mobile: 'mobile',
  username: 'username',
  password: 'password',
  confirmPassword: 'confirmPassword'
}

const defaultAccountData = {
  name: '',
  email: '',
  mobile: '',
  username: '',
  password: '',
  confirmPassword: ''
}

const CreateAccountBS = () => {
  const [accounts, setAccounts] = useState([])
  const [accountData, setAccountData] = useState(defaultAccountData)
  const [isFormValid, setIsFormValid] = useState(false)
  const [errors, setErrors] = useState([])

  // Function to validate the form values
  const validateForm = ({ formData }) => {
    let isValid = true
    const tempErrors = []

    // Validate the name field
    if (formData.name.trim().length === 0) {
      isValid = false
      tempErrors.push('Please enter a valid name.')
    }
    // Validate the username field
    if (formData.username.trim().length === 0) {
      isValid = false
      tempErrors.push('Please enter a valid username.')
    }
    // Validate the email field
    if (formData.email.trim().length === 0 || !formData.email.includes('@')) {
      isValid = false
      tempErrors.push('Please enter a valid email address.')
    }
    // Validate the mobile field
    if (formData.mobile.trim().length === 0 || isNaN(formData.mobile)) {
      isValid = false
      tempErrors.push('Please enter a valid mobile number.')
    }
    // Validate the password field
    if (formData.password.trim().length === 0) {
      isValid = false
      tempErrors.push('Please enter a valid password.')
    }
    // Validate the confirmPassword field
    if (formData.confirmPassword !== formData.password) {
      isValid = false
      tempErrors.push('Password and Confirm password should match.')
    }

    // Set the errors.
    setErrors(tempErrors)

    // Set form is valid, If all fields are valid
    setIsFormValid(isValid)
  }

  const onFieldChange = event => {
    const { name, value } = event.target

    let newAccountData = accountData

    switch (name) {
      case fields.name:
        newAccountData = { ...accountData, name: value }
        break
      case fields.email:
        newAccountData = { ...accountData, email: value }
        break
      case fields.mobile:
        newAccountData = { ...accountData, mobile: value }
        break
      case fields.username:
        newAccountData = { ...accountData, username: value }
        break
      case fields.password:
        newAccountData = { ...accountData, password: value }
        break
      case fields.confirmPassword:
        newAccountData = { ...accountData, confirmPassword: value }
        break
      default:
        break
    }

    setAccountData(newAccountData)
    validateForm({ formData: newAccountData })
  }

  // Function to handle form submission
  const handleSubmit = event => {
    event.preventDefault()
    // Validate the form values here
    // If the form is valid, submit the values to the server

    setAccounts([...accounts, accountData])
    setAccountData(defaultAccountData)
    setIsFormValid(false)
  }

  return (
    <Container fluid='sm'>
      <br />
      <h2>Create Account</h2>

      {!isFormValid && errors?.length > 0 && (
        <Alert variant='danger'>
          {errors.map(err => {
            return <div>{err}</div>
          })}
        </Alert>
      )}

      <form onSubmit={handleSubmit}>
        <Row>
          <Form.Group as={Col} controlId='formName'>
            <Form.Label>Name</Form.Label>
            <Form.Control
              type='text'
              value={accountData.name}
              name={fields.name}
              onChange={onFieldChange}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId='formEmail'>
            <Form.Label>Email</Form.Label>
            <Form.Control
              type='email'
              value={accountData.email}
              name={fields.email}
              onChange={onFieldChange}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId='formMobile'>
            <Form.Label>Mobile</Form.Label>
            <Form.Control
              type='text'
              value={accountData.mobile}
              name={fields.mobile}
              onChange={onFieldChange}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId='formUsername'>
            <Form.Label>Username</Form.Label>
            <Form.Control
              type='text'
              value={accountData.username}
              name={fields.username}
              onChange={onFieldChange}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId='formPassword'>
            <Form.Label>Password</Form.Label>
            <Form.Control
              type='password'
              value={accountData.password}
              name={fields.password}
              onChange={onFieldChange}
            />
          </Form.Group>
        </Row>
        <Row>
          <Form.Group as={Col} controlId='formConfirmPassword'>
            <Form.Label>Confirm Password</Form.Label>
            <Form.Control
              type='password'
              value={accountData.confirmPassword}
              name={fields.confirmPassword}
              onChange={onFieldChange}
            />
          </Form.Group>
        </Row>
        <br />
        <Row>
          <Col>
            <Button disabled={!isFormValid} variant='primary' type='submit'>
              Submit
            </Button>
          </Col>
        </Row>
      </form>

      <br />
      {accounts.length > 0 && (
        <div>
          <table className='table'>
            <thead>
              <tr>
                <th>#</th>
                <th>Name</th>
                <th>Username</th>
                <th>Email</th>
                <th>Mobile</th>
              </tr>
            </thead>
            <tbody>
              {accounts.map((account, index) => {
                return (
                  <tr key={account.username}>
                    <td>{index + 1}</td>
                    <td>{account.name}</td>
                    <td>{account.username}</td>
                    <td>{account.email}</td>
                    <td>{account.mobile}</td>
                  </tr>
                )
              })}
            </tbody>
          </table>
        </div>
      )}
    </Container>
  )
}

export default CreateAccountBS
