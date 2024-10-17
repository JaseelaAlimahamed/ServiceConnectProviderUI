import ReceiptForm from "../../components/E-Receipt/ReceiptForm";


const Receipt = () => {
    const receiptData = [
      { label: 'Name', value: 'Scott R. Shoemake' },
      { label: 'Email ID', value: 'shoemake.redial@gmail.com' },
      { label: 'Course', value: '3d Character Illustration Cre...' },
      { label: 'Category', value: 'Web Development' },
      { label: 'TransactionID', value: 'SK345680976' },
      { label: 'Price', value: '$55.00' },
      { label: 'Date', value: 'Nov 20, 202X / 15:45' },
      { label: 'Status', value: 'Paid' },
    ];
  
    return (
      <div className="px-3">
        <ReceiptForm data={receiptData} />
      </div>
    );
  };

export default Receipt 