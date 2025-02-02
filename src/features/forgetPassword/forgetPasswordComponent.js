import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

const ForgetPasswordComponent = () => {
  const [formData,setFormData]=useState({
    email:'',
    password:'',
    cpassword:''
  })
  const [alertMessage,setAlertMessage]=useState('')
  const navigate=useNavigate()
  const forgetPasswordHandler=(e)=>{
    e.preventDefault()
    console.log('password changed successfully',formData);
    setAlertMessage('password has been changed successfully');
    setTimeout(() => {
      navigate('/login');
       setAlertMessage('')
    }, 2000);
  }
  const fieldChangeHanlder=(e)=>{
    const{name,value}=e.target;
    setFormData({...formData,[name]:value})
  }
  return (
    <div>
    {/* <h3>LoginComponent</h3> */}
    <div className='container'>
  
      <div className='row mt-2 justify-content-center'>
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
                 <form className='form-control' onSubmit={forgetPasswordHandler}>
                    <input required className='form-control mb-3' name='email' id='email' onChange={(e)=>fieldChangeHanlder(e)} placeholder='Enter Email' />
                    <input required className='form-control mb-3' name='password' id='password' onChange={(e)=>fieldChangeHanlder(e)} placeholder='Enter New Password' />
                    <input required className='form-control mb-3' name='cpassword' id='cpassword' onChange={(e)=>fieldChangeHanlder(e)} placeholder='Confirm Password' />

                  <div className='button-container'>
                  <button className='btn btn-primary mb-3'>Submit</button>
                    <button className='btn btn-primary mb-3' onClick={()=>navigate('/login')}>Login</button>
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

export default ForgetPasswordComponent
