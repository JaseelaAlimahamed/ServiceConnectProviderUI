import React, { useState } from 'react';
import { Formik, Form } from 'formik';
import { useNavigate } from 'react-router-dom';

// Import reusable components
import TextInput from './TextInput';
import SelectInput from './SelectInput';
import FileUpload from './FileUpload';
import MediaUpload from './MediaUpload';
import TermsCheckbox from './TermsCheckbox';
import SubmitButton from './SubmitButton';

// Import initial values, validation schema, and categories
import { initialValues } from './initialValues';
import { validationSchema } from './validationSchema';
import { categories } from './categories';

// Import the PaymentModal component
import PaymentModal from './editServiceModal';

const EditService = () => {
  const [mediaFiles, setMediaFiles] = useState([]);
  const [certificatePreview, setCertificatePreview] = useState(null);
  const [licensePreview, setLicensePreview] = useState(null);
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [leadBalance, setLeadBalance] = useState(0);
  const [formValues, setFormValues] = useState(initialValues);

  const navigate = useNavigate();

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

  const processMediaFiles = () => {
    return mediaFiles.map((file, index) => ({
      image_id: index + 1,
      image_url: URL.createObjectURL(file),
    }));
  };

  return (
    <div className="flex bg-[#D9D9DB] overflow-auto">
      <div className="flex flex-col items-center p-6 bg-[#D9D9DB] rounded-md md:shadow-lg w-screen min-h-screen justify-center overflow-auto">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          validateOnBlur={true}
          onSubmit={(values) => {
            // Store form values and show the payment modal
            setFormValues(values);
            setLeadBalance(values.leadBalance);
            setShowPaymentModal(true);
          }}
        >
          {({ setFieldValue, values, handleSubmit }) => (
            <Form
              className="flex flex-col items-center bg-[#D9D9DB] md:p-10 md:rounded-md md:shadow-xl"
              onSubmit={handleSubmit}
            >
              {/* Status Dropdown */}
              <SelectInput
                name="status"
                bgColor="#1D1F2A"
                options={[
                  { value: 'Active', label: 'Active' },
                  { value: 'Inactive', label: 'Inactive' },
                ]}
                className="w-[272px] mt-1 mb-4 text-center bg-[#1D1F2A] text-white"
              />

              {/* Conditionally Render Available Lead Balance */}
              {values.leadBalance > 0 && (
                <div className="text-center mb-4">
                  <h2 className="text-lg font-semibold">
                    Available lead balance: {values.leadBalance}
                  </h2>
                </div>
              )}

              {/* Conditionally Render Add Lead Balance Button */}
              {values.leadBalance > 0 && (
                <button
                  type="button"
                  onClick={() =>
                    setFieldValue('leadBalance', (values.leadBalance || 0) + 1)
                  }
                  className="rounded-md bg-[#1D1F2A] py-2 text-white font-default hover:bg-gray-700 transition-all duration-300 w-[272px] mb-1"
                >
                  Add Lead Balance
                </button>
              )}

              {/* Service Title */}
              <TextInput name="serviceTitle" placeholder="Service Title" />

              {/* Description */}
              <TextInput name="description" placeholder="Description" />

              {/* GST Code */}
              <TextInput name="gstCode" placeholder="GST Code" />

              {/* Service Category */}
              <SelectInput
                name="serviceCategory"
                bgColor="#736A68"
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

              {/* Service Sub-category */}
              <SelectInput
                name="serviceSubCategory"
                bgColor="#736A68"
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

              {/* Terms & Conditions */}
              <TermsCheckbox />

              {/* Submit Button */}
              <SubmitButton />
            </Form>
          )}
        </Formik>

        {/* Payment Modal */}
        {showPaymentModal && (
          <PaymentModal
            isLoading={isLoading}
            leadBalance={leadBalance}
            onClose={() => setShowPaymentModal(false)}
            onConfirm={() => {
              // Handle the confirm and pay action
              setIsLoading(true);

              // Process and log the form data
              const processedMediaFiles = processMediaFiles();
              const formData = {
                ...formValues,
                mediaFiles: processedMediaFiles,
              };
              console.log('Form Data:', formData);

              // Simulate payment processing
              setTimeout(() => {
                setIsLoading(false);
                setShowPaymentModal(false);
                navigate('/Registered-Services');
              }, 2000);
            }}
          />
        )}
      </div>
    </div>
  );
};

export default EditService;
