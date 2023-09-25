import { Routes, Route, useLocation } from 'react-router-dom';
import React, { useState } from 'react';
import MainPage from './Pages/MainPage';



function App() {
  


  return (
    <Routes>
      {/* <Route path="/" element={<Aaaa />} /> */}
      
      <Route path="*" element={<MainPage />} />
      {/* <Route exact path="/addtask" element={<AddTask/> }/>
      <Route exact path="/today" element={<TodayTask/> }/>
       */}
    </Routes>

  );
}

export default App;
