const { withRouter } = require('next/router')
const { Navbar } = require('react-bootstrap')
const Login = require('./auth/Login').default

const Header = ({ router: { pathname } }) => 
  <Navbar className='justify-content-between navBar'>
    <Navbar.Brand className="navBrand">GraphQL Tutorial App</Navbar.Brand>
    <Navbar.Collapse className="justify-content-end navContainer navButton">
      <Login />
    </Navbar.Collapse>
  </Navbar>

export default withRouter(Header)