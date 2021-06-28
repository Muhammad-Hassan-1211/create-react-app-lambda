import React,{Component} from 'react';
import { Route,BrowserRouter as Router, Switch} from 'react-router-dom';
import {Home} from '../../component/Home';
import { About } from '../../component/pages/About';
export class Routers extends Component{
    render(){
        return(
            <Router>
                <Switch>
                    <Route path="/" exact component={Home}>
                    </Route>
                    <Route path="/about" component={About}>
                    </Route>
                </Switch>
            </Router>
        )
    }
}