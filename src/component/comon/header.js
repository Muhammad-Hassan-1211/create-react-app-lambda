import React,{Component} from 'react';
import headerlogo from '../../assets/images/headerlogo.png';
import searchicon from '../../assets/images/searchicon.svg';
import Navbar from 'react-bootstrap/Navbar';
import { Nav } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
export class Header extends Component{
    render(){
        return(
            <div className="mainheaderbg">
                <Container>
                    <Row>
                        <Col xl={12}><Navbar collapseOnSelect expand="lg" bg=""  variant="dark">
                            <Navbar.Brand href="/"><img src={headerlogo} className="" alt="logo" /></Navbar.Brand>
                            <Navbar.Toggle aria-controls="responsive-navbar-nav" />
                            <Navbar.Collapse id="responsive-navbar-nav">
                            <Nav className="mr-auto">
                                <Nav.Link className="ml-2" href="/About">About</Nav.Link>
                                <Nav.Link href="#pricing">All Stores</Nav.Link>
                                <Nav.Link href="#pricing">Services</Nav.Link>
                                <Nav.Link href="#pricing">Contact</Nav.Link>
                            </Nav>
                            <Nav>
                                <Nav.Link href="#deets"><img src={searchicon} className="" alt="logo" /></Nav.Link>
                                <Nav.Link href="#deets">Login</Nav.Link>
                                <Nav.Link href="#deets"><>
                                <Button className="rounded-pill" variant="success">Register</Button>{' '}
                                </></Nav.Link>
                            
                            </Nav>
                            </Navbar.Collapse>
                            </Navbar>
                        </Col>
                    </Row>
                </Container>
                
            </div>
        )
    }
}