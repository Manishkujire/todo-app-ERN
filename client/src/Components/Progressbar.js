import React from "react";
import { useSelector } from "react-redux";
import SmallCard from "./SmallCard";
// import Button from "./Button";

export default function Progressbar() {
  const {list}=useSelector((state)=>state)
  const totalTasks =list.tasks !== undefined?list.tasks.length:0
const complete= list.tasks !== undefined?list.tasks.filter((ele) => {
  return ele.completed==1
}).length:0
const tdayTasks=list.tasks !== undefined?list.tasks.filter((ele) => {
  return new Date(ele.date).toLocaleDateString().toString()==new Date().toLocaleDateString().toString()
}):[]
// console.log(complete+"  "+totalTasks)
const percent=(100*complete)/totalTasks
  return (
    <>
    <span className="my-4 py-4 d-flex justify-content-between " >
        <span>
        All Tasks
        </span>
        {complete}/{totalTasks}
    </span>
    
      <div
        className="progress my-2"
        role="progressbar"
        aria-label="Info example"
        aria-valuenow="50"
        aria-valuemin="0"
        aria-valuemax="100"
        // style={{width:"80%"}}
      >
        <div className="progress-bar bg-success" style={{ width: `${percent}%` }}></div>
        <div className="progress-bar bg-info" style={{ width: `${100-percent}%` }}></div>
      </div>
      <hr />

      <p>No tasks today</p>
      <div className="w-100 row gy-2">
        {tdayTasks.map((ele)=>{
          return <SmallCard data={ele}/>
        })}

      </div>
      
    </>
  );
}
