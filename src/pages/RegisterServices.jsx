import React, { useState } from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { useNavigate } from "react-router-dom";


const categories = {
  "Web Development": ["Frontend", "Backend", "Fullstack"],
  "Graphic Design": ["Logo Design", "UI/UX", "Banner Design"],
  Marketing: ["SEO", "Content Marketing", "Social Media"],
};

const validationSchema = Yup.object().shape({
  serviceTitle: Yup.string().required("Service Title is required"),
  description: Yup.string().required("Description is required"),
  gstCode: Yup.string().required("GST Code is required"),
  serviceCategory: Yup.string().required("Service Category is required"),
  serviceSubCategory: Yup.string().required("Service Sub-category is required"),
  terms: Yup.bool().oneOf([true], "You must accept the Terms & Conditions"),
  // If you want to make the certificates required, uncomment the lines below
  // certificateFileName: Yup.string().required('Certificate is required'),
  // licenseFileName: Yup.string().required('License is required'),
});

const RegisterService = () => {
  const [mediaFiles, setMediaFiles] = useState([]);
  const [certificatePreview, setCertificatePreview] = useState(null);
  const [licensePreview, setLicensePreview] = useState(null); // State for the second certificate/license

  const handleMediaFileChange = (e, setFieldValue) => {
    if (e.target.files.length > 0) {
      const selectedFiles = Array.from(e.target.files);
      setMediaFiles([...mediaFiles, ...selectedFiles]);
      setFieldValue("mediaFiles", mediaFiles);
    }
  };

  const navigate = useNavigate(); // Initialize useNavigate

  const handleCertificateChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    if (file) {
      setFieldValue("certificateFileName", file.name);
      setCertificatePreview(URL.createObjectURL(file));
    }
  };

  // New function to handle the second certificate/license
  const handleLicenseChange = (e, setFieldValue) => {
    const file = e.target.files[0];
    if (file) {
      setFieldValue("licenseFileName", file.name);
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
    <div className="flex  bg-[#D9D9DB] overflow-auto"  >
      <div className="flex flex-col items-center p-6 bg-[#D9D9DB] rounded-md md:shadow-lg w-screen min-h-screen justify-center overflow-auto">
   
       

        <Formik
          initialValues={{
            serviceTitle: "",
            description: "",
            gstCode: "",
            serviceCategory: "",
            serviceSubCategory: "",
            certificateFileName: "",
            licenseFileName: "", // Initial value for the second certificate/license
            terms: false,
            mediaFiles: [],
          }}
          validationSchema={validationSchema}
          validateOnBlur={true}
          onSubmit={(values) => {
            const processedMediaFiles = processMediaFiles();
            const formData = {
              ...values,
              mediaFiles: processedMediaFiles,
            };
            console.log("Form Data:", formData);
              // Navigate to /Registered-Services after successful submission
              navigate("/Registered-Services");
          }}
        >
          {({ setFieldValue, values, handleSubmit }) => (
            <Form
              className="flex flex-col items-center bg-[#D9D9DB] md:p-10 md:rounded-md md:shadow-xl "
              onSubmit={handleSubmit}
            >
              {/* Service Title */}
              <div className="w-[272px] mt-1">
                <Field
                  type="text"
                  name="serviceTitle"
                  placeholder="Service Title"
                  className="w-full p-2 bg-[#736A68] text-white placeholder-white rounded-md shadow-md mb-2 border border-white"
                />
              </div>
              <ErrorMessage
                name="serviceTitle"
                component="p"
                className="text-red-500 text-sm"
              />

              {/* Description */}
              <div className="w-[272px] mt-1">
                <Field
                  type="text"
                  name="description"
                  placeholder="Description"
                  className="w-full p-2 bg-[#736A68] text-white rounded-md shadow-md mb-2 placeholder-white border border-white"
                />
              </div>
              <ErrorMessage
                name="description"
                component="p"
                className="text-red-500 text-sm"
              />

              {/* GST Code */}
              <div className="w-[272px] mt-1">
                <Field
                  type="text"
                  name="gstCode"
                  placeholder="GST Code"
                  className="w-full p-2 bg-[#736A68] text-white rounded-md shadow-md mb-2 placeholder-white border border-white"
                />
              </div>
              <ErrorMessage
                name="gstCode"
                component="p"
                className="text-red-500 text-sm"
              />

              {/* Service Category */}
              <div className="w-[272px] mt-1">
                <Field
                  as="select"
                  name="serviceCategory"
                  className="w-full p-2 bg-[#736A68] text-white rounded-md shadow-md mb-2 border border-white"
                  onChange={(e) => {
                    setFieldValue("serviceCategory", e.target.value);
                    setFieldValue("serviceSubCategory", "");
                  }}
                >
                  <option value="" disabled>
                    Select Service Category
                  </option>
                  {Object.keys(categories).map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </Field>
              </div>
              <ErrorMessage
                name="serviceCategory"
                component="p"
                className="text-red-500 text-sm"
              />

              {/* Service Sub-category */}
              <div className="w-[272px] mt-1">
                <Field
                  as="select"
                  name="serviceSubCategory"
                  className="p-2 bg-[#736A68] text-white rounded-md shadow-md mb-2 border border-white w-full"
                  disabled={!values.serviceCategory}
                >
                  <option value="" disabled>
                    Select Service Sub-category
                  </option>
                  {values.serviceCategory &&
                    categories[values.serviceCategory].map((subCategory) => (
                      <option key={subCategory} value={subCategory}>
                        {subCategory}
                      </option>
                    ))}
                </Field>
              </div>
              <ErrorMessage
                name="serviceSubCategory"
                component="p"
                className="text-red-500 text-sm"
              />

              {/* File Upload for First Certificate */}
              <div className="w-[272px] mt-1 shadow-md relative mb-1 flex items-center">
                <input
                  type="text"
                  value={values.certificateFileName}
                  readOnly
                  placeholder="Certificate"
                  className="p-2 bg-[#736A68] text-white rounded-md shadow-inner w-full placeholder-white border border-white"
                />
                <label
                  htmlFor="certificate-upload"
                  className="absolute right-2 top-2 cursor-pointer text-white"
                >
                  <svg
                  className="w-6 h-6 text-white"

                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="none"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="32"
                      d="M216.08 192v143.85a40.08 40.08 0 0 0 80.15 0l.13-188.55a67.94 67.94 0 1 0-135.87 0v189.82a95.51 95.51 0 1 0 191 0V159.74"
                    />
                  </svg>
                </label>
                <input
                  id="certificate-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleCertificateChange(e, setFieldValue)}
                />
                {/* Preview of the uploaded certificate */}
                {certificatePreview && (
                  <img
                    src={certificatePreview}
                    alt="Certificate Preview"
                    className="w-10 h-10 object-cover rounded-md ml-2"
                  />
                )}
              </div>
              {/* If you add validation for the certificate, include ErrorMessage */}
              {/* <ErrorMessage name="certificateFileName" component="p" className="text-red-500 text-sm" /> */}

              {/* File Upload for Second Certificate/License */}
              <div className="w-[272px] mt-1 shadow-md relative mb-4 flex items-center">
                <input
                  type="text"
                  value={values.licenseFileName}
                  readOnly
                  placeholder="License"
                  className="p-2 bg-[#736A68] text-white rounded-md shadow-inner w-full placeholder-white border border-white"
                />
                <label
                  htmlFor="license-upload"
                  className="absolute right-2 top-2 cursor-pointer text-white"
                >
                  <svg
                  className="w-6 h-6 text-white"

                    xmlns="http://www.w3.org/2000/svg"
                    width="1em"
                    height="1em"
                    viewBox="0 0 512 512"
                  >
                    <path
                      fill="none"
                      stroke="white"
                      stroke-linecap="round"
                      stroke-miterlimit="10"
                      stroke-width="32"
                      d="M216.08 192v143.85a40.08 40.08 0 0 0 80.15 0l.13-188.55a67.94 67.94 0 1 0-135.87 0v189.82a95.51 95.51 0 1 0 191 0V159.74"
                    />
                  </svg>
                </label>
                <input
                  id="license-upload"
                  type="file"
                  accept="image/*"
                  className="hidden"
                  onChange={(e) => handleLicenseChange(e, setFieldValue)}
                />
                {/* Preview of the uploaded license */}
                {licensePreview && (
                  <img
                    src={licensePreview}
                    alt="License Preview"
                    className="w-10 h-10 object-cover rounded-md ml-1"
                  />
                )}
              </div>
              {/* If you add validation for the license, include ErrorMessage */}
              {/* <ErrorMessage name="licenseFileName" component="p" className="text-red-500 text-sm" /> */}

              {/* Media Upload */}
              <div className="w-full mb-5">
  <label className="block text-sm font-medium text-gray-700 mb-1">
    Add image and video
  </label>
  <div className="flex justify-start space-x-2">
    {mediaFiles.length === 0 && (
      <>
        <svg
          className="w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="black"
            d="M2.992 21A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993zM20 15V5H4v14L14 9zm0 2.828l-6-6L6.828 19H20zM8 11a2 2 0 1 1 0-4a2 2 0 0 1 0 4"
          />
        </svg>
        <svg
          className="w-10 h-10"
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
        >
          <path
            fill="black"
            d="M2.992 21A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993zM20 15V5H4v14L14 9zm0 2.828l-6-6L6.828 19H20zM8 11a2 2 0 1 1 0-4a2 2 0 0 1 0 4"
          />
        </svg>
        <svg
                        className="w-10 h-10"
                        xmlns="http://www.w3.org/2000/svg"
                        width="1em"
                        height="1em"
                        viewBox="0 0 24 24"
                      >
                        <path
                          fill="black"
                          d="M2.992 21A.993.993 0 0 1 2 20.007V3.993A1 1 0 0 1 2.992 3h18.016c.548 0 .992.445.992.993v16.014a1 1 0 0 1-.992.993zM20 15V5H4v14L14 9zm0 2.828l-6-6L6.828 19H20zM8 11a2 2 0 1 1 0-4a2 2 0 0 1 0 4"
                        />
                      </svg>
      </>
    )}
    {mediaFiles.slice(0, 3).map((file, index) => (
      <div key={index} className="relative">
        <img
          src={URL.createObjectURL(file)}
          alt="uploaded"
          className="w-10 h-10 object-cover rounded-md border border-white"
        />
        {/* Remove Button */}
        <button
          type="button"
          onClick={() => {
            const newFiles = mediaFiles.filter((_, i) => i !== index);
            setMediaFiles(newFiles);
            setFieldValue("mediaFiles", newFiles);
          }}
          className="absolute -top-2 -right-2 bg-red-600 text-white rounded-full p-1 w-6 h-6 flex items-center justify-center text-xs"
        >
          &times;
        </button>
      </div>
    ))}
    {mediaFiles.length < 3 && (
      <label htmlFor="media-upload" className="cursor-pointer">
        <svg
          className="w-10 h-10 bg-[#D9D9DB] border-gray-400 rounded-md p-1"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 4v16m8-8H4"
          />
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
              </div>
              <ErrorMessage
                name="terms"
                component="p"
                className="text-red-500 text-sm"
              />

              {/* Submit Button */}
              <button
                type="submit"
                disabled={false}
                className="rounded-full bg-[#1D1F2A] mt-2 py-4 text-white font-default hover:bg-gray-700 transition-all duration-300 disabled:opacity-50 flex items-center justify-between px-4 w-[350px] h-[60px]"
              >
                <span className="flex-grow text-center">Continue</span>
                <img
                  src="./buttonArrow.svg"
                  className=" w-10 h-10"
                  alt="arrow pointing right"
                />
              </button>
            </Form>
          )}
        </Formik>
        
      </div>
    </div>
  );
};

export default RegisterService;
