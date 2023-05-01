import React, { useContext } from 'react';
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FaUserCircle } from 'react-icons/fa';


import { AuthContext } from '../../../Provider/AuthProvider';

const NavigrationBar = () => {
        const {user} = useContext(AuthContext)
        return (
                <Container>
            <Navbar collapseOnSelect expand="lg" bg="light" variant="light">
      <Container>
         
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mx-auto">
             
            
            <Link className='ms-2 text-decoration-none text-dark font-bold' to="/category/0">Home</Link>
            <Link className='ms-2 text-decoration-none text-dark font-bold' to="#pricing">About</Link>
            <Link className='ms-2 text-decoration-none text-dark font-bold' to="#Career">Career</Link>
         
          
          </Nav>
          <Nav>
            { user &&  
              <FaUserCircle
            style={{fontSize: '2rem'}}
            ></FaUserCircle>}
          {user ? <Button variant="secondary">LogOut</Button>:
          <Link to = "/login">
          <Button variant="secondary">Loging</Button>
          </Link>
          }
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
                </Container>
        );
};

export default NavigrationBar;