import React, { useState } from 'react'
import './Books.css'
import MainLayout from '../../components/MainLayout/MainLayout'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Select from '../../components/Select/Select'
import BookCard from '../../components/BookCard/BookCard'

const Books = () => {

    const books = [
    {
      id:1,
      title:'Atomic Habits',
    },
    {
      id:2,
      title:'Deep Work',
    },
    {
      id:3,
      title:'The Alchemist',
    },
      {
      id:1,
      title:'Atomic Habits',
    },
    {
      id:2,
      title:'Deep Work',
    },
    {
      id:3,
      title:'The Alchemist',
    },
  ]

  const [statusFilter,setStatusFilter] = useState('');
  const [langFilter, setLangFilter] = useState('');

  return (
    <MainLayout>
        <div className='books-container'>
            <div className='books-header'>
                <div>
                    <h1 className='books-title'>My Books</h1>
                    <p className='books-subtitle'>Manage your reading collection</p>
                </div>
                <Button text="Add Book"/>
            </div>
            <div className='books-controls'>
                <Input label="Search books" placeholder="Search books..."/>
                                <div className='books-filter'>
                    <Select 
                        label="Filter by Language"
                        name="language"
                        value={langFilter}
                        onChange={(e) => setLangFilter(e.target.value)}
                        options={["All","Tamil","English"]}/>
                </div>
                <div className='books-filter'>
                    <Select 
                        label="Filter by Status"
                        name="status"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        options={["All","Ongoing","Completed","Paused","Dropped"]}/>
                </div>
                
            </div>
            <div className='books-grid'>
                {
                    books.map((book) => (
                        <BookCard 
                            key={book.id}
                            title={book.title}
                        />
                    ))
                }
            </div>
        </div>
    </MainLayout>
  )
}

export default Books