import React from "react";
import CardComponent from "./CardComponent";
import TransactionCardComponent from "./TransactionCardComponent"

const TransactionComponent = () => {
  const head = "TRANSACTIONS";
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
    
        <CardComponent Head={head} >
        <TransactionCardComponent details={details}/> 
        </CardComponent>
      </div>
    
  );
};

export default TransactionComponent;
