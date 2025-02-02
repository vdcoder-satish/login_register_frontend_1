import React from 'react'
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
const LoginComponent = () => {
  const [formData,setFormData]=useState({
    email:'',
    password:''

  })
  const [alertMessage,setAlertMessage]=useState('')
  const navigate=useNavigate()
  const loginHandler=(e)=>{
    e.preventDefault();
    console.log('login successfull',formData);
    setAlertMessage('Login Successfull');
    setTimeout(() => {
      navigate('/dashboard',{state:{username:formData.email}});
      setAlertMessage('');

     
    }, 2000);
  }
  const fieldChangeHanlder=(e)=>{
    const {name,value}=e.target;
    setFormData({...formData,[name]:value});
  }
  return (
    <div>
      {/* <h3>LoginComponent</h3> */}
      <div className='container'>
        
        <div className='row mt-2 justify-content-end'>
        <div className='col-md-11 text-end'>         
        {alertMessage && <div className="text-danger fw-bold">{alertMessage}</div>}
        {/* <button className='btn btn-primary' onClick={()=>navigate('/')}>back</button> */}
        </div>
          <div className='col-md-1 text-end'>         
             <button className='btn btn-primary' onClick={()=>navigate('/')}>back</button>
          </div>
        </div>
        <div className='row mt-1 justify-content-end' >
          <div className='col-md-6'></div>
          <div className='col-md-6 ' >
            <div className='card card-design' >
              <div className='card-header'>
                   Login Form
              </div>
              <div className='card-body br-5' style={{background:'lightgray'}}>
                   <form className='form-control' onSubmit={loginHandler}>
                      <input required className='form-control mb-3' name='email' id='email' onChange={(e)=>fieldChangeHanlder(e)} placeholder='Enter Email' />
                      <input required className='form-control mb-3' name='password' id='password' onChange={(e)=>fieldChangeHanlder(e)} placeholder='Enter Password' />
                    <div className='button-container'>
                    <button className='btn btn-primary mb-3'>Submit</button>
                      <button className='btn btn-primary mb-3' onClick={()=>navigate('/fp')}>Forget Password</button>
                      <button className='btn btn-primary mb-3' onClick={()=>navigate('/register')}>Register</button>
                    </div>

                   </form>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default LoginComponent
