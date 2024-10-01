// components/TermsCheckbox.js
import React from 'react';
import { Field, ErrorMessage } from 'formik';

const TermsCheckbox = () => (
  <div className="flex justify-between items-center w-full mb-2">
    <div>
      <label className="text-[#222222] mr-2 text-[12px] font-default">
        Terms & Conditions
      </label>
    </div>
    <div>
      <Field type="checkbox" name="terms" className="h-4 w-4" />
      <span className="ml-2 text-[14px] font-default text-[#222222]">
        Accept
      </span>
    </div>
    <ErrorMessage name="terms" component="p" className="text-red-500 text-sm" />
  </div>
);

export default TermsCheckbox;
