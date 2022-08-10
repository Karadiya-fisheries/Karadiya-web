import './App.css';
import Applanding from './components/AppLanding/Applanding1';
// import Download from './components/download/Download';
// import Feature from './components/features/Feature';
// import Footer from './components/Footer/Footer';
// import Header from './components/header/Header';
// import Navbar from './components/navbar/Navbar';
// import Subscribe from './components/subscribe/Subscribe';
// import Faq from './components/faq/Faq';
import {Routes,Route,Navigate} from "react-router-dom";
import Main from './Main';



function App() {
  return (
    <>
    
      
      
      <Routes>
       
        <Route path="applanding" element={<Applanding/>}/>
        <Route path="/" element={<Main />}> 
        </Route>
      </Routes>
         
      
        
      
      
    </>
  );
}

export default App;
