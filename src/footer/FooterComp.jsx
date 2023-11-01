import html2Canvas from 'html2canvas';
import {jsPDF} from 'jspdf';

export const FooterComp = ({printableDomRef}) =>{

  const downloadAsPDF = () => {
    const headerElement = printableDomRef.current;

    // 3 limitations  
    // need browser to render(can't use in node),
    // do not handle browser content ploicy retsriction, so rendring cross-origin content will require proxy 
    // uses prmoises so need polyfill for old browser
    // 
    html2Canvas(headerElement).then((canvas) => {
      const imageData = canvas.toDataURL('image/png');
      const pdf = new jsPDF({orientation:'l', unit:'mm', pageSize:'a4', putOnlyUsedFonts:true});

      const imageX = 5;
      const imageY = 10;

      const pdfWidth = pdf.internal.pageSize.getWidth() - imageX*2;
      const pdfHeight = pdf.internal.pageSize.getHeight() - imageY*2;
      const imageWidth = canvas.width;
      const imageHeight = canvas.height;
      const ratio = Math.min(pdfWidth/imageWidth, pdfHeight/imageHeight);

      pdf.addImage(imageData,'PNG', imageX, imageY, imageWidth*ratio, imageHeight*ratio);
      pdf.save('react-logo.pdf');
    });
  };

  return <button style={{height:20,cursor:'pointer'}} onClick={downloadAsPDF}> Download This Page as PDF </button>
}