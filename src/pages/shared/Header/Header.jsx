import React from 'react';
import logo from '../../../assets/logo.png'
import moment from 'moment';
import Marquee from "react-fast-marquee";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';

const Header = () => {
        return (
                <div className='container mt-3'>
                        <div className='text-center'>
                                <img src={logo} alt="" />
                                <p>Journalism Without Fear or Favour</p>

                                <p className='border w-25 m-auto fw-bold border-2 border-success '>{moment().format("dddd, MMMM D, YYYY, h:mm a")}</p>

                        </div>
        <div className='d-flex m-3'>
                <Button variant="danger">Latest</Button>
                <Marquee className='text-danger' speed={80} pauseOnHover={true}>
                        I can be a React component, multiple React components, or just some text.
                </Marquee>
    </div>
    <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
         
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
            <Nav.Link href="#features">Home</Nav.Link>
            <Nav.Link href="#pricing">About</Nav.Link>
            <Nav.Link href="#pricing">Career</Nav.Link>
          
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Profile</Nav.Link>
            <Button variant="secondary">Loging</Button>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
                </div>
        );
};

export default Header;