import React from 'react'
export default function Button(props) {
  return (
    <>
      <button type='button' onClick={props.click} className={`${props.class}`}>{props.text}</button>
    </>
  )
}
