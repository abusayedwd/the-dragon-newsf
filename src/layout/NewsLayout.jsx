import React from 'react';
import Header from '../pages/shared/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../pages/shared/Footer/Footer';
import { Col, Container, Row } from 'react-bootstrap';
import Letnav from '../pages/shared/leftNav/Leftnav';
import Rightnav from '../pages/shared/rightnav/Rightnav';

const NewsLayout = () => {
        return (
                <div>
                        <Header></Header>
                        <Container className='mt-5'>

                                <Row>
                          
                                        <Col lg={9}>
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

export default NewsLayout;