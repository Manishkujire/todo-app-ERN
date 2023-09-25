import React, { useEffect } from "react";
import "../Styles/CenterSection.css";
import "../Styles/NewTaskModal.css";
import { useDispatch, useSelector } from 'react-redux'
import { getTodo } from '../Actions/todoAction';
import Card from "../Components/Card";
import NewTaskModal from "../Components/NewTaskModal";
export default function TodayTask() {
  var date = new Date().toDateString();
  const dispatch = useDispatch();

  const { list } = useSelector((state) => state);
  const onClick = () => {
    console.log("Clicked");
  };
  const findDate=(datestring)=>{
    let dateObj = new Date(datestring)
    let month = dateObj.getUTCMonth() + 1;
    let day = dateObj.getUTCDate();
    let year = dateObj.getUTCFullYear();
    return  year + "-" + month + "-" + day;
  }
  
  let tasks = list.tasks !== undefined?list.tasks.filter((ele) => {

    console.log(new Date(ele.date).toLocaleDateString().toString()==new Date().toLocaleDateString().toString())
    return new Date(ele.date).toLocaleDateString().toString()==new Date().toLocaleDateString().toString()
  }):[]
      console.log(tasks);

  useEffect(() => {
    dispatch(getTodo())
    console.log(tasks);
  }, [dispatch]);

  return (
    <><div className="row d-flex">
      <form className="d-flex col-5 my-4 nosubmit" role="search">
        <input
          className="form-control me-2 nosubmit"
          type="search"
          placeholder="Search"
          aria-label="Search"
        // style={{color:"red",backgroundColor:"#e0cfcf"}}
        />
      </form>
      <span className="col my-4"> {`${date}`}</span>
      <div className="col-1 my-4">

      </div>
      <div className="col">
        <button
          type="button"
          className="btn btn-primary text-center align-center my-4"

        >
          Add a Task
        </button>


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
        {tasks && tasks.map((data, index) => {

          return (<Card data={data} />)
        })}

        <NewTaskModal />
      </div>


    </div></>
  )
}
