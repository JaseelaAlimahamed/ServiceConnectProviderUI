// components/TextInput.js
import React from 'react';
import { Field, ErrorMessage } from 'formik';

const TextInput = ({ name, placeholder, type = 'text', className = '' }) => (
  <div className="w-[272px] mt-1">
    <Field
      type={type}
      name={name}
      placeholder={placeholder}
      className={`w-full p-2 bg-medium-gray text-primary placeholder-primary rounded-md shadow-md mb-2 border border-primary ${className}`}
    />
    <ErrorMessage name={name} component="p" className="text-dark-red text-sm" />
  </div>
);

export default TextInput;
