import React from 'react';

const FileInput = () => {
  const handleFileChange = (event) => {
    const fileList = event.target.files;

    for (let i = 0; i < fileList.length; i++) {
      const file = fileList[i];
      const reader = new FileReader();

      reader.onload = function (e) {
        const img = new Image();
        img.src = e.target.result;

        const link = document.createElement('a');
        link.href = img.src;
        link.download = file.name;

        document.body.appendChild(link);
        link.click();

        document.body.removeChild(link);
      };
      reader.readAsDataURL(file);
    }
  };

  return (
      <input type="file" onChange={handleFileChange} multiple />
  );
};

export default FileInput;
