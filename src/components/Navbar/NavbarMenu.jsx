import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-router-dom';
import MenuRouter from '../MenuRouter/MenuRouter';




 function NavbarMenu() {
  return (
    <>
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {MenuRouter.map((res) => {
              return(
                <>
                <Link to={res.path} style={{textDecoration: "none", color: "black", marginLeft: "10px"}}>{res.title}</Link>
                </>
              )
            })}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
    </>
  )
}

export default NavbarMenu;