import React from 'react'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
const RegisterationComponent = () => {
  const navigate=useNavigate();
 const [formData,setFormData]=useState({
  name:'',
  email:'',
  mobile:'',
  password:''
 })
 const [alertMessage,setAlertMessage]=useState('')
  const registerHandler=(e)=>{
    e.preventDefault();
    console.log('registeration successfull',formData);
    setAlertMessage('Registeration Done Successfully');
    setTimeout(() => {
      setAlertMessage('');
      navigate('/login')
    }, 2000);
  }
  const fieldChangeHanlder=(e)=>{
    const {name,value}=e.target;
    setFormData({...formData,[name]:value})
  }
  const resetHandler=()=>{
    setFormData({
      name:'',
      email:'',
      mobile:'',
      password:''
    })
  }
  return (
    <div>
      <div className='container'>
        <div className='row justify-content-end mt-2'>
        <div className='col-md-11 text-end'>         
        {alertMessage && <div className="text-danger fw-bold">{alertMessage}</div>}
        {/* <button className='btn btn-primary' onClick={()=>navigate('/')}>back</button> */}
        </div>
         <div className='col-md-1 text-end'>
          <button className='btn btn-primary' onClick={()=>navigate('/login')}>back</button>
         </div>
        </div>
        <div className='row mt-1 justify-content-end' >
          <div className='col-md-6'></div>
          <div className='col-md-6 ' >
            <div className='card card-design'  >
              <div className='card-header'>
                   Login Form
              </div>
              <div className='card-body br-5' style={{background:'lightgray'}}>
                   <form className='form-control' onSubmit={registerHandler}>
                   <input required className='form-control mb-3' type='text'  name='name' id='name' onChange={(e)=>fieldChangeHanlder(e)} placeholder='Enter Name' />
                      <input required className='form-control mb-3' type='text' name='email' id='email' onChange={(e)=>fieldChangeHanlder(e)} placeholder='Enter Email' />
                      <input required className='form-control mb-3' type='number' name='mobile' id='mobile' onChange={(e)=>fieldChangeHanlder(e)} placeholder='Enter Mobile' />
                      <input required className='form-control mb-3' type='text' name='password' id='password' onChange={(e)=>fieldChangeHanlder(e)} placeholder='Enter Password' />
                      <div className='d-flex button-container'>
                      <button className='btn btn-primary mb-3'>Submit</button>
                      <button className='btn btn-primary mb-3' onClick={()=>navigate('/login')}>Login</button>
                      <button className='btn btn-primary mb-3' onClick={resetHandler}>Reset</button>
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

export default RegisterationComponent
