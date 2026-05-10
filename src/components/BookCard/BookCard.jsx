import React from 'react'
import './BookCard.css'
import ProgressBar from '../ProgressBar/ProgressBar'
const BookCard = ({title,author,status,progress}) => {
  return (
    <div className='book-card-container'>
        <div className='book-card-content'>
            <h3 className='book-card-title'>{title}</h3>
            <p className='book-card-author'>{author}</p>
            <span className='book-card-status'>{status}</span>
        </div>
        <div className='book-card-progress'>
            <ProgressBar progress={progress}/>
            <p className='book-card-progress-text'>{progress}% completed</p>
        </div>
    </div>
  )
}

export default BookCard