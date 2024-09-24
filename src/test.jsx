
import React, { useState } from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

// Categories and Subcategories data
const categories = {
  "Web Development": ["Frontend", "Backend", "Fullstack"],
  "Graphic Design": ["Logo Design", "UI/UX", "Banner Design"],
  "Marketing": ["SEO", "Content Marketing", "Social Media"],
};

// Validation schema using Yup
const validationSchema = Yup.object().shape({
  serviceTitle: Yup.string().required('Service Title is required'),
  description: Yup.string().required('Description is required'),
  gstCode: Yup.string().required('GST Code is required'),
  serviceCategory: Yup.string().required('Service Category is required'),
  serviceSubCategory: Yup.string().required('Service Sub-category is required'),
  terms: Yup.bool().oneOf([true], 'You must accept the Terms & Conditions'),
});

const RegisterService = () => {
  const [mediaFiles, setMediaFiles] = useState([]);

  const handleMediaFileChange = (e, setFieldValue) => {
    if (e.target.files.length > 0) {
      setMediaFiles([...mediaFiles, ...Array.from(e.target.files)]);
      setFieldValue('mediaFiles', mediaFiles);
    }
  };

  return (
    <div className="flex justify-center bg-gray-200">
      <div className="flex flex-col items-center p-6 bg-gray-200 rounded-md md:shadow-lg w-80 space-y-4">
        <Formik
          initialValues={{
            serviceTitle: '',
            description: '',
            gstCode: '',
            serviceCategory: '',
            serviceSubCategory: '',
            certificateFileName: '',
            licenseFileName: '',
            terms: false,
            mediaFiles: [],
          }}
          validationSchema={validationSchema}
          onSubmit={(values) => {
            // Log form values when successfully submitted
            console.log('Form Data:', values);
            alert('Form submitted successfully!');
          }}
        >
          {({ setFieldValue, values }) => (
            <Form>
              {/* Service Title */}
              <div className="w-full">
                <Field
                  type="text"
                  name="serviceTitle"
                  placeholder="Service Title"
                  className="w-full p-2 bg-gray-600 text-white rounded-md shadow-inner mb-2"
                />
                <ErrorMessage name="serviceTitle" component="p" className="text-red-500 text-sm" />
              </div>

              {/* Description */}
              <div className="w-full">
                <Field
                  type="text"
                  name="description"
                  placeholder="Description"
                  className="w-full p-2 bg-gray-600 text-white rounded-md shadow-inner mb-2"
                />
                <ErrorMessage name="description" component="p" className="text-red-500 text-sm" />
              </div>

              {/* GST Code */}
              <div className="w-full">
                <Field
                  type="text"
                  name="gstCode"
                  placeholder="GST Code"
                  className="w-full p-2 bg-gray-600 text-white rounded-md shadow-inner mb-2"
                />
                <ErrorMessage name="gstCode" component="p" className="text-red-500 text-sm" />
              </div>

              {/* Service Category */}
              <div className="w-full">
                <Field
                  as="select"
                  name="serviceCategory"
                  className="w-full p-2 bg-gray-600 text-white rounded-md shadow-inner mb-2"
                  onChange={(e) => {
                    setFieldValue('serviceCategory', e.target.value);
                    setFieldValue('serviceSubCategory', ''); // Reset subcategory
                  }}
                >
                  <option value="" disabled>Select Service Category</option>
                  {Object.keys(categories).map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="serviceCategory" component="p" className="text-red-500 text-sm" />
              </div>

              {/* Service Sub-category */}
              <div className="w-full">
                <Field
                  as="select"
                  name="serviceSubCategory"
                  className="w-full p-2 bg-gray-600 text-white rounded-md shadow-inner mb-2"
                  disabled={!values.serviceCategory}
                >
                  <option value="" disabled>Select Service Sub-category</option>
                  {values.serviceCategory &&
                    categories[values.serviceCategory].map((subCategory) => (
                      <option key={subCategory} value={subCategory}>
                        {subCategory}
                      </option>
                    ))}
                </Field>
                <ErrorMessage name="serviceSubCategory" component="p" className="text-red-500 text-sm" />
              </div>

              {/* File Upload for Certificate */}
              <div className="w-full relative mb-4">
                <input
                  type="text"
                  value={values.certificateFileName}
                  readOnly
                  placeholder="Certificate/License"
                  className="w-full p-2 bg-gray-600 text-white rounded-md shadow-inner"
                />
                <label htmlFor="certificate-upload" className="absolute right-2 top-2 cursor-pointer">
                  <svg className="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                  </svg>
                </label>
                <input
                  id="certificate-upload"
                  type="file"
                  className="hidden"
                  onChange={(e) => setFieldValue('certificateFileName', e.target.files[0]?.name || '')}
                />
              </div>

              {/* Media Upload */}
              <div className="w-full text-center mb-4">
                <label className="block text-sm font-medium text-gray-700 mb-2">Add image and video</label>
                <div className="flex justify-center items-center space-x-2">
                  {mediaFiles.slice(0, 3).map((file, index) => (
                    <img
                      key={index}
                      src={URL.createObjectURL(file)}
                      alt="uploaded"
                      className="w-10 h-10 object-cover rounded-md border"
                    />
                  ))}
                  {mediaFiles.length < 3 && (
                    <label htmlFor="media-upload" className="cursor-pointer">
                      <svg className="w-10 h-10 text-gray-600 border-2 border-gray-400 rounded-md p-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 4v16m8-8H4" />
                      </svg>
                    </label>
                  )}
                </div>
                <input
                  id="media-upload"
                  type="file"
                  accept="image/*, video/*"
                  className="hidden"
                  multiple
                  onChange={(e) => handleMediaFileChange(e, setFieldValue)}
                />
              </div>

              {/* Terms & Conditions */}
              <div className="flex items-center w-full mb-4">
                <label className="text-gray-700 mr-2">Terms & Conditions</label>
                <Field type="checkbox" name="terms" className="h-4 w-4" />
                <span className="ml-2">Accept</span>
              </div>
              <ErrorMessage name="terms" component="p" className="text-red-500 text-sm" />

              {/* Submit Button */}
              <button type="submit" className="w-full px-4 py-2 bg-black text-white rounded-md hover:bg-gray-700">
                Submit
              </button>
            </Form>
          )}
        </Formik>
      </div>
    </div>
  );
};

export default RegisterService;
