import React from 'react'
import './EditBook.css'
import MainLayout from '../../components/MainLayout/MainLayout'
import Input from '../../components/Input/Input'
import Textarea from '../../components/Textarea/Textarea'
import Select from '../../components/Select/Select'
import Button from '../../components/Button/Button'

const EditBook = () => {

  const book = {
    title:'Atomic Habits',
    author:'James Clear',
    genre:'Self Help',
    format:'Paperback',
    language:'English',
    totalPages:320,
    coverImage:'https://example.com/image.jpg',
    description:
      'A practical guide to building good habits.',
  }

  return (
    <MainLayout>
      <div className='edit-book-container'>
        <div className='edit-book-card'>

          <h1> Edit Book</h1>

          <div className='edit-book-form'>

            <Input
              label="Title"
              value={book.title}
            />

            <Input
              label="Author"
              value={book.author}
            />

            <Input
              label="Genre"
              value={book.genre}
            />

            <Select
              label="Format"
              value={book.format}
              options={[
                'Paperback',
                'Hardcover',
                'Ebook',
                'Audiobook',
              ]}
            />

            <Input
              label="Language"
              value={book.language}
            />

            <Input
              label="Total Pages"
              value={book.totalPages}
              type='number'
            />

            <Input
              label="Cover Image URL"
              value={book.coverImage}
            />

            <Textarea
              label="Description"
              value={book.description}
            />

            <Button text="Update Book" />

          </div>
        </div>
      </div>

    </MainLayout>
  )
}

export default EditBook