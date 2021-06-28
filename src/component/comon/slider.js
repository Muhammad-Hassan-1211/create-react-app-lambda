import React,{Component} from 'react';
import Carousel from 'react-multi-carousel';
import Card from 'react-bootstrap/Card'
import 'react-multi-carousel/lib/styles.css';
import Sliderlogo from '../../assets/images/sliderlogo.png';
import Image from 'react-bootstrap/Image'
export class Slider extends Component{
    
    render(){
        const responsive = {
            superLargeDesktop: {
              // the naming can be any, depends on you.
              breakpoint: { max: 4000, min: 3000 },
              items: 5
            },
            desktop: {
              breakpoint: { max: 3000, min: 1024 },
              items: 3
            },
            tablet: {
              breakpoint: { max: 1024, min: 464 },
              items: 2
            },
            mobile: {
              breakpoint: { max: 464, min: 0 },
              items: 1
            }
          };
        return(
            <div className="container">
                <Carousel responsive={responsive} 
                    // swipeable={false}
                    // draggable={false}
                    // showDots={true}

                    // ssr={true} // means to render carousel on server-side.
                    // infinite={true}
                    // autoPlay={this.props.deviceType !== "mobile" ? true : false}
                    // autoPlaySpeed={1000}
                    // keyBoardControl={true}
                    // customTransition="all .5"
                    // transitionDuration={500}
                    // containerClass="carousel-container"
                    // removeArrowOnDeviceType={["tablet", "mobile"]}
                    // deviceType={this.props.deviceType}
                    // itemClass="carousel-item-padding-40-px"
                    >
                    <div className="m-1 text-center">
                        <Card>
                            <Card.Body>
                                <Image className="img-fluid mb-2" src={Sliderlogo}  alt="logo"/>
                                <Card.Title>80% OFF</Card.Title>
                                <Card.Text>
                                Get Flat 80% OFF On First Order
                                </Card.Text>
                                <Card.Text>
                                <small>Ends 15.01.2021</small>
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="m-1 text-center">
                        <Card>
                            <Card.Body>
                                <Image className="img-fluid mb-2" src={Sliderlogo}  alt="logo"/>
                                <Card.Title>80% OFF</Card.Title>
                                <Card.Text>
                                Get Flat 80% OFF On First Order
                                </Card.Text>
                                <Card.Text>
                                <small>Ends 15.01.2021</small>
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="m-1 text-center">
                        <Card>
                            <Card.Body>
                                <Image className="img-fluid mb-2" src={Sliderlogo}  alt="logo"/>
                                <Card.Title>80% OFF</Card.Title>
                                <Card.Text>
                                Get Flat 80% OFF On First Order
                                </Card.Text>
                                <Card.Text>
                                <small>Ends 15.01.2021</small>
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="m-1 text-center">
                        <Card>
                            <Card.Body>
                                <Image className="img-fluid mb-2" src={Sliderlogo}  alt="logo"/>
                                <Card.Title>80% OFF</Card.Title>
                                <Card.Text>
                                Get Flat 80% OFF On First Order
                                </Card.Text>
                                <Card.Text>
                                <small>Ends 15.01.2021</small>
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="m-1 text-center">
                        <Card>
                            <Card.Body>
                                <Image className="img-fluid mb-2" src={Sliderlogo}  alt="logo"/>
                                <Card.Title>80% OFF</Card.Title>
                                <Card.Text>
                                Get Flat 80% OFF On First Order
                                </Card.Text>
                                <Card.Text>
                                <small>Ends 15.01.2021</small>
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="m-1 text-center">
                        <Card>
                            <Card.Body>
                                <Image className="img-fluid mb-2" src={Sliderlogo}  alt="logo"/>
                                <Card.Title>80% OFF</Card.Title>
                                <Card.Text>
                                Get Flat 80% OFF On First Order
                                </Card.Text>
                                <Card.Text>
                                <small>Ends 15.01.2021</small>
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                    </div>
                    <div className="m-1 text-center">
                        <Card>
                            <Card.Body>
                                <Image className="img-fluid mb-2" src={Sliderlogo}  alt="logo"/>
                                <Card.Title>80% OFF</Card.Title>
                                <Card.Text>
                                Get Flat 80% OFF On First Order
                                </Card.Text>
                                <Card.Text>
                                <small>Ends 15.01.2021</small>
                                </Card.Text>
                               
                            </Card.Body>
                        </Card>
                    </div> 
                   </Carousel>
            </div>
        )
    }
}