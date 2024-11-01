import React, { useState, useEffect } from 'react'; 
import { useNavigate } from 'react-router-dom'; 
import { BiEnvelope } from 'react-icons/bi';

import FormComponent from '../../reUsableComponents/FormComponent';
import ReusableModal from '../../reUsableComponents/ReModal';
import ModalComponent from '../../reUsableComponents/ModalComponent';

import image from '../../../assets/image.png';
import { postProfileData, getLocationData ,getAdditionalData} from '../../../services/profile.js';

const buttonConfig = {
  label: 'Continue',
  type: 'submit',
  btnWidth: 'w-full',
  btnHeight: 'h-12',
};

const inputConfig = {
  inputWidth: '100%',
  inputHeight: '48px',
};

const fieldConfigs = [
  { name: 'full_name', label: 'Full Name', placeholder: 'Enter your full name', type: 'text', required: true },
  { name: 'address', label: 'Address', placeholder: 'Enter your address', type: 'text', required: true },
  { name: 'date_of_birth', label: 'Date of Birth', placeholder: 'Enter your date of birth', type: 'date', required: true },
  { name: 'email', label: 'Email', placeholder: 'Enter your email', type: 'email', required: true, icon: <BiEnvelope /> },
  { name: 'phone_number', label: 'Mobile', placeholder: 'Enter your Phone number', type: 'tel', required: true },
  { name: 'gender', label: 'Gender', placeholder: 'Enter your gender', type: 'text', required: false },
  { name: 'house_name', label: 'House Name', placeholder: 'Enter your house name', type: 'text', required: true },
  { name: 'landmark', label: 'Landmark', placeholder: 'Enter landmark', type: 'text', required: true },
  { name: 'pin_code', label: 'Pincode', placeholder: 'Enter your pincode', type: 'text', required: true },
  { name: 'district', label: 'District', placeholder: 'Enter your district', type: 'text', required: true },
  { name: 'state', label: 'State', placeholder: 'Enter your state', type: 'text', required: true },
];

const FillYourProfile = () => {
  const [isLoading, setIsLoading] = useState(false); 
  const [isModalOpen, setIsModalOpen] = useState(false); 
  const [formData, setFormData] = useState({});
  const navigate = useNavigate(); 
  const profile = true;

  useEffect(() => {
    const fetchLocationData = async () => {
      try {
        const response = await getLocationData(); // Call the API to get location data
        setFormData((prevData) => ({
          ...prevData,
          district: response.district,
          state: response.state,
        }));
      } catch (error) {
        console.error('Error fetching location data:', error);
      }
    };

    fetchLocationData();
  }, []); 

  useEffect(()=>{
    const fetchAdditionalData=async()=>{
      try{
        const response = await getAdditionalData();
         setFormData((prevData)=>({
          ...prevData,
          dealer:response.dealer,
          franchisee:response.franchisee,
          payout_required:response.payout_required
        }));
      }catch(error){
        console.log("Error fetching Additional data",error)
      }
    };
    fetchAdditionalData();
  },[])

  const getApiEndpoint = async (formData) => {
    try {
      setIsLoading(true); 
      const genderValue = formData.gender.toLowerCase() === 'female' ? 'F' : 'M';

      const profileData = {
        user: {
          full_name: formData.full_name,
          address: formData.address,
          landmark: formData.landmark,
          pin_code: formData.pin_code,
          district: formData.district,
          state: formData.state,
          email: formData.email,
          phone_number: formData.phone_number,
        },
        profile_image: formData.profileImage || null, 
        date_of_birth: formData.date_of_birth,
        gender: genderValue,
        dealer: formData.dealer,
        franchisee: formData.franchisee,
        payout_required: formData.payout_required
      };

      await postProfileData(profileData); // For posting the data

      setTimeout(() => {
        setIsLoading(false); 
        setIsModalOpen(true); // Open the ModalComponent
        setTimeout(() => {
          navigate("/my-services"); 
        }, 5000); 
      }, 2000); 

      return { success: true, data: formData };
    } catch (error) {
      console.error('Error handling form data:', error);
      return { success: false, error: error.message };
    }
  };

  return (
    <div className="min-h-screen bg-dark-gray flex items-center justify-center">
      <FormComponent
        fieldConfigs={fieldConfigs}
        buttonConfig={buttonConfig}
        inputConfig={inputConfig}
        apiEndpoint={getApiEndpoint}
        profile={profile}
        initialData={formData} // Pass the initial data to the form
      />

      {/* ModalComponent wrapping ReusableModal */}
      {isModalOpen && (
        <ModalComponent 
          isOpen={isModalOpen} 
          onClose={() => setIsModalOpen(false)} // Close modal on button click
          width="400px" // Set desired width
          height="h-fit" // Set desired height
        >
          <ReusableModal
            isLoading={isLoading}
            imageSrc={image}
            heading="Congratulations!"
            contentLines={["Your account is ready to use."]}
            redirectMessage="You will be redirected to the Home Page in a few seconds."
          />
        </ModalComponent>
      )}
    </div>
  );
};

export default FillYourProfile;
