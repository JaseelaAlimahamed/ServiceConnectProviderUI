// components/MediaUpload.jsx
import React from "react";

const MediaUpload = ({ mediaFiles, setMediaFiles, handleMediaFileChange }) => (
  <div className="w-full mb-5">
    <label className="block text-sm font-medium text-gray-700 mb-1">
      Add image and video
    </label>
    <div className="flex justify-start space-x-2">
      {mediaFiles.length === 0 && (
        <>
          {/* Placeholder SVG icons */}
          <svg
            className="w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="black"
              d="M2.992 21A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993zM20 15V5H4v14L14 9zm0 2.828l-6-6L6.828 19H20zM8 11a2 2 0 1 1 0-4a2 2 0 0 1 0 4"
            />
          </svg>
          <svg
            className="w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="black"
              d="M2.992 21A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993zM20 15V5H4v14L14 9zm0 2.828l-6-6L6.828 19H20zM8 11a2 2 0 1 1 0-4a2 2 0 0 1 0 4"
            />
          </svg>

          <svg
            className="w-10 h-10"
            xmlns="http://www.w3.org/2000/svg"
            width="1em"
            height="1em"
            viewBox="0 0 24 24"
          >
            <path
              fill="black"
              d="M2.992 21A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993zM20 15V5H4v14L14 9zm0 2.828l-6-6L6.828 19H20zM8 11a2 2 0 1 1 0-4a2 2 0 0 1 0 4"
            />
          </svg>
        </>
      )}
      {mediaFiles.slice(0, 3).map((file, index) => (
        <div key={index} className="relative">
          <img
            src={URL.createObjectURL(file)}
            alt="uploaded"
            className="w-10 h-10 object-cover rounded-md border border-white"
          />
          {/* Remove Button */}
          <button
            type="button"
            onClick={() => {
              const newFiles = mediaFiles.filter((_, i) => i !== index);
              setMediaFiles(newFiles);
            }}
            className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 w-6 h-6 flex items-center justify-center text-xs"
          >
            &times;
          </button>
        </div>
      ))}
      {mediaFiles.length < 3 && (
        <label htmlFor="media-upload" className="cursor-pointer">
          <svg
            className="w-10 h-10 bg-[#D9D9DB] border-gray-400 rounded-md p-1"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M12 4v16m8-8H4"
            />
          </svg>
        </label>
      )}
    </div>
    <input
      id="media-upload"
      type="file"
      accept="image/*, video/*"
      className="hidden"
      multiple
      onChange={handleMediaFileChange}
    />
  </div>
);

export default MediaUpload;
