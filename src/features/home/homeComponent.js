import React from 'react';
import { Link } from 'react-router-dom';
// import './home.scss';
const HomeComponent=()=>{
  return <div>
    {/* <h3>home component</h3> */}
    <div className='container '>
        <div className='row justify-content-center mt-5' >
          <div className='col-md-4'>
            <div className='card card-container'>
              <div className='card-header'>
                  <h5>select the option</h5>
              </div>
              <div className='card-body '>
                <ul className='list-container'>
                  <li>
                    <Link to="/login">Login</Link>
                  </li>
                  <li>
                    <Link to="/register">Registeration</Link>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
  </div>
}
export  default  HomeComponent;