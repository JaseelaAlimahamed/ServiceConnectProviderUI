import React from "react";


const ModalComponent = ({ isOpen, onClose,width,height, children }) => {
  if (!isOpen) return null; // Do not render the modal if it is not open

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 px-4">
  
      <div className="bg-white p-6 rounded-lg shadow-lg w-72 relative"
           style={{
             width: width , 
             height: height ,
           }} onClick={(e)=> e.stopPropagation()}>

        {/* Close Modal Button */}
        <button
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
          onClick={onClose}
        >
          &times;
        </button>
        {children} {/* Render whatever content is passed to the Modal */}
      </div>
    </div>
  );
};

export default ModalComponent;
