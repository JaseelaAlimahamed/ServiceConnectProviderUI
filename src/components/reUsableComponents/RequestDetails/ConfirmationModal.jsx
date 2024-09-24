import React from 'react';

function ConfirmationModal({ isOpen, title, content, onConfirm, onCancel }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-white rounded-lg p-6 w-96 shadow-lg">
        <h2 className="text-xl font-semibold mb-4">{title}</h2>
        <p className="mb-6">{content}</p>
        <div className="flex justify-end space-x-4">
          <button 
            onClick={onCancel} 
            className="bg-gray-200 px-4 py-2 rounded-md"
          >
            Cancel
          </button>
          <button 
            onClick={onConfirm} 
            className="bg-red-500 text-white px-4 py-2 rounded-md"
          >
            Confirm
          </button>
        </div>
      </div>
    </div>
  );
}

export default ConfirmationModal;
