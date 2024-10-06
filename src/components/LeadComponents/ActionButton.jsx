import React from 'react';
import Button from '../../components/reUsableComponents/ServiceRequestList/Button';

const ActionButton = ({ label, onClick, color, width }) => {
  return (
    <Button label={label} color={color} width={width} onClick={onClick} />
  );
};

export default ActionButton;
