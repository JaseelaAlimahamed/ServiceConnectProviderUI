// validationSchema.js
import * as Yup from 'yup';

export const validationSchema = Yup.object().shape({
  serviceTitle: Yup.string().required('Service Title is required'),
  description: Yup.string().required('Description is required'),
  gstCode: Yup.string().required('GST Code is required'),
  serviceCategory: Yup.string().required('Service Category is required'),
  serviceSubCategory: Yup.string().required('Service Sub-category is required'),
  terms: Yup.bool().oneOf([true], 'You must accept the Terms & Conditions'),
  // Uncomment the lines below to make certificates required
  // certificateFileName: Yup.string().required('Certificate is required'),
  // licenseFileName: Yup.string().required('License is required'),
});
