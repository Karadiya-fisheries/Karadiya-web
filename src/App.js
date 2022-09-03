import './App.css';
import Applanding from './components/AppLanding/Applanding1';
import Owner from './components/Owner/Owner';
// import Download from './components/download/Download';
// import Feature from './components/features/Feature';
// import Footer from './components/Footer/Footer';
// import Header from './components/header/Header';
// import Navbar from './components/navbar/Navbar';
// import Subscribe from './components/subscribe/Subscribe';
// import Faq from './components/faq/Faq';
import {Routes,Route,Navigate} from "react-router-dom";
import Main from './Main';
//import { BaseOptionChartStyle } from "./components/chart/BaseOptionChart";
// theme
import Login from './components/Login/Login';
import SignUp from './components/SignUp/SignUp';
//import Profile from './components/Profile/UserAccountDetails';
import React from 'react'
import ReactDOM from 'react-dom';
//import Profile from './components/profile1/index';
import Bidding from './components/Bidding/Bidding';
import BidoneView from './components/Bidding/BidoneView';


function App() {
  return (
    <>
      {/* <BaseOptionChartStyle /> */}
      
      <Routes>
       
        <Route path="applanding" element={<Applanding/>}/>
        <Route path="owner" element={<Owner/>}/>
        <Route path="onebid" element={<BidoneView/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="signup" element={<SignUp/>}/>
        <Route path="bidding" element={<Bidding/>}/>
        {/* <Route path="profile" element={<Profile/>}/> */}
        <Route path="/" element={<Main />}> 
        
        </Route>
      </Routes>
     </> 
  );
}

export default App;
