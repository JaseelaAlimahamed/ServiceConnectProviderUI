import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import PaymentModal from '../../../components/serviceProvider/editServiceComponents/editServiceModal';
import EditServiceForm from '../../../components/serviceProvider/editServiceComponents/EditServiceForm';
import NavbarHead from '../../../components/serviceProvider/layout/NavbarHead';

const EditService = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [leadBalance, setLeadBalance] = useState(0);
  const [formValues, setFormValues] = useState(null);
 

  const navigate = useNavigate();
  const { id } = useParams(); // Get the service ID from the route params

  const handleConfirmPayment = () => {
    setIsLoading(true);

    // Process and log the form data
    console.log('Form Data:', formValues);

    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      setShowPaymentModal(false);
      navigate('/my-services');
    }, 2000);
  };

  useEffect(() => {
    // You can fetch the service details by ID here if necessary
    console.log('Service ID:', id);
    // Fetch the data and update formValues if needed
  }, [id]);


  return (
    
    <div className="flex bg-light-gray overflow-auto">
      
      <div className="flex flex-col items-center p-4 bg-light-gray rounded-md md:shadow-lg w-full min-h-screen justify-center overflow-auto">
        <EditServiceForm
          serviceId={id}  // Pass the service ID to the form
          setFormValues={setFormValues}
          setLeadBalance={setLeadBalance}
          setShowPaymentModal={setShowPaymentModal}
        />

        {showPaymentModal && (
          <PaymentModal
            isLoading={isLoading}
            leadBalance={leadBalance}
            onClose={() => setShowPaymentModal(false)}
            onConfirm={handleConfirmPayment}
          />
        )}
      </div>
    </div>
    
  );
};

export default EditService;
