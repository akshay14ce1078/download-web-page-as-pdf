import { useRef } from 'react';
import './App.css';
import { MainComp } from './main';
import { FooterComp } from './footer';

function App() {

  const printableDomRef = useRef();

  return (
    <div className="app" ref={printableDomRef}>
      <header className="app-header" >
        <h3>
          Download Web Page as PDF 
        </h3> 
      </header>
      <main  className='app-main'>
      <MainComp />
      </main>
      <footer className='app-footer'>
        <FooterComp printableDomRef={printableDomRef}/>
      </footer>
    </div>
  );
}

export default App;
