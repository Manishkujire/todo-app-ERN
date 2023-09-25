import React from 'react'
import Navigation from './Navigation'
import "../Styles/NewTaskModal.css"
import { useDispatch, useSelector } from 'react-redux'
import { useEffect } from 'react';
import { TODO_LIST } from '../Constants/todoConstant';

import { getTodo, getData } from '../Actions/todoAction';
import { Link } from 'react-router-dom';


export default function Leftsection(props) {
  const dispatch = useDispatch();
  const todo_data = useSelector((state) => state);
  const loading = todo_data.loading

  return (
    <><div class="bg-light" style={{ height: "100vh" }}>


      <div className='h-25 d-flex align-items-center justify-content-center '>
        <Link className='text-decoration-none text-secondary'><h1 className=''>TO-DO LIST</h1></Link>





      </div>
      <Navigation />


    </div>




    </>
  )
}
