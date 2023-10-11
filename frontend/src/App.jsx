import React from "react";
import Details from "./components/Details";
import { BrowserRouter,Route,Routes } from "react-router-dom";
import Home from "./components/Home";
import Profile from "./components/Profile";
function App() {
 

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/details" element={<Details/>}/>
        <Route path="/profile" element={<Profile/>}/>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
