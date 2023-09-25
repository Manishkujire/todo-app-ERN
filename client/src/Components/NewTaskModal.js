import React from "react";
import "../Styles/NewTaskModal.css"
import { Link } from 'react-router-dom';

export default function NewTaskModal(props) {
  
  return (
    <>
    <div className="col-lg-4 col-sm-6 p-1 ">
      
    <Link

to='/addtask'
>
<button
        type="button"
        className={`w-100 add-task-card `}
      >
        Add a Task
      </button>
</Link>
      
      </div>
        
    </>
  );
}
