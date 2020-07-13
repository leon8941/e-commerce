import React from 'react'
import { withRouter } from 'next/router'
import { Navbar } from 'react-bootstrap'
import Login from './auth/Login'

const Header = ({ router: { pathname } }) => 
  <Navbar className='justify-content-between navBar'>
    <Navbar.Brand className="navBrand">GraphQL Tutorial App</Navbar.Brand>
    <Navbar.Collapse className="justify-content-end navContainer navButton">
      <Login />
    </Navbar.Collapse>
  </Navbar>

export default withRouter(Header)