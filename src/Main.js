import React from 'react';
import { Navbar ,Header, Features,Download,Analytics, Subscribe,Faq,Footer,Notices} from './components/index';

export default function Main() {
  return (
    <main>
      {/* <header className='header-bg'> */}
        <Navbar />
        {/* </header> */}
        <Header/>
        
      
      
      <Features/>
      <Analytics/>
      <Notices/>
      <Download/>
      {/* <Subscribe/> */}
      <Faq/>
      <Footer/>

    </main>
  )
}
