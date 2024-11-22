import React, { useEffect, useState } from 'react';
import TransactionComponent from '../../components/serviceProviderTransactions/TransactionComponent';
import { paymentTransactions } from '../../services/providerAxios';

function TransactionsPage() {
  const [transactions, setTransactions] = useState([]);

  useEffect(() => {
    const fetchTransaction = async () => {
      try {
        const data = await paymentTransactions(); 

        console.log('API response data:', data);
        setTransactions(Array.isArray(data) ? data : []);
      } catch (error) {
        console.error('Error fetching transactions:', error);
      }
    };

    fetchTransaction(); 

  }, []); 

  return (
    <div>
      <TransactionComponent details={transactions} />
    </div>
  );
}

export default TransactionsPage;
