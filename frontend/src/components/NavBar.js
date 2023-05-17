import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from 'react-bootstrap/Button';
import { Link } from 'react-router-dom';



const NavBar = () => {
  return (
    <>

   <nav>

    <div className = "navbar">
      

<Navbar bg="light" expand="lg" id='nav'>
      <Container>

        
        <Navbar.Brand href="/doctors" id = "brand">Healthify</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

          <Link to='/'>
            <Nav.Link href="#home">Home</Nav.Link>

            </Link>
            <Link to='/doctors'>
            <Nav.Link href="#link">Doctors</Nav.Link>
            </Link>
            <Nav.Link href="#link">Book  Appointment</Nav.Link>

            <Link to='/labs'>
            <Nav.Link href="#link">Labs</Nav.Link>
            </Link>

            <Link to="/login"><Button variant="primary" id = "login">Login</Button>{' '}</Link>
            <Link to="/register"><Button variant="outline-primary" id = "signup">Sign up</Button>{' '}</Link>
            
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
      
    </div>

    </nav>
    </>
  )
}

export default NavBar

