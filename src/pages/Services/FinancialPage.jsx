import React, { useState, useEffect } from "react";
import { FaArrowDown, FaArrowUp, FaWifi, FaShoppingBag } from "react-icons/fa";
import { FiMoreVertical } from "react-icons/fi";
import imagepath from "../../assets/images/Ellipse309.png";
import {
  paymentTransactions,
  financialDetails,
  profileDetails,
} from "../../services/providerAxios";

const FinancialPage = () => {
  const [profile, setProfile] = useState(null);
  const [financialData, setFinancialData] = useState(null);
  const [transactionData, setTransactionData] = useState(null);
  const [loading, setLoading] = useState(true); // Loading state
  const [error, setError] = useState(null); // Error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const profileData = await profileDetails();
        setProfile(profileData);

        const financialData = await financialDetails();
        setFinancialData(financialData);

        const transactionData = await paymentTransactions();
        setTransactionData(transactionData);

        setLoading(false);
      } catch (err) {
        setError("Failed to fetch data. Please try again.");
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div className="text-center mt-10">Loading...</div>;
  }

  if (error) {
    return <div className="text-center mt-10 text-red-500">{error}</div>;
  }

  const handleCardClick = (transaction) => {
    console.log(
      `Transaction clicked: ${transaction.sender_full_name} -> ${transaction.receiver_full_name} | Amount: ${transaction.amount_paid}`
    );
  };

  return (
    <div className="bg-light-gray px-4 md:px-8 py-6 min-h-screen">
      {/* Profile Section */}
      <div className="flex items-center mb-6">
        <img
          className="w-16 h-16 rounded-lg object-cover"
          src={profile?.profile_image || imagepath}
          alt="Profile"
        />
        <div className="ml-4">
          <p className="text-lg font-medium text-gray-800">
            {profile?.user?.full_name || "No Name"}
          </p>
          <p className="text-sm text-gray-500">Welcome Back!</p>
        </div>
      </div>

      {/* Financial Summary */}
      <div className="grid grid-cols-2 gap-6 mb-8">
        <div className="bg-green-100 p-4 rounded-lg shadow-md flex items-center justify-between">
          <FaArrowUp className="text-green-600 text-3xl bg-white rounded-full p-2" />
          <div>
            <p className="text-sm text-gray-600">Income</p>
            <p className="text-xl font-bold text-gray-800">
              ${financialData?.income || "0.00"}
            </p>
          </div>
        </div>
        <div className="bg-red-100 p-4 rounded-lg shadow-md flex items-center justify-between">
          <FaArrowDown className="text-red-600 text-3xl bg-white rounded-full p-2" />
          <div>
            <p className="text-sm text-gray-600">Expenditure</p>
            <p className="text-xl font-bold text-gray-800">
              ${financialData?.expenditure || "0.00"}
            </p>
          </div>
        </div>
      </div>

      {/* Account Balance */}
      <div className="bg-blue-500 p-6 rounded-lg shadow-md mb-8 text-white">
        <p className="text-lg font-semibold">Account Balance</p>
        <p className="text-2xl font-bold">${financialData?.balance || "0.00"}</p>
      </div>

      {/* Transactions */}
      <div>
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-semibold text-gray-800">Transactions</h3>
          <button className="p-2 rounded-full hover:bg-gray-200">
            <FiMoreVertical size={20} />
          </button>
        </div>

        {transactionData?.length ? (
          <div className="space-y-4">
            {transactionData.map((transaction, index) => (
              <div
                key={index}
                onClick={() => handleCardClick(transaction)}
                className="bg-white p-4 rounded-lg shadow-md flex justify-between items-center hover:bg-gray-100 cursor-pointer"
              >
                <div>
                  <p className="text-sm font-semibold text-gray-800">
                    {transaction.sender_full_name || "Unknown Sender"} →
                    {transaction.receiver_full_name || "Unknown Receiver"}
                  </p>
                  <p className="text-xs text-gray-500">
                    {transaction.invoice_type || "General"} |{" "}
                    {transaction.payment_status || "Pending"}
                  </p>
                </div>
                <p className="text-sm font-bold text-gray-800">
                  ${transaction.amount_paid || "0.00"}
                </p>
              </div>
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500">No transactions found.</p>
        )}
      </div>
    </div>
  );
};

export default FinancialPage;
