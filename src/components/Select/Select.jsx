import React, { useState } from 'react'
import "./Select.css"

const Select = ({label,options = [],value,onChange,name}) => {
    const [isOpen, setIsOpen] = useState(false);

    const handleSelect = (option) => {
        onChange({
            target: {name, value: option,},
        })
        setIsOpen(false)
    }
  return (
    <div className='select-container'>
       {label && (
        <label className='select-label'>{label}</label>
       )}
       <div className='select-custom'>
        <div className='select-field' onClick={() => setIsOpen(!isOpen)}>
            {value || "Select"}
        </div>
        {isOpen && (
            <div className='select-dropdown'>
            {options.map((option) => (
                <div key={option} className={`select-option ${
                    value === option ? "active-option" : ""
                }`}
                onClick={() => handleSelect(option)}
                >
                    {option}
                </div>
            ))}
            </div>
        )}
       </div>
    </div>
  )
}

export default Select