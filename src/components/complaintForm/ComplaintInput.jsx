import React, { useState } from 'react';
import ButtonComponent from '../reUsableComponents/ButtonComponent';
import ModalComponent from '../../components/reUsableComponents/ModalComponent';

const ComplaintInput = ({ isOpen, onClose, getApiCall }) => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setSelectedFile(file);
      setPreviewUrl(URL.createObjectURL(file)); // Generate a URL for the image preview
    }
  };

  return (
    <div className="flex flex-col items-center space-y-4 mt-4 w-full max-w-md mx-auto">
      <form onSubmit={getApiCall} className="w-full">
        <input
          type="text"
          placeholder="Title"
          className="h-14 px-4 py-2 w-full shadow-boxshadow-1 rounded-xl border border-dark-gray outline-none"
        />

        <textarea
          placeholder="Description"
          className="min-h-40 px-4 py-2 w-full shadow-boxshadow-1 rounded-xl border border-dark-gray outline-none mt-4"
        />

        {/* File Upload with Preview */}
        <div className="relative bg-primary h-14 px-4 py-2 shadow-boxshadow-1 rounded-xl mt-4 w-full">
          <input
            type="file"
            onChange={handleFileChange}
            className="opacity-0 absolute right-4 w-full h-full cursor-pointer"
          />
          <img
            src="/uploadimg-icon.svg"
            alt="upload data"
            className="absolute right-4 w-6 h-6 top-1/2 transform -translate-y-1/2 z-0"
          />
        </div>

        {/* Image Preview */}
        {previewUrl && (
          <div className="mt-4 w-1/4">
            <img
              src={previewUrl}
              alt="Preview"
              className="w-full h-auto rounded-lg shadow-boxshadow-1"
            />
          </div>
        )}
      </form>

      <div className="w-full" onClick={onClose}>
        <ButtonComponent
          label="Conform Complaint"
          btnColor="bg-decline-btn"
          btnWidth="w-full"
          btnHeight="h-[52px]"
          variant="complaint"
        />

        <ModalComponent
          isOpen={isOpen}
          onClose={onClose}
          width="300px"
          height="170px"
          children={
            <div className="flex items-center justify-center h-full">
              <div>
                <p className="text-center mb-4">
                  Are you sure you want to submit complaint?
                </p>
                <ButtonComponent
                  type="submit"
                  label="Conform Complaint"
                  btnWidth="w-full"
                  btnHeight="min-h-[46px]"
                  variant="complaint"
                  onClick={() => {
                    getApiCall('Conform Complaint');
                    onClose();
                  }}
                />
              </div>
            </div>
          }
        />
      </div>
    </div>
  );
};

export default ComplaintInput;
