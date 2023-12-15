import "./App.css";
import Add from "./Pages/Add.js";
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
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
