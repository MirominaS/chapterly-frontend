import React from 'react'
import './AddBook.css'
import MainLayout from '../../components/MainLayout/MainLayout'
import Input from '../../components/Input/Input'
import Select from '../../components/Select/Select'
import Textarea from '../../components/Textarea/Textarea'
import Button from '../../components/Button/Button'

const AddBook = () => {
  return (
    <MainLayout>
      <div className='add-book-container'>
        <div className='add-book-card'>

          <h1> Add New Book </h1>

          <div className='add-book-form'>

            <Input
              label="Title"
              placeholder='Enter book title'
            />

            <Input
              label="Author"
              placeholder='Enter author name'
            />

            <Input
              label="Genre"
              placeholder='Fantasy, Self Help...'
            />

            <Select
              label="Format"
              options={[
                'Paperback',
                'Hardcover',
                'Ebook',
                'Audiobook',
              ]}
            />

            <Input
              label="Language"
              placeholder='English'
            />

            <Input
              label="Total Pages"
              placeholder='320'
              type='number'
            />

            <Input
              label="Cover Image URL"
              placeholder='Paste image URL'
            />

            <Textarea
              label="Description"
              placeholder='Write book description...'
            />

            <Button text="Add Book" />

          </div>
        </div>
      </div>
    </MainLayout>
    )
}

export default AddBook