import React from 'react';
import { Button, Card, ListGroup } from 'react-bootstrap';
import { FaBeer, FaFacebook, FaGithub, FaGoogle, FaInstagram, FaTwitter, FaWhatsapp } from 'react-icons/fa';
import Qzon from '../Qzon/Qzon';
import bg from '../../../assets/bg.png'



const Rightnav = () => {
        return (
                <div>
                        <div>
                                <h3>Login with !</h3>
                                <Button className='' variant="outline-primary">
                                        <FaGoogle />  Loging with Google
                                </Button> <br />
                                <Button className='mt-2' variant="outline-secondary">
                                        <FaGithub /> Login with github</Button>
                        </div>
                        <div className='mt-3 mb-2'>
                                <h2>Find us on</h2>
                <ListGroup>
                        <a className='text-decoration-none' href="https://www.facebook.com">
                        <ListGroup.Item> <FaFacebook></FaFacebook> Facebook</ListGroup.Item>
                        </a>
                        <ListGroup.Item> <FaTwitter></FaTwitter> Twitter </ListGroup.Item>
                        <ListGroup.Item> <FaInstagram></FaInstagram> Instagram </ListGroup.Item>
                        <ListGroup.Item> <FaWhatsapp></FaWhatsapp> Whatsapp </ListGroup.Item>
                         
                </ListGroup>
                        </div>
                        <Qzon></Qzon>
                        <div className='text-center'>
                        <Card className="bg-dark text-white" >
      <Card.Img style={{height:'350px'}} className='' src= {bg} alt="Card image" />
      <Card.ImgOverlay>
        <Card.Title className='text-center mt-3'>Create an Amazing Newspaper</Card.Title>
        <Card.Text>
        Discover thousands of options, easy to customize layouts, one-click to import demo and much more.
        </Card.Text>
        <Button variant="secondary">Learn More</Button>
      </Card.ImgOverlay>
    </Card>
                        </div>
                </div>

        );
};

export default Rightnav;