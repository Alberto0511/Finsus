import React, { useState } from 'react';
import { SlArrowDown } from 'react-icons/sl';

const Dropdown = ({ label, options, selectedOption, onOptionSelect }) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="select-container">
      <label className="select-label">{label}</label>
      <div
        className={`select-header ${isOpen ? 'active' : ''}`}
        onClick={toggleDropdown}
      >
        {selectedOption ? (
          <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
            <span className="option-time">{selectedOption.time || selectedOption}</span>
            {selectedOption.percentage && (
              <span className="option-percentage">{selectedOption.percentage}</span>
            )}
          </div>
        ) : (
          <span className="placeholder"></span>
        )}
        <SlArrowDown className={`select-icon ${isOpen ? 'rotate' : ''}`} />
      </div>
      {isOpen && (
        <div className="select-options">
          {options.map((option, index) => (
            <div
              key={index}
              className="select-option"
              onClick={() => {
                onOptionSelect(option);
                toggleDropdown();
              }}
            >
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }}>
                <span className="option-time">{option.time || option}</span>
                {option.percentage && (
                  <span className="option-percentage">{option.percentage}</span>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default Dropdown;
