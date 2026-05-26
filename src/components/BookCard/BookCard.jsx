import React from 'react'
import './BookCard.css'
import ProgressBar from '../ProgressBar/ProgressBar'
const BookCard = ({title,author,status,progress,onClick, cover_image,}) => {
  return (
  <div className='book-card-container' >

    <div className='book-card-top'>
      <div className='book-card-cover'>      
        {
          cover_image ? (            
            <img
              src={cover_image}
              alt={title}
              className='book-card-image'
            />            
            ) : (            
            <div className='book-card-placeholder'>
              📚
            </div>    
          )
        }    
      </div>        
      <div className='book-card-content'>        
        <h3 className='book-card-title'> {title} </h3>        
        <p className='book-card-author'> {author} </p>        
        <span className='book-card-status'> {status} </span> 
        <span className = 'book-card-view' onClick={onClick}>View Book</span>       
      </div>        
    </div>
        
    <div className='book-card-progress'>        
      <ProgressBar progress={progress}/>        
      <p className='book-card-progress-text'>
        {progress}% 
      </p>        
    </div>        
    </div>
  )
}

export default BookCard