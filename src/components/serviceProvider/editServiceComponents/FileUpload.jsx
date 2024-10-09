// components/FileUpload.js
import React from 'react';

const FileUpload = ({ id, value, placeholder, onChange, preview, className = '' }) => (
  <div className={`w-[272px] mt-1 shadow-md relative mb-1 flex items-center ${className}`}>
    <input
      type="text"
      value={value}
      readOnly
      placeholder={placeholder}
      className="p-2 bg-medium-gray text-primary rounded-md shadow-inner w-full placeholder-primary border border-primary"
      
    />
    <label htmlFor={id} className="absolute right-2 top-2 cursor-pointer text-primary">
      <svg
        className="w-6 h-6 text-primary"
        xmlns="http://www.w3.org/2000/svg"
        width="1em"
        height="1em"
        viewBox="0 0 512 512"
      >
        <path
          fill="none"
          stroke="white"
          strokeLinecap="round"
          strokeMiterlimit="10"
          strokeWidth="32"
          d="M216.08 192v143.85a40.08 40.08 0 0 0 80.15 0l.13-188.55a67.94 67.94 0 1 0-135.87 0v189.82a95.51 95.51 0 1 0 191 0V159.74"
        />
      </svg>
    </label>
    <input
      id={id}
      type="file"
      accept="image/*"
      className="hidden"
      onChange={onChange}
    />
    {preview && (
      <img
        src={preview}
        alt="Preview"
        className="w-10 h-10 object-cover rounded-md ml-2"
      />
    )}
  </div>
);

export default FileUpload;
