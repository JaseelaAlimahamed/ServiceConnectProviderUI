// InputField.js
import React from 'react';
import { Field, ErrorMessage } from 'formik';

const InputField = ({ name, type = 'text', placeholder, className }) => (
  <div className="w-[272px] mt-1">
    <Field
      type={type}
      name={name}
      placeholder={placeholder}
      className={`w-full p-2 bg-[#736A68] text-white rounded-md shadow-md mb-2 placeholder-white border border-white ${className}`}
    />
    <ErrorMessage
      name={name}
      component="p"
      className="text-red-500 text-sm"
    />
  </div>
);

export default InputField;
