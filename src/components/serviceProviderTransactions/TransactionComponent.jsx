import React from "react";
import CardComponent from "./CardComponent";
import TransactionCardComponent from "./TransactionCardComponent"

const TransactionComponent = ({ details }) => {
  const head = "TRANSACTIONS";
  // const details = [
  //   {
  //     title: "Build personal Branding",
  //     job: "Web Designer",
  //     status: "Paid",
  //     img: ""
  //   },
  //   {
  //     title: "Build personal Branding",
  //     job: "Web Designer",
  //     status: "Paid",
  //     img: ""
  //   },
  //   {
  //     title: "Build personal Branding",
  //     job: "Web Designer",
  //     status: "Paid",
  //     img: ""
  //   }
  // ]

  return (
    <div className="w-full  min-h-screen  mx-auto bg-light-gray shadow-xl overflow-hidden">
      <TransactionCardComponent details={details} />
    </div>

  );
};

export default TransactionComponent;