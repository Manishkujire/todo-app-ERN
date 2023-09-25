import Leftsection from '../Components/Leftsection';
import CenterSection from '../Components/CenterSection';
import RightSection from '../Components/RightSection';
import Progressbar from '../Components/Progressbar';
// import Button from './Components/Button';
import React, { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import { clearMessage} from '../Actions/todoAction'

import '../Darkmode.css'
import '../App.css';
import TodayTask from '../Components/TodayTasks';
import AddForm from '../Components/AddForm';
import CompletedTasks from '../Components/CompletedTasks';
import UncompletedTasks from '../Components/UncompletedTasks';
import { useDispatch, useSelector } from 'react-redux';
import { useSnackbar } from 'notistack';
export default function MainPage() {
    const dispatch=useDispatch()
    const {list}=useSelector((state)=>state)
    const { enqueueSnackbar } = useSnackbar();
console.log("message"+list.messageSuccess)
    useEffect(()=>{
        if(list.messageSuccess){
            console.log("snackbar")
            enqueueSnackbar(list.messageSuccess, { variant: "success" });
            dispatch(clearMessage())
        }
        if(list.error){
            console.log("snackbar")
            enqueueSnackbar(list.error, { variant: "error" });
            dispatch(clearMessage())
        }
    },[list.messageSuccess,list.error])
    return (<>

        <div className={`row app `}>
            <button type="button"
                data-toggle="collapse"
                data-target="#filters"
                className="col-1 btn visible-xs visible-sm collapsed d-none"
            >Filter</button>
            <div className={`col-lg col-sm-0 left `} id="filters">

                <Leftsection />
            </div>
            <div className={`col-lg-7 col-sm-8 px-4 center  min-vh-100`} >
                <Routes>


                    <Route  path="/" element={<CenterSection />} />
                    <Route exact path="/today" element={<TodayTask />} />
                    <Route exact path="/addtask" element={<AddForm />} />
                    <Route exact path="/completed" element={<CompletedTasks />} />
                    <Route exact path="/uncomplete" element={<UncompletedTasks />} />
                    {/* <Route exact path="/" element={<CompletedTasks />} />
          <Route exact path="/" element={<UncompletedTasks />} /> */}


                </Routes>

            </div>

            <div className={`col align-items-end bg-light right min-vh-100`}>

                <RightSection />


                <Progressbar />

            </div>
        </div>
    </>
    )
}
