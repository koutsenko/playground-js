import {useCallback} from "react";
import file from '../Assets/Nostalgia_in_retro_game_design.pdf';
import './DownloadButton.css';

function DownloadButton() {
  const handleDownloadPdf = useCallback(() => {
    fetch(`http://localhost:3000${file}`).then(async (response) => {
      console.log(1, response);
      const data = await response.blob();
      const blobData = new Blob([data], {type: "application/pdf"});
      const binaryFileName = "test.pdf";

      const fileData = new File([blobData], binaryFileName, {type: "application/pdf"});
      const fileURL = window.URL.createObjectURL(fileData);
      console.log(2, fileURL);
    });
    // const aTag = document.createElement('a');
    // This string prevents opening in new tab.
    // aTag.setAttribute('download', 'example.pdf');
    // aTag.setAttribute('href', `http://localhost:3000${file}`);
    // aTag.setAttribute('target', '_blank');
    // aTag.setAttribute('rel', 'noopener noreferrer');
    // aTag.click();
  }, []);

  return (
    <div>
      {/*<a href="https://example.com">Site in current tab</a>*/}
      {/*<br/>*/}
      {/*<a href="https://example.com" target="_blank" rel="noopener noreferrer">Site in external tab</a>*/}
      {/*<br/>*/}
      {/*<a href={`http://localhost:3000${file}`} download="example.pdf">PDF in current tab</a>*/}
      {/*<br/>*/}
      {/*<a href={`http://localhost:3000${file}`} target="_blank" rel="noopener noreferrer">PDF in external tab (not work)</a>*/}
      {/*<br/>*/}
      <button onClick={handleDownloadPdf}>Скачать PDF</button>
      {/*<br/>*/}
    </div>
  );
}

export default DownloadButton;