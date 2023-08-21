import React from "react";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from "react-router-dom"

import LoginPage from "./login/loginPage";
import NonSSOLogin from "./login/nonSSOlogin";
// import NavBar from "./navBar/navBar";

function App() {
  return (
    <div className="App">
      <Routes>
      <Route path="/" element={ <LoginPage /> } />
      <Route path="/nonssologin" element={<NonSSOLogin />} />
      </Routes>
      {/* <NavBar /> */}
      
    </div>
  );
}

export default App;
