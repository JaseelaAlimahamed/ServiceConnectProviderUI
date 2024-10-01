import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import PaymentModal from './editServiceComponents/editServiceModal';
import EditServiceForm from './editServiceComponents/EditServiceForm';

const EditService = () => {
  const [showPaymentModal, setShowPaymentModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [leadBalance, setLeadBalance] = useState(0);
  const [formValues, setFormValues] = useState(null);

  const navigate = useNavigate();

  const handleConfirmPayment = () => {
    setIsLoading(true);

    // Process and log the form data
    console.log('Form Data:', formValues);

    // Simulate payment processing
    setTimeout(() => {
      setIsLoading(false);
      setShowPaymentModal(false);
      navigate('/Registered-Services');
    }, 2000);
  };

  return (
    <div className="flex bg-[#D9D9DB] overflow-auto">
      <div className="flex flex-col items-center p-6 bg-[#D9D9DB] rounded-md md:shadow-lg w-screen min-h-screen justify-center overflow-auto">
        <EditServiceForm
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

