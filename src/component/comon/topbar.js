import React,{Component} from 'react';
import icon1 from '../../assets/images/fb.svg';
import icon2 from '../../assets/images/twit.svg'
import icon3 from '../../assets/images/link.svg'
export class Topbar extends Component{
     
    render(){
        return(
            <div className=" topbar container-fluid">
                <div className="row">
                    <div className="col-xl-3 offset-xl-4 align-self-center text-center ">
                        <p className="mt-2"> Share your joy of Cash Back with a friend & earn $25</p>
                    </div>
                    <div className="col-xl-4 mt-2 mb-1 text-center">
                       <span><img src={icon1} className="" alt="logo" /></span>
                       <span><img src={icon2} className=" ml-1 mr-1" alt="logo" /></span>
                       <span><img src={icon3} className="" alt="logo" /></span>
                    </div>
                </div>
            </div>
        )
    }
}