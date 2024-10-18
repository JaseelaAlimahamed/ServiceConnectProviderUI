import React, { useState } from 'react';
import { FaCopy } from 'react-icons/fa';
import { SlOptionsVertical } from "react-icons/sl";
import { FaShareFromSquare } from "react-icons/fa6";
import { FiDownload } from "react-icons/fi";
import { IoPrintOutline } from "react-icons/io5";

const ReceiptForm = ({ data }) => {
  const [copied, setCopied] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const copyToClipboard = (text) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  const handleToggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen); // Toggle the dropdown visibility
};

  return (
    <>
      <div className='flex justify-end'>
                <div className="relative">
                    <button onClick={handleToggleDropdown} className="text-white">
                        <SlOptionsVertical className="h-[24px] w-[24px] text-black mt-3" />
                    </button>
                    {isDropdownOpen && (
                        <div className="absolute right-0 mt-2 me-3 w-40 bg-slate-300 text-black border border-gray-300 rounded shadow-lg ">
                            <ul className="flex flex-col p-2">
                                <li className="hover:bg-white cursor-pointer p-2 flex items-center gap-3" onClick={() => alert('Share clicked')}>Share <FaShareFromSquare /></li>
                                <li className="hover:bg-white cursor-pointer p-2 flex items-center gap-3" onClick={() => alert('Download clicked')}>Download <FiDownload /></li>
                                <li className="hover:bg-white cursor-pointer p-2 flex items-center gap-3" onClick={() => alert('Print clicked')}>Print <IoPrintOutline /></li>
                            </ul>
                        </div>
                    )}
                </div>
      </div>
      <div className="max-w-md mx-auto bg-slate-100 mb-5 shadow-lg rounded-lg overflow-hidden">
        <div className="p-4">
          <div className="flex justify-center items-center mb-10 text-black">
            <img src="/Receipt.png" alt="" />
          </div>

          <div className="mb-8 flex justify-center">
            <img src="/BAR CODE.png" alt="Barcode" className=" h-24 w-3/4 " />
          </div>

          {data.map((item, index) => (
            <div key={index} className="flex text-sm text-gray-600 justify-between py-2 border-b border-gray-200 last:border-b-0">
              <span className="text-gray-900 me-3">{item.label} : </span>
              {item.label === 'TransactionID' ? (
                <div className="flex items-center ">
                  <span className="font-semibold mr-2">{item.value}</span>
                  <button
                    onClick={() => copyToClipboard(item.value)}
                    className="text-blue-500 hover:text-blue-700 focus:outline-none"
                    title={copied ? "Copied!" : "Copy to clipboard"}
                  >
                    <FaCopy size={16} />
                  </button>
                </div>
              ) : item.label === 'Status' ? (
                <div className={`font-semibold px-2 text-black ${item.value.toLowerCase() === 'paid' ? 'bg-green-600' : 'bg-red-600'}`}>
                  {item.value}
                </div>
              ) : (
                <span className="font-semibold">{item.value}</span>
              )}
            </div>
          ))}
        </div>
      </div>
    </>

  );
};

export default ReceiptForm;

