import React from "react";

function DownloadButton() {
  const fileUrl = "/assets/jatinresume.pdf";
  const fileName = "jatinresume.pdf";

  const handleDownload = () => {
    const link = document.createElement("a");
    link.href = fileUrl;
    link.download = fileName;
    document.body.appendChild(link);
    link.click();
  };

  return (
    <button
      className="download-button"
      onClick={handleDownload}
      aria-label="Download Jatin's Resume"
    >
      Download Resume
    </button>
  );
}

export default DownloadButton;
