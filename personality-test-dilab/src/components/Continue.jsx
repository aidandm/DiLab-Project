import React from 'react';

function ContinueButton({ disabled, onClick }) {
  const buttonStyle = {
    display: 'block',
    margin: '0 auto',
    marginTop: '20px',
    padding: '10px 20px',
    backgroundColor: '#87CEFA',
    border: 'none',
    borderRadius: '5px',
    color: '#fff',
    fontSize: '16px',
    fontWeight: 'bold',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
  };

  return (
    <button style={buttonStyle} disabled={disabled} onClick={onClick}>
      Continue
    </button>
  );
}

export default ContinueButton;
