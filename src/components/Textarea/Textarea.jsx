import React from 'react'
import './Textarea.css'
const Textarea = ({label,placeholder,value,onChange,name}) => {
  return (
    <div className='textarea-container'>
        {label && (
            <label className='textarea-label'>{label}</label>
        )}

        <textarea 
            className='textarea-field'
            placeholder={placeholder}
            value={value}
            onChange={onChange}
            name={name}
        />
    </div>
  )
}

export default Textarea