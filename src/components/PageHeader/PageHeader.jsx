import React from 'react'
import './PageHeader.css'

const PageHeader = ({title,subtitle}) => {
  return (
    <div className='page-header-container'>
        <h1 className='page-header-title'>{title}</h1>
        {subtitle && (
            <p className='page-header-subtitle'>{subtitle}</p>
        )}
    </div>
  )
}

export default PageHeader