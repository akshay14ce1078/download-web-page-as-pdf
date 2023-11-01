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
      const pdf = new jsPDF({orientation:'p', unit:'mm', pageSize:'a3', putOnlyUsedFonts:true});

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
  return <button onClick={downloadAsPDF}> Download This Page as PDF </button>
}