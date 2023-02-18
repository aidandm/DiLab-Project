import React, { useState } from 'react';

function QuestionComponent({ question }) {
  // state to keep track of the selected button
  const [selectedButton, setSelectedButton] = useState(null);

  // function to handle button click event
  const handleButtonClick = (value) => {
    setSelectedButton(value);
  };

  // array of button values and labels (if any)
  const buttons = [
    { value: '1', label: 'Disagree strongly' },
    { value: '2', label: 'Disagree' },
    { value: '3', label: 'Disagree slightly' },
    { value: '4', label: 'Neither agree nor disagree' },
    { value: '5', label: 'Agree slightly' },
    { value: '6', label: 'Agree' },
    { value: '7', label: 'Agree strongly' },
  ];

  // styles for the buttons
  const buttonStyle = {
    border: '2px solid #4d4d4d',
    borderRadius: '50%',
    cursor: 'pointer',
    height: '50px',
    width: '50px',
    backgroundColor: 'transparent',
    margin: '0 5px',
  };

  // styles for the selected button
  const selectedButtonStyle = {
    border: '2px solid #87CEFA',
    backgroundColor: '#87CEFA',
  };

  // styles for the button container
  const buttonContainerStyle = {
    display: 'flex',
    justifyContent: 'space-between',
    width: '85%',
    margin: '0 auto',
    marginBottom: '60px',
  };

  // styles for the question text
  const questionStyle = {
    borderBottom: '1px solid black',
    paddingBottom: '10px',
    marginBottom: '20px',
  };

  // styles for the button label text
  const labelStyle = {
    textAlign: 'center',
    fontSize: '14px',
    marginTop: '5px',
  };

  return (
    <div>
      {/* display the question text */}
      <h2 style={questionStyle}>{question}</h2>
      {/* render the buttons and their labels (if any) */}
      <div style={buttonContainerStyle}>
        {buttons.map((button) => (
          <div key={button.value} style={{position: "relative"}}>
            {/* display the button element */}
            <button
              style={{ ...buttonStyle, ...(selectedButton === button.value ? selectedButtonStyle : {}) }}
              onClick={() => handleButtonClick(button.value)}
            />
            {/* display the label (if any) */}
            {selectedButton === button.value && (
              <p style={{ ...labelStyle, position: "absolute", bottom: "-30px", left: "50%", transform: "translateX(-50%)", whiteSpace: "nowrap" }}>
                {button.label}
              </p>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default QuestionComponent;

