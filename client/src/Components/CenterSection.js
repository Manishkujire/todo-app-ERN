import React, { useEffect } from "react";
import "../Styles/CenterSection.css";
import NewTaskModal from "./NewTaskModal";
import "../Styles/NewTaskModal.css";
import Task from "./Task";
import { useDispatch, useSelector } from 'react-redux'
import { getTodo } from '../Actions/todoAction';
import Card from "./Card";
import { Link } from 'react-router-dom';

export default function CenterSection(props) {
  var date = new Date().toDateString();
  const dispatch = useDispatch();

  const {list} = useSelector((state) => state);
  const onClick = () => {
    console.log("Clicked");
  };
  const tasks = list.tasks
  console.log("hiii");
  console.log(list);

  useEffect(() => {
    dispatch(getTodo())
  }, [dispatch]);
const onSearchAction=()=>{

}
  return (
    <>
      <div className="row d-flex">
        <form className="d-flex col-5 my-4 nosubmit" role="search">
          <input
            className="form-control me-2 nosubmit"
            type="search"
            placeholder="Search"
            aria-label="Search"
            onChange={onSearchAction}
            
          // style={{color:"red",backgroundColor:"#e0cfcf"}}
          />
        </form>
        <span className="col my-4"> {`${date}`}</span>
        <div className="col-1 my-4">
          
        </div>
        <div className="col">
        <Link

to='/addtask'
className="btn btn-primary text-center align-center my-4"
>
Add a Task
</Link>  
        </div>
        <div className="d-flex my-5">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-list-task mx-2"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M2 2.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5V3a.5.5 0 0 0-.5-.5H2zM3 3H2v1h1V3z"
            />
            <path d="M5 3.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zM5.5 7a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9zm0 4a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1h-9z" />
            <path
              fillRule="evenodd"
              d="M1.5 7a.5.5 0 0 1 .5-.5h1a.5.5 0 0 1 .5.5v1a.5.5 0 0 1-.5.5H2a.5.5 0 0 1-.5-.5V7zM2 7h1v1H2V7zm0 3.5a.5.5 0 0 0-.5.5v1a.5.5 0 0 0 .5.5h1a.5.5 0 0 0 .5-.5v-1a.5.5 0 0 0-.5-.5H2zm1 .5H2v1h1v-1z"
            />
          </svg>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            fill="currentColor"
            className="bi bi-grid mx-2"
            viewBox="0 0 16 16"
          >
            <path d="M1 2.5A1.5 1.5 0 0 1 2.5 1h3A1.5 1.5 0 0 1 7 2.5v3A1.5 1.5 0 0 1 5.5 7h-3A1.5 1.5 0 0 1 1 5.5v-3zM2.5 2a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 1h3A1.5 1.5 0 0 1 15 2.5v3A1.5 1.5 0 0 1 13.5 7h-3A1.5 1.5 0 0 1 9 5.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zM1 10.5A1.5 1.5 0 0 1 2.5 9h3A1.5 1.5 0 0 1 7 10.5v3A1.5 1.5 0 0 1 5.5 15h-3A1.5 1.5 0 0 1 1 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3zm6.5.5A1.5 1.5 0 0 1 10.5 9h3a1.5 1.5 0 0 1 1.5 1.5v3a1.5 1.5 0 0 1-1.5 1.5h-3A1.5 1.5 0 0 1 9 13.5v-3zm1.5-.5a.5.5 0 0 0-.5.5v3a.5.5 0 0 0 .5.5h3a.5.5 0 0 0 .5-.5v-3a.5.5 0 0 0-.5-.5h-3z" />
          </svg>
        </div>
        <div className="row w-100 g-2">
          {tasks&&tasks.map((data,index) => {

            return (<Card data={data}/>)
          })}
          
          <NewTaskModal/>
        </div>


      </div>
    </>
  );
}
