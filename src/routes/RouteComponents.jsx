import { BrowserRouter as  Router,Route, Routes } from "react-router-dom";
import React from 'react'
import Homepage from "../pages/homepage";
import Login from "../auth/login";

function RouteComponents() {
  return (
    <div className="route">
      <Router>
        <Routes>
            <Route path="/" element={<Homepage />}></Route>
            <Route path="/login" element= {<Login />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default RouteComponents
