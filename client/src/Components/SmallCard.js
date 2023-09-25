import React from 'react'

export default function SmallCard(props) {
  return (
    <div className='col-12'>
      <div className='card px-3 py-1 text-muted'  style={{height:"100%"}}>
      <div className='col-12 h-50'>
              <h4>{props.data.name}</h4>
            </div>
            <div className='col-12 h-50'>
              <span className='text-muted px-1'>{props.data.discription}</span>
            </div>
      </div>
    </div>
  )
}
