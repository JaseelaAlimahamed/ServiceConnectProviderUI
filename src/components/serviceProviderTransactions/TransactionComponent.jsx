import React from "react";
import TransactionCardComponent from "./TransactionCardComponent"

const TransactionComponent = () => {
  const details =[
    {
    title :"Build personal Branding",
    job :"Web Designer",
    status:"Paid",
    img :""
  }, 
  {
    title :"Build personal Branding",
    job :"Web Designer",
    status:"Paid",
    img :""
  },
  {
    title :"Build personal Branding",
    job :"Web Designer",
    status:"Paid",
    img :""
  }
]

  return (
    <div>
    
        
    <TransactionCardComponent details={details} />

   
      </div>
    
  );
};

export default TransactionComponent;
