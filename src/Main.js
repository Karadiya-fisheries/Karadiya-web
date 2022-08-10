import React from 'react';
import { Navbar ,Header, Features,Download,Analytics, Subscribe,Faq,Footer} from './components/index';

export default function Main() {
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
  )
}
