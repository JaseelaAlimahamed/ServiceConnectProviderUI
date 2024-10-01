// SelectField.js
import React from 'react';
import { Field, ErrorMessage } from 'formik';

const SelectField = ({ name, options, onChange, disabled, className }) => (
  <div className="w-[272px] mt-1">
    <Field name={name}>
      {({ field }) => (
        <select
          {...field}
          className={`w-full p-2 bg-[#736A68] text-white rounded-md shadow-md mb-2 border border-white ${className}`}
          onChange={(e) => {
            field.onChange(e); // Formik's internal handler
            if (onChange) {
              onChange(e); // Your custom handler
            }
          }}
          disabled={disabled}
        >
          <option value="" disabled>
            Select {name === 'serviceCategory' ? 'Service Category' : 'Service Sub-category'}
          </option>
          {options.map((option) => (
            <option key={option.value || option} value={option.value || option}>
              {option.label || option}
            </option>
          ))}
        </select>
      )}
    </Field>
    <ErrorMessage
      name={name}
      component="p"
      className="text-red-500 text-sm"
    />
  </div>
);

export default SelectField;
