// components/FormikForm.js
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import { validationSchema, initialValues, categories } from './formConfig';
import InputField from './InputField';
import SelectField from './SelectField';
import FileUploadField from './FileUploadField';
import MediaUpload from './MediaUpload';

const AddServiceForm = ({ mediaFiles, setMediaFiles, onSubmit }) => {
  const [certificatePreview, setCertificatePreview] = useState(null);
  const [licensePreview, setLicensePreview] = useState(null);

  const handleCertificateChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    if (file) {
      setFieldValue('certificateFileName', file.name);
      setCertificatePreview(URL.createObjectURL(file));
    }
  };

  const handleLicenseChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    if (file) {
      setFieldValue('licenseFileName', file.name);
      setLicensePreview(URL.createObjectURL(file));
    }
  };

  const processMediaFiles = () => {
    return mediaFiles.map((file, index) => ({
      image_id: index + 1,
      image_url: URL.createObjectURL(file),
    }));
  };

  return (
    <Formik
      initialValues={initialValues}
      validationSchema={validationSchema}
      onSubmit={(values) => {
        const processedMediaFiles = processMediaFiles();
        const formData = {
          ...values,
          mediaFiles: processedMediaFiles,
        };
        onSubmit(formData);
      }}
    >
      {({ setFieldValue, values }) => (
        <Form className="flex flex-col items-center bg-[#D9D9DB] md:p-10 md:rounded-md md:shadow-xl">
          <InputField name="serviceTitle" placeholder="Service Title" />
          <InputField name="description" placeholder="Description" />
          <InputField name="gstCode" placeholder="GST Code" />

          <SelectField
            name="serviceCategory"
            options={Object.keys(categories).map((category) => ({
              label: category,
              value: category,
            }))}
            onChange={(e) => {
              setFieldValue('serviceCategory', e.target.value);
              setFieldValue('serviceSubCategory', '');
            }}
          />

          <SelectField
            name="serviceSubCategory"
            options={
              values.serviceCategory
                ? categories[values.serviceCategory].map((sub) => ({
                    label: sub,
                    value: sub,
                  }))
                : []
            }
            disabled={!values.serviceCategory}
          />

          <FileUploadField
            name="certificateFileName"
            placeholder="Certificate"
            value={values.certificateFileName}
            onChange={(e) => handleCertificateChange(e, setFieldValue)}
            previewSrc={certificatePreview}
          />

          <FileUploadField
            name="licenseFileName"
            placeholder="License"
            value={values.licenseFileName}
            onChange={(e) => handleLicenseChange(e, setFieldValue)}
            previewSrc={licensePreview}
          />

          <MediaUpload
            mediaFiles={mediaFiles}
            setMediaFiles={setMediaFiles}
            setFieldValue={setFieldValue}
          />

          {/* Terms & Conditions */}
          <div className="flex justify-between items-center w-full mb-2">
            <label className="text-[#222222] mr-2 text-[12px] font-default">
              Terms & Conditions
            </label>
            <div>
              <Field type="checkbox" name="terms" className="h-4 w-4" />
              <span className="ml-2 text-[14px] font-default text-[#222222]">
                Accept
              </span>
            </div>
          </div>
          <ErrorMessage
            name="terms"
            component="p"
            className="text-red-500 text-sm"
          />

          {/* Submit Button */}
          <button
            type="submit"
            className="rounded-full bg-[#1D1F2A] mt-2 py-4 text-white font-default hover:bg-gray-700 transition-all duration-300 disabled:opacity-50 flex items-center justify-between px-4 w-[350px] h-[60px]"
          >
            <span className="flex-grow text-center">Continue</span>
            <img
              src="./buttonArrow.svg"
              className="w-10 h-10"
              alt="arrow pointing right"
            />
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default AddServiceForm;
