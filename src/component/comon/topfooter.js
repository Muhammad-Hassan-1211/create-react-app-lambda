import { Button } from 'react-bootstrap';
import React,{Component} from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import locationicon from '../../assets/images/icons/sectionimg.png';
import footerimg1 from '../../assets/images/footerimg1.svg';
import Image from 'react-bootstrap/Image';
export class Topfooter extends Component{
    render(){
        return(
            <>
           <Container fluid className="admoimainbg7 ">
                <Container>
                    <Row>
                    <Col xl={6} md={6} className="sectionmtb">
                    <h1 className="">
                            <span className="spanh1">Charity </span></h1>
                            <h1 className="h1">
                             Of The Day
                            </h1>
                            <p className="admoih5 mt-5 mb-5">
                            Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam
                            </p>
                            <Button className="rounded-pill mt-2" variant="success">View All Charities</Button>{' '}
                           
                            <Button className="rounded-pill mt-2"  variant="outline-success">Register Charity</Button>{' '}
                    </Col>
                    <Col xl={6} md={6} className="sectionmtb1">
                    <Image className="img-fluid "  src={locationicon}  alt="logo"/> 
                    
                    </Col>
                    </Row>
                </Container>
           </Container>
           <Container fluid>
           <Image className="img-fluid" src={footerimg1}  alt="logo"/>
           </Container>
           </>
        )
    }
}