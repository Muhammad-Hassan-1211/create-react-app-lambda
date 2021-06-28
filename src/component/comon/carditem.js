import React,{Component} from 'react';
import { Col } from 'react-bootstrap';
import Card from 'react-bootstrap/Card';
import imagelogo from '../../assets/images/icons/boxlogo.png';
export class Carditems extends Component{
    render(){
        return(
            <Col xl={2} md={4} xs={12}>
                <Card className="mt-2 text-center p-3" >
                    
                    <Card.Img variant="middle" className="img-fluid1 mb-4" rounded   src={imagelogo} />
                  
                    
                   
                        
                        <Card.Text>
                            $50 bonus on 
                            orders over $50
                        </Card.Text>
                        
                    
                </Card>
            </Col>
        )
    }
}