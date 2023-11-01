import { useRef } from 'react';
import html2Canvas from 'html2canvas';
import {jsPDF} from 'jspdf';
import logo from './logo.svg';
import './App.css';

function App() {

  const headerRef = useRef()

  const downloadAsPDF = () => {
    const headerElement = headerRef.current;

    // 3 limitations  
    // need browser to render(can't use in node),
    // do not handle browser content ploicy retsriction, so rendring cross-origin content will require proxy 
    // uses prmoises so need polyfill for old browser
    // 
    html2Canvas(headerElement).then((canvas) => {
      const imageData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({orientation:'l', unit:'mm', pageSize:'a3', putOnlyUsedFonts:true});

      const pdfWidth = pdf.internal.pageSize.getWidth();
      const pdfHeight = pdf.internal.pageSize.getHeight();
      const imageWidth = imageData.width;
      const imageHeight = imageData.height;
      const ratio = Math.min(pdfWidth/imageWidth, pdfHeight/imageHeight);

      const imageX = 1;
      const imageY = 1;

      pdf.addImage(imageData,'PNG', imageX, imageY, imageWidth*ratio, imageHeight*ratio);
      pdf.save('react-logo.pdf');

    })

  }

  return (
    <div className="App">
      <header className="App-header" ref={headerRef}>
        <img src={logo} className="App-logo" alt="logo" />
        <svg><rect width="300" height="100" style={{fill:'green',strokeWidth:3,stroke:'white'}}/></svg>
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <body>
        <button onClick={downloadAsPDF}> Download This Page as PDF </button>
      </body>
    </div>
  );
}

export default App;
