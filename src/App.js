import './App.css';
// import Download from './components/download/Download';
// import Feature from './components/features/Feature';
// import Footer from './components/Footer/Footer';
// import Header from './components/header/Header';
// import Navbar from './components/navbar/Navbar';
// import Subscribe from './components/subscribe/Subscribe';
// import Faq from './components/faq/Faq';

import { Navbar ,Header, Features,Download,Analytics, Subscribe,Faq,Footer} from './components/index';

function App() {
  return (
    <main>
      <header className='header-bg'>
        <Navbar/>
        <Header/>
        
      </header>
      
      <Features/>
      <Analytics/>
      <Download/>
      {/* <Subscribe/> */}
      <Faq/>
      <Footer/>

    </main>
  );
}

export default App;
