import React from 'react'
import './InfoItem.css'

const InfoItem = ({label,value}) => {
    if (!value) return null
  return (
    <div className='info-item'>
        <label className='info-item-label'>{label}</label>
        <p className='info-item-value'>{value}</p>
    </div>
  )
}

export default InfoItem