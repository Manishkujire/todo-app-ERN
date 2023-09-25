import React from 'react'
import "../Styles/NewTaskModal.css"
import Button from './Button'
import { useDispatch, useSelector } from 'react-redux'
import { deleteTodo ,inverseMark} from '../Actions/todoAction'
export default function Card(props) {
  const stringDate = new Date(props.data.date)
  const date=stringDate.getDate()+"/"+stringDate.getMonth()+"/"+stringDate.getFullYear()
  const dispatch = useDispatch()
  const {list} = useSelector((state) => state);

  return (
    <div className='col-sm-6 col-lg-4 4 p-1'>
      
        <div className={`card ${props.data.completed?"complete":"uncomplete"} `} text={props.data.completed?"Completed":"Uncompleted"}>
          <div className='row p-1 ' style={{height:"100%"}}>
            <div className='col-12 h-25'>
              <h4>{props.data.name}</h4>
            </div>
            <div className='col-12 h-25'>
              <span className='text-muted px-1'>{props.data.discription}</span>
            </div>
            <div className='col-12 h- h-25'>
              <span className='fs-5 '>{date}</span>
            </div>
            <div className='col-12 h- h-25'>
              <div className='row g-2 mb-2 h-100'>
                <div className='col-6 h-100'>
                  <div className='d-flex justify-content-center w-100 h-100'>
                    <Button class={`w-100 fs-8 btn-sm btn ${props.data.completed?"btn-success":"btn-primary"} `} click={()=>{dispatch(inverseMark(props.data.id))}} text={`mark as ${props.data.completed?"uncompleted":"completed"}`}></Button>
                  </div>
                </div>
                <div className='col-3 h-100'>
                  <div className='d-flex h-100 justify-content-center '>
                    
<button className="w-100 btn btn-sm btn-danger" onClick={()=>{dispatch(deleteTodo(props.data.id))}}><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 30 30">
    <path d="M 14.984375 2.4863281 A 1.0001 1.0001 0 0 0 14 3.5 L 14 4 L 8.5 4 A 1.0001 1.0001 0 0 0 7.4863281 5 L 6 5 A 1.0001 1.0001 0 1 0 6 7 L 24 7 A 1.0001 1.0001 0 1 0 24 5 L 22.513672 5 A 1.0001 1.0001 0 0 0 21.5 4 L 16 4 L 16 3.5 A 1.0001 1.0001 0 0 0 14.984375 2.4863281 z M 6 9 L 7.7929688 24.234375 C 7.9109687 25.241375 8.7633438 26 9.7773438 26 L 20.222656 26 C 21.236656 26 22.088031 25.241375 22.207031 24.234375 L 24 9 L 6 9 z"></path>
</svg></button>
                  </div>
                </div>
                <div className='col-3'>
                  <div className='d-flex justify-content-center h-100'>
                  <button className="w-100 btn btn-sm btn-danger " ><svg xmlns="http://www.w3.org/2000/svg" x="0px" y="0px" width="30" height="30" viewBox="0 0 48 48">
<path fill="#ff6f02" d="M31 7.002l13 1.686L33.296 19 31 7.002zM17 41L4 39.314 14.704 29 17 41z"></path><path fill="#ff6f00" d="M8 24c0-8.837 7.163-16 16-16 1.024 0 2.021.106 2.992.29l.693-3.865C26.525 4.112 25.262 4.005 24 4.005c-11.053 0-20 8.947-20 20 0 4.844 1.686 9.474 4.844 13.051l3.037-2.629C9.468 31.625 8 27.987 8 24zM39.473 11.267l-3.143 2.537C38.622 16.572 40 20.125 40 24c0 8.837-7.163 16-16 16-1.029 0-2.033-.106-3.008-.292l-.676 3.771c1.262.21 2.525.317 3.684.317 11.053 0 20-8.947 20-20C44 19.375 42.421 14.848 39.473 11.267z"></path>
</svg></button>                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

    </div>
  )
}
