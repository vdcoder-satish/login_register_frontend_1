import React from 'react'
import { memo } from 'react'
const ListCard = ({userData}) => {
  return (
    <div>
      <div className='card mb-2' style={{  height:'200px',borderRadius:'5px', width:'300px',boxShadow:'0px 0px 10px rgba(0,0,0,0.5)'}}>
       <div className='card-header'>
       {userData.title}
       </div>
       <div className='card-body'>
        <img src={userData.url}/>
        <p>{userData.title}</p>
       </div>
      </div>
    </div>
  )
}

export default memo(ListCard)
