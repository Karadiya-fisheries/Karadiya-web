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
import { BaseOptionChartStyle } from "./components/chart/BaseOptionChart";
// theme
import ThemeProvider from "./theme";
import Login from './components/Login/Login';


function App() {
  return (
    <ThemeProvider>
    
      <BaseOptionChartStyle />
      
      <Routes>
       
        <Route path="applanding" element={<Applanding/>}/>
        <Route path="owner" element={<Owner/>}/>
        <Route path="login" element={<Login/>}/>
        <Route path="/" element={<Main />}> 
        
        </Route>
      </Routes>
         
      
        
      
      
    </ThemeProvider>
  );
}

export default App;
