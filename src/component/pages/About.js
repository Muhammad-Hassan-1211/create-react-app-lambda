import React,{Component} from 'react';

import icon1 from '../../assets/images/icons/icon1.png';
import icon2 from '../../assets/images/icons/icon2.png';
import icon3 from '../../assets/images/icons/icon3.png';
import icon4 from '../../assets/images/icons/icon4.png';
import Image from 'react-bootstrap/Image';
import { Footer } from '../comon/footer';
import { Header } from '../comon/header';
import { Topbar } from '../comon/topbar';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Searchbar } from '../comon/commonelements/searchbar';
import { Aboutslider } from '../comon/sliders/aboutslider';
import { Aboutstores } from '../comon/stores/aboutstores';
import { Button, Dropdown, DropdownButton } from 'react-bootstrap';
import { Aboutcarditems } from '../comon/stores/aboutcarditems';
export class About extends Component{
     
    render(){
        return(
            <>
            <Topbar></Topbar>
            <Header></Header>
            <Container fluid className=" pt-5 pb-5 mainheaderbg">
            <Container className="">
                    <Row className="p-3">
                        <Col xl={6} className="mt-5">
                        <h1 className="h1">
                        <span className="spanh1">Shop </span>at </h1>
                        <h1 className="h1">
                        Best Stores
                         

                        </h1>
                        <p className="p">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam
                        </p>
                        </Col>
                        <Col xl={6} className="mt-5">
                            <Row>
                                <Col xl={3} md={3} xs={4} className="p-1"> <Image src={icon1} className="img-fluid" rounded alt="logo"/></Col>
                                <Col xl={3} md={3} xs={4} className="p-1"><Image src={icon2} className="img-fluid" rounded alt="logo"/></Col>
                                <Col xl={3} md={3} xs={4} className="p-1"><Image src={icon3} className="img-fluid" rounded alt="logo"/></Col>
                                <Col xl={3} md={3} xs={4} className="p-1"><Image src={icon4} className="img-fluid" rounded alt="logo"/></Col>
                            </Row>
                            <Row>
                                <Col xl={12} className="mt-4">
                                    <Searchbar></Searchbar>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
            <Container fluid className="sectionmtb1  admoiaboutbg">
                <Container className="p-3">
                    <Aboutslider></Aboutslider>
                </Container>
            </Container>
            <Container fluid className="admoiaboutbg1">
                <Container className="p-3">
                    <Row>
                        <Col xl={4}>
                            <Aboutstores></Aboutstores>
                        </Col>
                        <Col xl={8}>
                            <Row>
                                <Col xl={5}>
                                <h2 className="h1"><span className="hcolor">All</span>&nbsp;
                                     <span className="spanh1">Stores </span> </h2>
                                     <p className="mt-0">
                                     Our Choices for the Week
                                     </p>
                                </Col>
                                <Col xl={7} className="text-right mt-4 mt-2 mb-2 ">
                                    
                                <DropdownButton className="aboutcardtop" id="aboutselectbarbg" title="All Categories">
                                    <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-2">Another action</Dropdown.Item>
                                    <Dropdown.Item href="#/action-3">Something else</Dropdown.Item>
                                </DropdownButton>
                                </Col>
                            </Row>
                            <Row>
                                <Aboutcarditems></Aboutcarditems>
                                <Aboutcarditems></Aboutcarditems>
                                <Aboutcarditems></Aboutcarditems>
                                <Aboutcarditems></Aboutcarditems>
                                <Aboutcarditems></Aboutcarditems>
                                <Aboutcarditems></Aboutcarditems>
                                <Aboutcarditems></Aboutcarditems>
                                <Aboutcarditems></Aboutcarditems>
                                <Aboutcarditems></Aboutcarditems>
                                <Aboutcarditems></Aboutcarditems>
                                <Aboutcarditems></Aboutcarditems>
                                <Aboutcarditems></Aboutcarditems>
                                <Aboutcarditems></Aboutcarditems>
                                <Aboutcarditems></Aboutcarditems>
                                <Aboutcarditems></Aboutcarditems>
                                <Aboutcarditems></Aboutcarditems>
                                <Aboutcarditems></Aboutcarditems>
                                <Aboutcarditems></Aboutcarditems>
                                <Aboutcarditems></Aboutcarditems>
                                <Aboutcarditems></Aboutcarditems>

                            </Row>
                            <Row>
                                <Col xl={12} className="text-center">
                                    
                                    <Button className="rounded-pill mt-5" variant="success">View All</Button>{' '}
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Container>
            </Container>
            
            <Footer></Footer>
            </>
        )
    }
}