import React,{Component} from 'react';
import playstorebtn from '../assets/images/playstore.png';
import applebtn from '../assets/images/apple.png';
import { Form    } from "react-bootstrap";
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Card from 'react-bootstrap/Card';
import bluelogo from '../assets/images/bluelogo.png';
import tickicon from '../assets/images/tick.svg';
import Image from 'react-bootstrap/Image';
import videoimg from '../assets/images/video.png';
import imgsection1 from '../assets/images/admoiimg.png';
import imgsection2 from '../assets/images/admoiimg1.png';
import footerimg1 from '../assets/images/footerimg1.svg';
import { Slider } from './comon/slider';
import { BlueSlider } from './comon/blueslider';
import { Offers } from './comon/offers';
import { Carditems } from './comon/carditem';
import { Footer } from './comon/footer';
import { Topbar } from './comon/topbar';
import { Header } from './comon/header';
export class Home extends Component{
    render(){
        return(
            <>
            <Topbar></Topbar>
            <Header></Header>
            <div className="container-fluid mainheaderbg">
                <Container >
                    <Row className="p-3">
                        <Col xl={7} className="mt-5">
                        <h1 className="">
                        <span className="spanh1">Fundraising </span></h1>
                        <h1 className="h1">
                        without <br/>
                        Fundraising
                        </h1>
                        <p className="p">
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem <br/>accusantium doloremque laudantium, totam rem aperiam
                        </p>
                        <span><img className="btnimg" src={playstorebtn}  alt="logo" /></span>
                        <span><img className="btnimg" src={applebtn}  alt="logo" /></span>
                        </Col>
                        <Col xl={5} className="admoiform">
                        <Card style={{ padding:'1.2rem' }}>
                            <Card.Body>
                                <img src={bluelogo} className="" alt="logo" />
                                <h3 className="mt-3 mb-3">
                                Join Canada's Biggest 
                                Cash Back Shopping Site
                                </h3>
                                <Row>
                                    <Col xl={1}>
                                    <Image src={tickicon} rounded alt="logo"/>
                                    
                                    </Col>
                                    <Col xl={10}>
                                        <p>
                                            Please email me newsletter, coupons and special 
                                            offers from Adsmoi
                                        </p>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col xl={1}>
                                    <Image src={tickicon} rounded alt="logo"/>
                                    
                                    </Col>
                                    <Col xl={10}>
                                        <p>
                                            Please email me newsletter, coupons and special 
                                            offers from Adsmoi
                                        </p>
                                    </Col>
                                </Row>
                                <Form>
                                    <Form.Group controlId="formBasicEmail">
                                        <Form.Control type="email" placeholder="*Email" />
                                    </Form.Group>

                                    <Form.Group controlId="formBasicPassword">
                                        <Form.Control type="password" placeholder="Password" />
                                    </Form.Group>
                                    <Form.Group controlId="formBasicCheckbox">
                                        <Form.Check type="checkbox" label="Please email me newsletter, coupons and special offers from Adsmoi" />
                                    </Form.Group>
                                   
                                <p className="text-center"> 
                                <small>You may withdraw this consent at any time. By becoming a member, you agree to our Terms & conditions and Privacy Policy.</small>
                                </p>
                                <Col xl={12} className="text-center">
                                <Button className="rounded-pill" variant="success">Register For Free</Button>{' '}
                                <p className="mt-2">
                                Already a member?<span className="pcolor"> Log In</span>
                                </p>
                                </Col>
                                
                                </Form>
                            </Card.Body>
                        </Card>
                        
                        </Col>
                    </Row>
                </Container>
               
                <Container fluid className="admoimainbg">
                    
                        <Row>
                            <Col xl={12} className="mt-5 ">
                            </Col>
                        </Row>
                        <Row>
                            <Col xl={12} className="mt-5 text-center">
                            <h1 className="admoiheading">
                            How It <span className="pcolor"> Works</span>
                        </h1>
                            </Col>
                        </Row>
                    
                    <Container className="admoimainbg2 ">
                        
                        <Row className="p-5 admoimainbg2">
                            <Col xl={4} className="mt-5 admoimainbg2">
                                <Row className="">
                                    <Col xl={3} className="">
                                    <h1 className="admoiheading1 admoidigit">
                                        01.
                                    </h1>
                                    </Col>
                                    <Col xl={9} className="">
                                        <h5 className="admoih5">
                                        Create a Cause
                                        </h5>
                                        <p className="admoidigit">
                                        You can create an Adsmoi cause for a 
                                        girl scout group, a church, or even a 
                                        presidential campaign. Your options 
                                        are truly endless.
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={4} className="mt-5 ">
                                <Row>
                                    <Col xl={3} className="">
                                    <h1 className="admoiheading1 admoidigit">
                                    02.
                                    </h1>
                                    </Col>
                                    <Col xl={9} className="">
                                        <h5 className="admoih5">
                                        Share Your Cause
                                        </h5>
                                        <p className="admoidigit">
                                            You can create an Adsmoi cause for a 
                                            girl scout group, a church, or even a 
                                            presidential campaign. Your options 
                                            are truly endless.
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                            <Col xl={4} className="mt-5 admoimainbg2">
                                <Row>
                                    <Col xl={3} className="">
                                    <h1 className="admoiheading1 admoidigit">
                                    03.
                                    </h1>
                                    </Col>
                                    <Col xl={9} className="">
                                        <h5 className="admoih5">
                                        They Shop
                                        </h5>
                                        <p className="admoidigit">
                                        You can create an Adsmoi cause for a 
                                        girl scout group, a church, or even a 
                                        presidential campaign. Your options 
                                        are truly endless.
                                        </p>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                    <Container>
                        <Row>
                            <Col xl={12}>
                                {/* <iframe width="100%" height="315" src="https://www.youtube.com/embed/Oa9aWdcCC4o" title="YouTube video player" 
                                frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe> */}
                                <Image className="img-fluid" src={videoimg}  alt="logo"/>
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid className="admoimainbg3 sectionmtb">
                        <Container className="mt-5 ">
                            <Row>
                                <Col xl={6} className="">
                                    <h1 className="admoiheading">
                                        <span className="pcolor"> Fundraising</span> without 
                                        Fundraising
                                    </h1>
                                    <p>
                                    Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam
                                    </p>
                                    <Image className="img-fluid" src={imgsection1}  alt="logo"/>
                                </Col>
                                <Col xl={6} className="">
                                    <Image className="img-fluid" src={imgsection2}  alt="logo"/>
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                    <Container fluid className="admoimainbg4 ">
                        <Container className="mt-5 ">
                            <Row>
                                <Col xl={4} className=" sectionmtb1">
                                    <h1 className="admoiheading admoih5">
                                    Over 750+<br/>Stores to shop
                                    </h1>
                                    <Button className="rounded-pill" variant="success">Register</Button>{' '}
                                </Col>
                                <Col xl={8} className="sectionmtb1">
                                    <Slider></Slider>
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                    <Container fluid className="admoimainbg5 ">
                        <Container>
                            <Row>
                                <Col xl={8} className=" sectionmtb1">
                                    <BlueSlider></BlueSlider>
                                   
                                </Col>
                                <Col xl={4} className="sectionmtb1 text-right">
                                <h1 className="admoiheading ">
                                    Over 750+<br/>Stores to shop
                                    </h1>
                                    <Button className="rounded-pill" variant="success">Register</Button>{' '}
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                    <Container fluid className="admoimainbg6">
                        <Container>
                            <Row>
                                <Col xl={12} className=" sectionmtb1">
                                <h1 className="admoiheading text-center">
                                        <span className="pcolor mb-5"> Cash Back</span> Offers
                                    </h1>
                                    <Offers></Offers>
                                </Col>
                            </Row>
                        </Container>
                    </Container>
                    <Container className="sectionmtb1">
                        <Row>
                        <Carditems></Carditems>
                        <Carditems></Carditems>
                        <Carditems></Carditems>
                        <Carditems></Carditems>
                        <Carditems></Carditems>
                        <Carditems></Carditems>
                     
                        </Row>
                        <Row className="mt-3 text-center">
                        
                            <Carditems></Carditems>
                            <Carditems></Carditems>
                            <Carditems></Carditems>
                            <Carditems></Carditems>
                            <Carditems></Carditems>
                            <Carditems></Carditems>
                         
                        
                            <Col xl={12}>
                                <Button className="rounded-pill mt-3 text-center" variant="success">View All</Button>{' '}
                            </Col>
                        </Row>
                    </Container>
                    <Container fluid>
                        <Footer></Footer>
                    </Container>
                </Container>
            </div>
            
            </>
        )
    }
}