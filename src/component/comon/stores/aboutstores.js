import React,{Component} from 'react';
import { Form } from 'react-bootstrap';
import Accordion from 'react-bootstrap/Accordion'   
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

//inside of return

export class Aboutstores extends Component{
    render(){

        return(
            <>
            
                
                <Card className="aboutcardtop">
                        <Card.Header className="aboutcardtop">
                            <h3>Filter By:</h3>
                        </Card.Header>
                </Card>

                <Accordion defaultActiveKey="0">
                    <Card className="aboutcard p-0">
                        <Card.Header className="aboutcard p-0 "> 
                        <Accordion.Toggle className="panel-title pt-3 pb-3" aria-expanded as={Card.Body} variant="link" eventKey="0">
                            <h4>Stores!</h4>
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="0">
                        <Card.Body className="pl-3 pb-0 pt-0">
                        <Form>

                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Dior" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Addidas" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Samsung" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Nokia" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Versace" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="HP" />
                            </Form.Group>

                            <p className="aboutlink">
                            See All
                            </p>
                        </Form>
                        
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                    <Card className="aboutcard p-0">
                        <Card.Header className="aboutcard p-0">
                        <Accordion.Toggle as={Button} className="panel-title pt-3 pb-3" aria-expanded as={Card.Body} eventKey="1">
                            <h4>Type of Offers</h4>
                        </Accordion.Toggle>
                        </Card.Header>
                        <Accordion.Collapse eventKey="1">
                        <Card.Body>
                        <Form>

                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Dior" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Addidas" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Samsung" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Nokia" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="Versace" />
                            </Form.Group>
                            <Form.Group controlId="formBasicCheckbox">
                                <Form.Check type="checkbox" label="HP" />
                            </Form.Group>

                            <p className="aboutlink">
                            See All
                            </p>
                        </Form>
                        </Card.Body>
                        </Accordion.Collapse>
                    </Card>
                </Accordion>
            </>
        )
    }
}