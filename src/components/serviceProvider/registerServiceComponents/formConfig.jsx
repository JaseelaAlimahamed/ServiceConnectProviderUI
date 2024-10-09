// components/formConfig.js
import * as Yup from 'yup';

export const categories = {
  'Web Development': ['Frontend', 'Backend', 'Fullstack'],
  'Graphic Design': ['Logo Design', 'UI/UX', 'Banner Design'],
  Marketing: ['SEO', 'Content Marketing', 'Social Media'],
};

export const validationSchema = Yup.object().shape({
  serviceTitle: Yup.string().required('Service Title is required'),
  description: Yup.string().required('Description is required'),
  gstCode: Yup.string().required('GST Code is required'),
  serviceCategory: Yup.string().required('Service Category is required'),
  serviceSubCategory: Yup.string().required('Service Sub-category is required'),
  terms: Yup.bool().oneOf([true], 'You must accept the Terms & Conditions'),
  // Uncomment the lines below if certificates are required
  // certificateFileName: Yup.string().required('Certificate is required'),
  // licenseFileName: Yup.string().required('License is required'),
});

export const initialValues = {
  serviceTitle: '',
  description: '',
  gstCode: '',
  serviceCategory: '',
  serviceSubCategory: '',
  certificateFileName: '',
  licenseFileName: '',
  terms: false,
  mediaFiles: [],
};
