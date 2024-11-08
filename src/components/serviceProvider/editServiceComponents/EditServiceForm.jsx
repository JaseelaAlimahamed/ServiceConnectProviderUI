import React, { useState, useEffect } from 'react';
import { Formik, Form } from 'formik';

// Import reusable components
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import FileUpload from './FileUpload';
import MediaUpload from './MediaUpload';
import TermsCheckbox from './TermsCheckbox';
import SubmitButton from './SubmitButton';

// import { initialValues } from './initialValues';
import { validationSchema } from './validationSchema';
import { categories } from './categories';

const EditServiceForm = ({ setFormValues,data,setLeadBalance, setShowPaymentModal, serviceId }) => {
  const [mediaFiles, setMediaFiles] = useState([]);
  const [certificatePreview, setCertificatePreview] = useState(null);
  const [licensePreview, setLicensePreview] = useState(null);


 

  useEffect(() => {
    if (serviceId) {
      console.log('Service ID:', serviceId);
    }
  }, [serviceId]);

  const handleMediaFileChange = (e) => {
    if (e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files);
      const updatedFiles = [...mediaFiles, ...selectedFiles];
      setMediaFiles(updatedFiles);
    }
  };

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

  return (
    <Formik
    enableReinitialize={true}
      initialValues={data}
      validationSchema={validationSchema}
      validateOnBlur={true}
      
      onSubmit={(values) => {
        setFormValues({ ...values, mediaFiles });
        setLeadBalance(values.leadBalance);
        setShowPaymentModal(true);
      }}
   
    >
      {({ setFieldValue, values, handleSubmit }) => (
        
      
        <Form
          className="flex flex-col items-center bg-light-gray md:p-10 md:rounded-md md:shadow-xl"
          onSubmit={handleSubmit}
        >
          {/* Status Selection */}
          <SelectInput
            name="status"
            bgColor="dark-gray"
            options={[
              { value: 'Active', label: 'Active' },
              { value: 'Inactive', label: 'Inactive' },
            ]}
            className="w-[272px] mt-1 mb-4 text-center  text-white flex"
          />

          {/* Conditionally render the available lead balance and add balance button if the service type is "Lead" */}
          {values.servicetype === 'Lead' && values.leadBalance >= 0 && (
            <div className="text-center mb-4">
              <h2 className="text-lg font-semibold">
                Available lead balance: {values.leadBalance}
              </h2>
            </div>
          )}

          {values.servicetype === 'Lead' && (
            <button
              type="button"
              onClick={() =>
                setFieldValue('leadBalance', (values.leadBalance || 0) + 1)
              }
              className="rounded-md bg-dark-gray py-2 text-white font-default hover:bg-gray-700 transition-all duration-300 w-[272px] mb-1"
            >
              Add Lead Balance
            </button>
          )}

          <TextInput name="serviceTitle" placeholder="Service Title" />
          <TextInput name="description" placeholder="Description" />
          <TextInput name="gstCode" placeholder="GST Code" />

          {/* Service Category */}
          <SelectInput
            name="serviceCategory"
            bgColor="medium-gray"
            options={[
              { value: '', label: 'Select Service Category', disabled: true },
              ...Object.keys(categories).map((category) => ({
                value: category,
                label: category,
              })),
            ]}
            onChange={(e) => {
              setFieldValue('serviceCategory', e.target.value);
              setFieldValue('serviceSubCategory', '');
            }}
          />

          {/* Service Sub-Category */}
          <SelectInput
            name="serviceSubCategory"
            bgColor="medium-gray"
            options={[
              { value: '', label: 'Select Service Sub-category', disabled: true },
              ...(values.serviceCategory
                ? categories[values.serviceCategory].map((subCategory) => ({
                    value: subCategory,
                    label: subCategory,
                  }))
                : []),
            ]}
            disabled={!values.serviceCategory}
          />

          {/* File Upload for Certificate */}
          <FileUpload
            id="certificate-upload"
            value={values.certificateFileName}
            placeholder="Certificate"
            onChange={(e) => handleCertificateChange(e, setFieldValue)}
            preview={certificatePreview}
          />

          {/* File Upload for License */}
          <FileUpload
            id="license-upload"
            value={values.licenseFileName}
            placeholder="License"
            onChange={(e) => handleLicenseChange(e, setFieldValue)}
            preview={licensePreview}
          />

          {/* Media Upload */}
          <MediaUpload
            mediaFiles={mediaFiles}
            setMediaFiles={setMediaFiles}
            handleMediaFileChange={handleMediaFileChange}
          />

          {/* Terms and Conditions Checkbox */}
          <TermsCheckbox />

          {/* Submit Button */}
          <SubmitButton />
        </Form>
      )}
    </Formik>
  );
};

export default EditServiceForm;
