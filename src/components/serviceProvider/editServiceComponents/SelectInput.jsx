// components/SelectInput.js
import React from 'react';
import { Field, ErrorMessage } from 'formik';

const SelectInput = ({ name, options, onChange, disabled = false, className = '', bgColor }) => {


  return (
    <div className="w-[272px] mt-1">
      <Field name={name}>
        {({ field }) => (
          <select
            {...field}
            className={`w-full p-2 text-primary rounded-md shadow-md mb-2 border border-primary bg-${bgColor} ${className}`} // Apply Tailwind class for bgColor
            disabled={disabled}
            onChange={(e) => {
              // Call Formik's default onChange handler
              field.onChange(e);
              // Call any custom onChange handler passed in
              if (onChange) {
                onChange(e);
              }
            }}
          >
            {options.map(({ value, label, disabled: optionDisabled }) => (
              <option key={value} value={value} disabled={optionDisabled}>
                {label}
              </option>
            ))}
          </select>
        )}
      </Field>
      <ErrorMessage name={name} component="p" className="text-dark-red text-sm" />
    </div>
  );
};

export default SelectInput;
