
import React,{Component} from 'react';
import { Col, Container, Row,Image, Nav, InputGroup, FormControl,Button } from 'react-bootstrap';
import headerlogo from '../../assets/images/headerlogo.png';
import { Topfooter } from './topfooter';

export class Footer extends Component{
    render(){
        return(
            <>
            <Topfooter></Topfooter>
           <Container fluid className="admoimainbg7">
               <Container>
                    <Row>
                    <Col xl={12}>
                    <Image src={headerlogo} className="mt-5" alt="logo" />
                    </Col>
                    <Col xl={3} md={6}>
                        <h3 className="p mt-3 mb-2">
                            About
                        </h3>
                        <p className="p">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                    </Col>
                    <Col xl={3} md={6}>
                    <h3 className="p mt-3 mb-2">
                        Quick Links
                        </h3>
                        
                        <Nav defaultActiveKey="/home" className="flex-column">
                            <Nav.Link className="nav-link1" href="/home">Home</Nav.Link>
                            <Nav.Link className="nav-link1" eventKey="link-1">About Us</Nav.Link>
                            <Nav.Link className="nav-link1" eventKey="link-2">Services</Nav.Link>
                            <Nav.Link className="nav-link1" eventKey="link-2">Charaties</Nav.Link>
                            <Nav.Link className="nav-link1" eventKey="link-2">Contact</Nav.Link>
                        </Nav>
                         
                    </Col>
                    <Col xl={3} md={6}>
                    <h3 className="p mt-3 mb-2">
                        Contact
                        </h3>
                        <p className="p">
                        Address : B11/9-OC, Suite YB92C, Portsmouth, NY 93920
                        </p>
                        <p className="p">
                        Phone : (123) 456-7890
                        </p>
                        <p className="p">
                        Hours : Mon - Sat | 9:00 to 6:00
                        </p>
                        <p className="p">
                        Email : help@adsmoi.com
                        </p>
                    </Col>
                    <Col xl={3} md={6}>
                    <h3 className="p mt-3 mb-2">
                            About
                        </h3>
                        <p className="p">
                        Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
                        Lorem Ipsum has been the industry's standard dummy text ever since the 1500s
                        </p>
                        <div>
                        <InputGroup className="mb-3 signupfromfooter form-control12">
                            <FormControl className="form-control12"
                            placeholder="Enter Your Email"
                            aria-label="Recipient's username"
                            aria-describedby="basic-addon2"
                            />
                            
                            <Button variant="success" className="subscribebtn">Submit</Button>
                            
                        </InputGroup>
                       
                        </div>
                    </Col>
                    </Row>
                </Container>
           </Container>
           </>
        )
    }
}