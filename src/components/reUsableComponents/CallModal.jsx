import React from 'react';
import ReactModal from 'react-modal';
import Button from './ServiceRequestList/Button';

const CallModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <ReactModal
      isOpen={isOpen}
      onRequestClose={onClose}
      contentLabel="Do you want to close?"
      style={{
        overlay: {
         margin:'',
         backgroundColor:'transparent',
          backdropFilter: 'blur(5px)', // Dark overlay
        },
        content: {
          top: "50%",
          left: "50%",
          right: "auto",
          bottom: "auto",
          transform: "translate(-50%, -50%)",
          width: "90%", // Control width for 2-line sentence
          maxWidth: "500px", // Adjust max width
          padding: "20px", // Padding for better spacing
          borderRadius: "10px",
          textAlign: "center",
          backgroundColor: "#D9D9DB",
          
        },
      }}
    >
      {/* Adjust text formatting for two lines */}
      <h2 className='font-heading font-medium tracking-wide text-lg mb-4' style={{ wordWrap: 'break-word', lineHeight: '1.5em' }}>
        By attending your lead, your balance will be reduced by one.
      </h2>
      
      {/* Button to close the modal */}
      <Button label={'Okay'} color={'dark-gray'} onClick={onClose} width={'296px'}/>
    </ReactModal>
  );
};

export default CallModal;
