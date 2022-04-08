import React from 'react';
import {Route, Routes, Navigate} from "react-router-dom";
import Home from './pages/Home/Home'
import Navigation from "./pages/Navigation/Navigation";
import SignIn from "./pages/SignIn/SignIn";

const App = () => {

  return (
    <Routes>
      <Route path='/' element = {<Navigation/>}>
        <Route index element = {<Home/>}/>
        {/*<Route path='shop' element = {<Shop/>}/>*/}
        <Route path='signIn' element = {<SignIn/>}/>
      </Route>
      <Route path='*' element = {<Navigate to='/'/>}/>
    </Routes>
  );
}

export default App;

