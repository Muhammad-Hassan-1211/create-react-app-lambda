import React,{Component} from 'react';
import Tab from 'react-bootstrap/Tab';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Nav } from 'react-bootstrap';
import Image from 'react-bootstrap/Image';
import Caricon from '../../assets/images/icons/caricon.svg';
import bueatyspa from '../../assets/images/icons/bueatyspa.svg';
import electronic from '../../assets/images/icons/electronic.svg';
import fooddrink from '../../assets/images/icons/fooddrink.svg';
import healthfitness from '../../assets/images/icons/healthfitness.svg';
import homegarden from '../../assets/images/icons/homegraden.svg';
import movies from '../../assets/images/icons/movies.svg';
import plane from '../../assets/images/icons/plane.svg';
import arrow from '../../assets/images/icons/arrow.png';
import { Tabsitems } from './tabitems';

export class Offers extends Component{
   
    render(){
        
        return(
            <div className="container offersadmoibg ">
               <Tab.Container id="left-tabs-example" defaultActiveKey="first">
                    <Row>
                        <Col sm={4}>
                        <Nav variant="pills" className="flex-column adsmoitabnavbg">
                        <Nav.Item className="mt-2"></Nav.Item>
                            <Nav.Item className="p-3 admoitabbg p">
                                <h3>I'm looking for</h3>
                            </Nav.Item>
                            <Nav.Item className="tabroborder  p-0">
                                <Nav.Link eventKey="first" className=" p-0">
                                    <Row className="tabmarginbottom">
                                        <Col xl={2} md={2} xs={2} className="tabcolborder text-center">
                                        <Image className="img-fluid mt-3 ml-2"  src={Caricon}  alt="logo"/>
                                        </Col>
                                        <Col xl={10}  md={10} xs={10} className="p-1 " >
                                            <p className="mt-2 ml-2"> 
                                            Automotive
                                            </p>
                                        </Col>
                                    </Row>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="tabroborder  p-0">
                                <Nav.Link eventKey="second" className=" p-0">
                                    <Row className="tabmarginbottom">
                                        <Col xl={2} md={2} xs={2} className="tabcolborder text-center">
                                        <Image className="img-fluid mt-3 ml-2"  src={bueatyspa}  alt="logo"/>
                                        </Col>
                                        <Col xl={10}  md={10} xs={10} className="p-1 " >
                                            <p className="mt-2 ml-2"> 
                                            Beauty 
                                            </p>
                                        </Col>
                                    </Row>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="tabroborder  p-0">
                                <Nav.Link eventKey="third" className=" p-0">
                                    <Row className="tabmarginbottom">
                                        <Col xl={2} md={2} xs={2} className="tabcolborder text-center">
                                        <Image className="img-fluid mt-3 ml-2"  src={electronic}  alt="logo"/>
                                        </Col>
                                        <Col xl={10}  md={10} xs={10} className="p-1 " >
                                            <p className="mt-2 ml-2"> 
                                            Electronics
                                            </p>
                                        </Col>
                                    </Row>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="tabroborder  p-0">
                                <Nav.Link eventKey="forth" className=" p-0">
                                    <Row className="tabmarginbottom">
                                        <Col xl={2} md={2} xs={2} className="tabcolborder text-center">
                                        <Image className="img-fluid mt-3 ml-2"  src={fooddrink}  alt="logo"/>
                                        </Col>
                                        <Col xl={10}  md={10} xs={10} className="p-1 " >
                                            <p className="mt-2 ml-2"> 
                                            Food & Drink
                                            </p>
                                        </Col>
                                    </Row>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="tabroborder  p-0">
                                <Nav.Link eventKey="five" className=" p-0">
                                    <Row className="tabmarginbottom">
                                        <Col xl={2} md={2} xs={2} className="tabcolborder text-center">
                                        <Image className="img-fluid mt-3 ml-2"  src={plane}  alt="logo"/>
                                        </Col>
                                        <Col xl={10}  md={10} xs={10} className="p-1 " >
                                            <p className="mt-2 ml-2"> 
                                            Airplane
                                            </p>
                                        </Col>
                                    </Row>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="tabroborder  p-0">
                                <Nav.Link eventKey="six" className=" p-0">
                                    <Row className="tabmarginbottom">
                                        <Col xl={2} md={2} xs={2} className="tabcolborder  text-center">
                                        <Image className="img-fluid mt-3 ml-2"  src={healthfitness}  alt="logo"/>
                                        </Col>
                                        <Col xl={10}  md={10} xs={10} className="p-1 " >
                                            <p className="mt-2 ml-2"> 
                                            Health
                                            </p>
                                        </Col>
                                    </Row>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="tabroborder  p-0">
                                <Nav.Link eventKey="seven" className=" p-0">
                                    <Row className="tabmarginbottom">
                                        <Col xl={2} md={2} xs={2} className="tabcolborder text-center">
                                        <Image className="img-fluid mt-3 ml-2"  src={homegarden}  alt="logo"/>
                                        </Col>
                                        <Col xl={10}  md={10} xs={10} className="p-1 " >
                                            <p className="mt-2 ml-2"> 
                                            Home Garden
                                            </p>
                                        </Col>
                                    </Row>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="tabroborder  p-0">
                                <Nav.Link eventKey="eight" className=" p-0">
                                    <Row className="tabmarginbottom">
                                        <Col xl={2} md={2} xs={2} className="tabcolborder text-center">
                                        <Image className="img-fluid mt-3 ml-2"  src={Caricon}  alt="logo"/>
                                        </Col>
                                        <Col xl={10}  md={10} xs={10} className="p-1 " >
                                            <p className="mt-2 ml-2"> 
                                            Things To Do
                                            </p>
                                        </Col>
                                    </Row>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="tabroborder  p-0">
                                <Nav.Link eventKey="nine" className=" p-0">
                                    <Row className="tabmarginbottom">
                                        <Col xl={2} md={2} xs={2} className="tabcolborder text-center">
                                        <Image className="img-fluid mt-3 ml-2"  src={movies}  alt="logo"/>
                                        </Col>
                                        <Col xl={10}  md={10} xs={10} className="p-1 " >
                                            <p className="mt-2 ml-2"> 
                                            Movie
                                            </p>
                                        </Col>
                                    </Row>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="  p-0">
                                <Nav.Link eventKey="" className=" p-0">
                                <Row className="">
                                        
                                        <Col xl={10}  md={10} xs={10} className=" " >
                                            <p className="mt-2 ml-5"> 
                                                All Categories
                                            </p>
                                        </Col>
                                        <Col xl={2} md={2} xs={2} className="borderleftadmoi ">
                                        <Image className="img-fluid mt-3"  src={arrow}  alt="logo"/>
                                        </Col>
                                    </Row>
                                </Nav.Link>
                            </Nav.Item>
                            <Nav.Item className="mb-2"></Nav.Item>
                        </Nav>
                        </Col>
                        <Col sm={8}>
                        <Tab.Content>
                            <Tab.Pane eventKey="first">
                            <Tabsitems></Tabsitems>    
                            </Tab.Pane>
                            <Tab.Pane eventKey="second">
                            <Tabsitems></Tabsitems>   
                            </Tab.Pane>
                            <Tab.Pane eventKey="third">
                            <Tabsitems></Tabsitems>   
                            </Tab.Pane>
                            <Tab.Pane eventKey="forth">
                            <Tabsitems></Tabsitems>   
                            </Tab.Pane>
                            <Tab.Pane eventKey="five">
                            <Tabsitems></Tabsitems>   
                            </Tab.Pane>
                            <Tab.Pane eventKey="six">
                            <Tabsitems></Tabsitems>   
                            </Tab.Pane>
                            <Tab.Pane eventKey="seven">
                            <Tabsitems></Tabsitems>   
                            </Tab.Pane>
                            <Tab.Pane eventKey="eight">
                            <Tabsitems></Tabsitems>   
                            </Tab.Pane>
                            <Tab.Pane eventKey="nine">
                            <Tabsitems></Tabsitems>   
                            </Tab.Pane>
                        </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        );
    }
}
