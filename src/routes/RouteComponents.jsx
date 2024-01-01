import { BrowserRouter as  Router,Route, Routes } from "react-router-dom";
import React from 'react'
import Login from "../auth/login";
import Register from "../auth/Register";
import Beranda from "../pages/Beranda";
import Group from "../pages/Group";
import Landing from "../pages/Landing";

function RouteComponents() {
  return (
    <div>
      <Router>
        <Routes>
            <Route path="/" element={<Landing/>}></Route>
            <Route path="/beranda" element={<Beranda/>}></Route>
            <Route path="/login" element= {<Login />}></Route>
            <Route path="/register" element= {<Register />}></Route>
            <Route path="/groupchat" element= {<Group />}></Route>
        </Routes>
      </Router>
    </div>
  )
}

export default RouteComponents
