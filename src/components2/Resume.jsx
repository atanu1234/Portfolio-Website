// OpenPdfButton.jsx
function OpenPdfButton() {
  const openPdf = () => {
    window.open("C:\code\my website\atanu\public\Document\Resume(atanu khanrah).pdf"); // opens in a new tab
  };

  return <button onClick={openPdf}>Open PDF</button>;
}

export default OpenPdfButton;
