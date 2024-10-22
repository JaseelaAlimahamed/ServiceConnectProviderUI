import React, { useState } from "react";
import PaymentModal from "./PaymentMethodModal";

const
  PaymentMethods = () => {
    const [selectedMethod, setSelectedMethod] = useState(""); // State to track the selected payment method
    const [isModalOpen, setIsModalOpen] = useState(false); // State to track modal visibility
    const [isLoading, setIsLoading] = useState(true); // State for modal loading

    // Sample payment data, which you can modify as needed
    const paymentData = {
      amount: 75,
      currency: "RS",
      methods: [
        { id: "paypal", label: "Paypal" },
        { id: "googlePay", label: "Google Pay" },
        { id: "applePay", label: "Apple Pay" },
      ],
    };

    // Function to handle the selection of payment method
    const handleSelect = (method) => {
      setSelectedMethod(method);
    };

    // Function to handle the payment process and open the modal
    const handlePayment = () => {
      if (!selectedMethod) {
        console.log("No payment method selected");
      } else {
        console.log({
          method: selectedMethod,
          amount: paymentData.amount,
          currency: paymentData.currency,
        });

        // Simulate loading and then show modal content
        setIsLoading(true);
        setIsModalOpen(true);
        setTimeout(() => {
          setIsLoading(false); // After 2 seconds, stop loading and show content
        }, 2000);
      }
    };
    const handleCloseModal = () => {
      setIsModalOpen(false);
    };


    return (
      <div className="min-h-screen bg-light-gray p-1 flex items-center justify-center flex-col relative">
        {/* Modal (conditionally rendered) */}
        {isModalOpen && (
          <div className="fixed inset-0 z-50">
            <PaymentModal
              isLoading={isLoading}
              imageSrc="https://via.placeholder.com/150"
              heading="Payment Successful"
              contentLines={[
                `You have selected ${selectedMethod}`,
                `Amount: ${paymentData.currency} ${paymentData.amount}`,
              ]}
              redirectMessage="You will be redirected shortly."
              onClose={handleCloseModal}
            />
          </div>
        )}

        {/* Payment Section */}
        <div className="flex flex-col items-center justify-center space-y-6">
          {/* Graphic Design Section */}
          <div className="w-[200px] md:w-[400px] lg:w-[550px] h-[134px] rounded-lg bg-white shadow-md flex justify-center md:justify-evenly items-center space-x-5">
            <div>
              <div className="w-[100px] h-[100px] bg-black rounded-xl"></div>
            </div>
            <div>
              <p className="text-[#FF6B00] text-[12px] md:text-[14px] lg:text-[16px] font-semibold font-input">
                Graphic Design
              </p>
              <p className="text-[#202244] text-[16px] md:text-[18px] lg:text-[20px] font-default font-semibold">
                Setup your Graphic Design
              </p>
            </div>
          </div>

          {/* Payment Method Description */}
          <div>
            <p className="text-[14px] md:text-[16px] lg:text-[18px] text-[#545454] font-input">
              Select the Payment Methods you Want to use
            </p>
          </div>

          {/* Payment Methods */}
          <div className="flex flex-col items-center space-y-3">
            {paymentData.methods.map((method) => (
              <div
                key={method.id}
                className="w-[200px] md:w-[400px] lg:w-[550px] h-[60px] bg-white flex justify-end items-center rounded-lg shadow-md"
              >
                <label className="rounded-md cursor-pointer flex items-center p-3">
                  <span className="text-sm md:text-base font-semibold p-3">{method.label}</span>
                  <input
                    type="radio"
                    name="paymentMethod"
                    className="form-radio h-5 w-5 text-green-600"
                    checked={selectedMethod === method.id}
                    onChange={() => handleSelect(method.id)}
                  />
                </label>
              </div>
            ))}
          </div>

          {/* Add New Payment Method Button */}
          <div className="w-[200px] md:w-[400px] lg:w-[550px] h-[62px] flex justify-end mt-9">
            <div className="w-[62px] h-[62px] bg-[#1D1F2A] rounded-full flex justify-center items-center shadow-md">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="2em"
                height="2em"
                viewBox="0 0 256 256"
              >
                <path
                  fill="white"
                  d="M224 128a8 8 0 0 1-8 8h-80v80a8 8 0 0 1-16 0v-80H40a8 8 0 0 1 0-16h80V40a8 8 0 0 1 16 0v80h80a8 8 0 0 1 8 8"
                />
              </svg>
            </div>
          </div>

          {/* Pay Button */}
          <button
            onClick={handlePayment}
            className="w-[360px] md:w-[500px] lg:w-[700px] h-[60px] bg-[#1D1F2A] rounded-full text-white flex justify-center items-center mt-4 shadow-md"
          >
            PAY {paymentData.currency} {paymentData.amount}
          </button>
        </div>

      </div>
    );
  };

export default PaymentMethods;


