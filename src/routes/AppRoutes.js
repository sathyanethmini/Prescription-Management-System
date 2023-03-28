import React,  {useContext} from "react";
import {
  Routes,
  Route,
  BrowserRouter as Router,
} from "react-router-dom";
import { UserContext } from "../contexts/AuthContext";

import RouteGuard from "../middleware/RouteGuard";
import Patients from "../pages/Patients";
import Prescriptions from "../pages/Prescriptions";
import Stock from "../pages/stockPages/Stock";
import Home from "../pages/Home";


import Login from "../pages/Login";
import Register from "../pages/Register";
import AddItemToStock from "../pages/stockPages/AddItemToStock";

export default function AppRoutes() {

  const { globalState, setGlobalState } = useContext(UserContext);
  var userTypes = globalState.currentUserType;


  return (
    <Router>
      <Routes>
      <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<RouteGuard Component={Home} autherized={userTypes.includes("Admin")}/>} />
        <Route path="/patients" element={<RouteGuard Component={Patients} autherized={userTypes.includes("Admin")}/>} />
        <Route path="/patients" element={<RouteGuard Component={Patients} autherized={userTypes.includes("Admin")}/>} />
        <Route path="/prescriptions" element={<RouteGuard Component={Prescriptions} autherized={userTypes.includes("Admin")}/>} />
        <Route path="/stock" element={<RouteGuard Component={Stock}/>} autherized={userTypes.includes("Admin")}/>
        <Route path="/stock/add" element={<RouteGuard Component={AddItemToStock} autherized={userTypes.includes("Admin")}/>} />
      </Routes>
    </Router>
  );
}
