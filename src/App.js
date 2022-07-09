import React from 'react';

import Navbar from './Navbar';
import Home from './Home';
import About from './About';
import Service from './Service';
import Contact from './Contact';

import {Routes,Route} from 'react-router-dom';

const App = ()=>{
    return(
        <>
            <Navbar/>
            <Routes>
                <Route exact path = '/' element={<Home/>}/>
                <Route exact path = '/about' element={<About/>}/>
                <Route exact path = '/contact' element={<Contact/>}/>
                <Route exact path = '/service' element={<Service/>}/>
                <Route path = '/' element={<Home/>}/>
               
            </Routes>
        </>
    )
}

export default App;