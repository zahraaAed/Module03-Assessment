import "./App.css";
import Handeledit from "./Component/Handeledit";
import Add from "./Pages/Admin.js";
import HomePage from "./Pages/Home.js";

import React from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
const App= () =>{
  return (
    <div className="App">
     <BrowserRouter>
        <Routes>
          <Route path="/" element={<HomePage/>}/>
          <Route path="/Add" element={<Add/>}/>
          <Route path="/edit/:articleId" element={<Handeledit/>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
