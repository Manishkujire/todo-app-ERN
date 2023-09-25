import React from 'react'
import "../Styles/NewTaskModal.css"
import Button from './Button'

export default function Task(props) {
    return (
        <div className=' col-3 '>
            <div className=' task-button bg-info w-100 rounded'>
                <div className='row'>
                    <div className='col-12'>
                        <div className='row px-2 pt-1 g-2'>
                            <div className='d-flex justify-content-start fs-4'>{props.data.name}</div>
                            <div className='d-flex justify-content-start  fs-6'>{props.data.discription}</div>

                        </div>
                    </div>

                    <div className='col-12 d-flex px-4 pt-3 pb-3' style={{ width: "40px" }}>
                        <div>{props.data.date.slice(0,10)}</div>

                    </div>
                    <div className='col-12 px-2'>
                        <div className='row'>
                            <div className='col-12 px-4'>
                                <div className='pt-2 pl-5 '>                                <Button class="w-100 text-light btn rounded bg-primary" text={props.data.completed?"Completed":"Uncompleted"} /></div>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    )
}
