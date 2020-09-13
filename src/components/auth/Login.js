import React, { useState } from 'react'
import { Router } from 'next/router'
import { Button, Form } from 'react-bootstrap'

const Login = () => {
  const [email, setEmail] = useState(null)
  const [password, setPassword] = useState(null)

  const handleOnSubmit = e => {
    e.preventDefault()
    // Router.push('/api/login');
  }

  return (
    <div className="overlay">
      <div className="overlay-content">
        <div className="overlay-heading">
          Welcome to the Ecommerce App
        </div>
        <div className="overlay-message">Please login to continue</div>
        <div className="overlay-action">
          <Form 
              onSubmit={handleOnSubmit}>
            <Form.Group controlId="formBasicEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="Enter email" onChange={(e) => setEmail(e.target.value)} />
              <Form.Text className="text-muted">
                We'll never share your email with anyone else.
              </Form.Text>
            </Form.Group>

            <Form.Group controlId="formBasicPassword">
              <Form.Label>Password</Form.Label>
              <Form.Control type="password" placeholder="Password" onChange={(e) => setPassword(e.target.value)} />
            </Form.Group>
            <Button
              id="qsLoginBtn"
              variant="primary"
              className="btn-margin loginBtn"
              type="submit"
            >
              Sign In
            </Button>
          </Form>
          
        </div>
      </div>
    </div>
  )
}

export default Login