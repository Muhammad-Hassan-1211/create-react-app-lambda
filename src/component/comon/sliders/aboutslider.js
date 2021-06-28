import React,{Component} from 'react';
import tabimage from '../../../assets/images/icons/tabpic1.png';
import locationicon from '../../../assets/images/icons/location.svg';
import StarRatings from 'react-star-ratings';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Image from 'react-bootstrap/Image';
import Button from 'react-bootstrap/Button';
import Carousel from 'react-bootstrap/Carousel';
export class Aboutslider extends Component{
    render(){

       
        return(
            <>
            <Carousel indicators={true}>
                <Carousel.Item interval={1000}>
                <Row>
                    <Col xl={12}>
                        <Image className="img-fluid mt-3 ml-2"  src={tabimage}  alt="logo"/>
                    </Col>
                    <Col xl={12} className="ml-3 mt-2">
                    
                    <StarRatings 
                    caption="Small!"
                        starRatedColor="#EC982B"
                        starEmptyColor="#EC982B"
                        starHoverColor='rgb(230, 67, 47)'
                        starDimension='20px'
                        starSpacing='2px'
                        changeRating={this.changeRating}
                        numberOfStars={5}
                        name='rating'
                        /><small>(679 rates)</small> <span>Expires in: <span className="spancolr">25 days</span></span>
                    </Col>
                    <Col>
                        <Row>
                            <Col xl={8} md={8} className="ml-3 mt-2">
                            <h3>
                            Get Car Wash With Up To 20% Discount
                            </h3>
                        </Col>
                        <Col xl={3} md={3} className="mt-2 text-right">
                            <h3>$80 	&nbsp; <span><small><del>$100</del></small></span></h3>
                            <Button className="rounded-pill" variant="success">View Deals</Button>{' '}
                        </Col>
                        </Row>
                    </Col>
                
                    <Col xl={11} className="ml-3">
                        <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam
                        </p>
                    <Image className="img-fluid "  src={locationicon}  alt="logo"/> <span>TORONTO, CANADA</span>
                    
                    </Col>
                </Row>
        
                </Carousel.Item>
                <Carousel.Item interval={500}>
                    <Row>
                        <Col xl={12}>
                                <Image className="img-fluid mt-3 ml-2"  src={tabimage}  alt="logo"/>
                            </Col>
                        <Col xl={12} className="ml-3 mt-2">
                        
                        <StarRatings 
                        caption="Small!"
                            starRatedColor="#EC982B"
                            starEmptyColor="#EC982B"
                            starHoverColor='rgb(230, 67, 47)'
                            starDimension='20px'
                            starSpacing='2px'
                            changeRating={this.changeRating}
                            numberOfStars={5}
                            name='rating'
                            /><small>(679 rates)</small> <span>Expires in: <span className="spancolr">25 days</span></span>
                        </Col>
                        <Col>
                            <Row>
                                <Col xl={8} md={8} className="ml-3 mt-2">
                                <h3>
                                Get Car Wash With Up To 20% Discount
                                </h3>
                            </Col>
                            <Col xl={3} md={3} className="mt-2 text-right">
                                <h3>$80 	&nbsp; <span><small><del>$100</del></small></span></h3>
                                <Button className="rounded-pill" variant="success">View Deals</Button>{' '}
                            </Col>
                            </Row>
                        </Col>
                    
                        <Col xl={11} className="ml-3">
                        <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam
                        </p>
                    <Image className="img-fluid "  src={locationicon}  alt="logo"/> <span>TORONTO, CANADA</span>
                    
                    </Col>
                    </Row>
                </Carousel.Item>
                <Carousel.Item>
                <Row>
                        <Col xl={12}>
                                <Image className="img-fluid mt-3 ml-2"  src={tabimage}  alt="logo"/>
                            </Col>
                        <Col xl={12} className="ml-3 mt-2">
                        
                        <StarRatings 
                        caption="Small!"
                            starRatedColor="#EC982B"
                            starEmptyColor="#EC982B"
                            starHoverColor='rgb(230, 67, 47)'
                            starDimension='20px'
                            starSpacing='2px'
                            changeRating={this.changeRating}
                            numberOfStars={5}
                            name='rating'
                            /><small>(679 rates)</small> <span>Expires in: <span className="spancolr">25 days</span></span>
                        </Col>
                        <Col>
                            <Row>
                                <Col xl={8} md={8} className="ml-3 mt-2">
                                <h3>
                                Get Car Wash With Up To 20% Discount
                                </h3>
                            </Col>
                            <Col xl={3} md={3} className="mt-2 text-right">
                                <h3>$80 	&nbsp; <span><small><del>$100</del></small></span></h3>
                                <Button className="rounded-pill" variant="success">View Deals</Button>{' '}
                            </Col>
                            </Row>
                        </Col>
                    
                        <Col xl={11} className="ml-3">
                        <p>
                        Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam
                        </p>
                    <Image className="img-fluid "  src={locationicon}  alt="logo"/> <span>TORONTO, CANADA</span>
                    
                    </Col>
                    </Row>
                </Carousel.Item>
            </Carousel>
            </>
        )
    }
}