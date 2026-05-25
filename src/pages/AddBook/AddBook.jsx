import React, { useState } from 'react'
import './AddBook.css'
import MainLayout from '../../components/MainLayout/MainLayout'
import Input from '../../components/Input/Input'
import Select from '../../components/Select/Select'
import Textarea from '../../components/Textarea/Textarea'
import Button from '../../components/Button/Button'
import { createBook } from '../../services/bookService'
import { useNavigate } from 'react-router-dom'

const AddBook = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    title: '', author: '', genre: '', format: '', language: '',
     total_pages: '', cover_image: '', description: ''
  })
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name] : e.target.value
    })
  }

  const handleSubmit = async () => {
    try {
      await createBook(formData)
      navigate('/books')
    } catch (error) {
      console.log(error)
      alert(error.message)
    }
  }

  return (
    <MainLayout>
      <div className='add-book-container'>
        <div className='add-book-card'>

          <h1> Add New Book </h1>

          <div className='add-book-form'>

            <Input
              label="Title"
              placeholder='Enter book title'
              name="title"
              value={formData.title}
              onChange={handleChange}
            />

            <Input
              label="Author"
              placeholder='Enter author name'
              name="author"
              value={formData.author}
              onChange={handleChange}
            />

            <Input
              label="Genre"
              placeholder='Fantasy, Self Help...'
              name="genre"
              value={formData.genre}
              onChange={handleChange}
            />

            <Select
              label="Format"
              options={[
                'Paperback',
                'Hardcover',
                'Ebook',
                'Audiobook',
              ]}
              name="format"
              value={formData.format}
              onChange={handleChange}
            />

            <Input
              label="Language"
              placeholder='English'
              name="language"
              value={formData.language}
              onChange={handleChange}
            />

            <Input
              label="Total Pages"
              placeholder='320'
              type='number'
              name="total_pages"
              value={formData.total_pages}
              onChange={handleChange}
            />

            <Input
              label="Cover Image URL"
              placeholder='Paste image URL'
              name="cover_image"
              value={formData.cover_image}
              onChange={handleChange}
            />

            <Textarea
              label="Description"
              placeholder='Write book description...'
              name="description"
              value={formData.description}
              onChange={handleChange}
            />

            <Button text="Add Book" onClick={handleSubmit}/>

          </div>
        </div>
      </div>
    </MainLayout>
    )
}

export default AddBook