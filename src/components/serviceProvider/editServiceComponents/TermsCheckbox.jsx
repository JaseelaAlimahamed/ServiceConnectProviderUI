// components/TermsCheckbox.js
import React from 'react';
import { Field, ErrorMessage } from 'formik';

const TermsCheckbox = () => (
  <div>
  <div className="flex justify-start  w-full mb-2">
    <div>
      <label className="text-secondary mr-2 text-[12px] font-default">
        Terms & Conditions
      </label>
    </div>
    <div>
      <Field type="checkbox" name="terms" className="h-4 w-4" />
      <span className="ml-2 text-[14px] font-default text-secondary">
        Accept
      </span> 
    </div>
  </div>
      <ErrorMessage name="terms" component="p" className="text-dark-red text-sm" />
</div>
);

export default TermsCheckbox;
