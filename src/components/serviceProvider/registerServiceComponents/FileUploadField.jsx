// FileUploadField.js
import React from 'react';

const FileUploadField = ({
  name,
  placeholder,
  value,
  onChange,
  previewSrc,
}) => (
  <div className="w-[272px] mt-1 shadow-md relative mb-1 flex items-center">
    <input
      type="text"
      value={value}
      readOnly
      placeholder={placeholder}
      className="p-2 bg-[#736A68] text-white rounded-md shadow-inner w-full placeholder-white border border-white"
    />
    <label
      htmlFor={`${name}-upload`}
      className="absolute right-2 top-2 cursor-pointer text-white"
    >
      <svg
        className="w-6 h-6 text-white"
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
      id={`${name}-upload`}
      type="file"
      accept="image/*"
      className="hidden"
      onChange={onChange}
    />
    {previewSrc && (
      <img
        src={previewSrc}
        alt={`${placeholder} Preview`}
        className="w-10 h-10 object-cover rounded-md ml-2"
      />
    )}
  </div>
);

export default FileUploadField;
