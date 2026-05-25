import React from 'react'
import './EditBook.css'
import MainLayout from '../../components/MainLayout/MainLayout'
import Input from '../../components/Input/Input'
import Textarea from '../../components/Textarea/Textarea'
import Select from '../../components/Select/Select'
import Button from '../../components/Button/Button'
import { useState, useEffect } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { getBookById, updateBook } from '../../services/bookService'
import Loader from '../../components/Loader/Loader'

const EditBook = () => {

  const navigate = useNavigate();
  const { id } = useParams()
  const [formData, setFormData] = useState({
    title: '',
    author: '',
    genre: '',
    format: '',
    language: '',
    total_pages: '',
    cover_image: '',
    description: '',
  })
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await getBookById(id);
        setFormData({
          title: data.title || '',
          author: data.author || '',
          genre: data.genre || '',
          format: data.format || '',
          language: data.language || '',
          total_pages: data.total_pages || '',
          cover_image: data.cover_image || '',
          description: data.description || '',
        })         
      } catch(error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchBook()
  }, [id])

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })  
  }

  const handleSubmit = async (e) => {
    try {
      await updateBook(id, formData)
      navigate(`/books/${id}`)
    } catch(error) {
      console.error(error)
      alert(error.message)
    }
  }

  if(loading) {
    return <Loader/>
  }

  return (
    <MainLayout>
      <div className='edit-book-container'>
        <div className='edit-book-card'>

          <h1> Edit Book</h1>

          <div className='edit-book-form'>

            <Input
              label="Title"
              name="title"
              value={formData.title}
              onChange={handleChange}
            />

            <Input
              label="Author"
              name="author"
              value={formData.author}
              onChange={handleChange}
            />

            <Input
              label="Genre"
              name="genre"
              value={formData.genre}
              onChange={handleChange}
            />

            <Select
              label="Format"
              name="format"
              value={formData.format}
              onChange={handleChange}
              options={[
                'Paperback',
                'Hardcover',
                'Ebook',
                'Audiobook',
              ]}
            />

            <Input
              label="Language"
              name="language"
              value={formData.language}
              onChange={handleChange}
            />

            <Input
              label="Total Pages"
              name="total_pages"
              value={formData.total_pages}
              onChange={handleChange}
              type='number'
            />

            <Input
              label="Cover Image URL"
              name="cover_image"
              value={formData.cover_image}
              onChange={handleChange}
            />

            <Textarea
              label="Description"
              name="description"
              value={formData.description}
              onChange={handleChange}
            />

            <Button text="Update Book" onClick={handleSubmit} />

          </div>
        </div>
      </div>

    </MainLayout>
  )
}
export default EditBook