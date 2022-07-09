import React from 'react';
import { useState } from 'react';

const Contact = () => {

    const [inputData,setInputData] = useState({
        email:'',
        mobile:'',
        DOB :'',
        Context:''
    });

    const inputEvent = (event)=>{
        const {name,value} = event.target;
        setInputData((prev)=>{
            return(
                {
                    ...prev,
                    [name]:value,
                }
            )

        })
       
    };


    const formSubmit = (e)=>{
        e.preventDefault();
    }

    return (
        <>
            <div className="container-fluid nav_bg">
            <div className="text-center"><h1>Contact Us</h1></div>
                <div className="row">
                    <div className="col-10 mx-auto">
                        <div className="row">
                            <div className="col-6 mx-auto">
                               <form onSubmit={formSubmit} className='my-auto'>
                                <div className="mb-3">
                                    <label for="exampleFormControlInput1" class="form-label">Email address</label>
                                    <input type="email" class="form-control" id="exampleFormControlInput1" placeholder="name@example.com" name='email' value={inputData.email} onChange={inputEvent} />
                                </div>

                                <div className="mb-3">
                                    <label for="exampleFormControlInput2" class="form-label">Phone no.</label>
                                    <input type="number" class="form-control" id="exampleFormControlInput2" placeholder="9987654321" name='mobile' value={inputData.mobile} onChange={inputEvent} />
                                </div>

                                <div className="mb-3">
                                    <label for="exampleFormControlInput3" class="form-label">DOB</label>
                                    <input type="date" class="form-control" id="exampleFormControlInput3" placeholder="" name='DOB' value={inputData.DOB} onChange={inputEvent}/>
                                </div>
                                <div className="mb-3">
                                    <label for="exampleFormControlTextarea1" class="form-label">Context</label>
                                    <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" name='Context' value={inputData.Context} onChange={inputEvent}></textarea>
                                </div>
                                <button type="button" class="btn btn-primary">Submit</button>

                               </form>
                            </div>
                        </div>

                    </div>
                </div>
            </div>

        </>
    )
}

export default Contact;