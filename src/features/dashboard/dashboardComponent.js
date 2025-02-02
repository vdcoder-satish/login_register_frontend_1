import React, { useEffect } from 'react'
import {Link, useNavigate} from 'react-router-dom';
import { useLocation } from 'react-router-dom';
import { useSelector,useDispatch } from 'react-redux';
import { fetchedUserData } from '../../slices/userSlice';
import ListCard from '../../common/components/listCard';
const DashboardComponent = () => {
  const navigate=useNavigate();
  const location=useLocation();
  const dispatch=useDispatch()
  const data=location.state.username;
  const status=useSelector(state=>state.user.status);
  const error=useSelector(state=>state.user.error);
  const userData=useSelector(state=>state.user.userData);
  
  useEffect(()=>{
    if(status==='idle'){
      dispatch(fetchedUserData());

    }
  },[status,dispatch]);
  if(status==='loading'){
    return (
      <div>
        <h4>...Loading</h4>
      </div>
    )
  }
  if(status==='failed'){
    return (
      <div>
        <h4>{error}</h4>
      </div>
    )
  }

  return (
    <div>
       
       <div className='container'>
        <div className='row text-end mt-2'>
          <div className='col-md-12'>
          <button className='btn btn-primary' onClick={()=>navigate('/login')}>logout</button>

          </div>
        </div>
       <div className='row mt-1 justify-content-center'>
        <div className='col-md-12'>
          <div className='card' style={{height:'90vh'}}>
            <div className='card-header text-end text-dark '>
             Welcome! {data}
            </div>
            <div className="card-body " style={{display:'flex',justifyContent:'space-around', flexWrap:'wrap',overflow:'scroll'}}>
                  {
                    userData.map(item=>(
                      <ListCard key={item.id} userData={item}/>
                    ))
                  }
              </div>
          </div>
        </div>
       </div>
       </div>
     
    </div>
  )
}

export default DashboardComponent
