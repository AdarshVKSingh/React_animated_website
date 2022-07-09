import React from 'react'
import { NavLink } from 'react-router-dom';
import IMG from './images/wheel.png';
const Common = (prop)=>{
    return(
        <>
        <div className="container-fluid nav_bg">
                <div className="row">
                    <div className="col-10 mx-auto">
                    <div className="row my-10">
                        <div className="col-6 my-auto order-2 order-lg-1 order-sm-1 container-fluid">
                            <h1 className='mt-3'>Welcome to the WebTech</h1>
                            <p className='my-3'>This is the {prop.page} page</p>
                            <NavLink to='/service'><button type="button" class="btn btn-primary getstarted">Get Started</button></NavLink>
                        </div>
                        <div className="col-6 order-1 order-lg-2 order-sm-0 container-fluid">
                            <img src={IMG} alt="rocket image"  className="img-fluid animation"srcset=""/>
                        </div>
                    </div>
                    </div>
                </div>
            </div>
            
        </>
    )
}

export default Common;