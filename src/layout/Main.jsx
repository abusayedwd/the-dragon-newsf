import React from 'react';
import Header from '../pages/shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Letnav from '../pages/shared/leftNav/Leftnav';
import Rightnav from '../pages/shared/rightnav/Rightnav';
import NavigrationBar from '../pages/shared/NavigratonBar/NavigrationBar';

const Main = () => {
        return (
                <div>
                      <Header></Header>
                      <NavigrationBar></NavigrationBar>
          <Container className='mt-5'>
      
      <Row>
        <Col lg={3}>
               <Letnav> </Letnav>
        </Col>
        <Col lg={6}>
                <Outlet></Outlet>
         </Col>
        <Col lg={3}>
                <Rightnav></Rightnav>
        </Col>
      </Row>
    </Container>
                      <Footer></Footer>
                </div>
        );
};

export default Main;