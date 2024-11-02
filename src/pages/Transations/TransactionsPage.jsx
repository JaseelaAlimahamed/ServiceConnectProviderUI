import React, { useEffect, useState } from 'react';
import TransactionComponent from '../../components/serviceProviderTransactions/TransactionComponent';
import { paymentTransactions } from '../../services/providerAxios';

function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);
  const accessToken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzMwNjIyMzM5LCJpYXQiOjE3MzA1NjQ3MzksImp0aSI6IjBkMDMzZGEwNWMxNzRlNzBiODI1ZDI5Y2FlODdiMjJlIiwidXNlcl9pZCI6NH0.uqYntIRcaDFTHPezXJDwgnCtqAfgV004wUhgGQngQ5I";
  // const accessToken = useSelector((state) => state.auth.token);

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const data = await paymentTransactions(accessToken);

        console.log('API response data:', data);
        setTransactions(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    if (accessToken) fetchTransaction();
  }, [accessToken]);

  return (
    <div>
      <TransactionComponent details={transactions} />
    </div>
  );
}

export default TransactionsPage;