// OpenPdfButton.jsx
function OpenPdfButton() {
    const openPdf = () => {
      window.open(".\..\public\Document\Resume(atanu khanrah).pdf", '_blank'); // opens in a new tab
    };
  
    return <button onClick={openPdf}>Open PDF</button>;
  }
  
  export default OpenPdfButton;
  