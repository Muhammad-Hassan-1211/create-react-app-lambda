import React,{Component} from 'react';
import { InputGroup, FormControl,Button } from 'react-bootstrap';
export class Searchbar extends Component{
     
    render(){
        return(
            <InputGroup className="mb-3 signupfromfooter form-control12">
                <FormControl className="form-control12"
                placeholder="Search Store Listning  "
                aria-label="Recipient's username"
                aria-describedby="basic-addon2"
                />
                <Button variant="success" className="subscribebtn">Search</Button>
            </InputGroup>
        )
    }
}
