import React, { useEffect, useState } from 'react'
import './Books.css'
import MainLayout from '../../components/MainLayout/MainLayout'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'
import Select from '../../components/Select/Select'
import BookCard from '../../components/BookCard/BookCard'
import { getBooks } from '../../services/bookService'
import Loader from '../../components/Loader/Loader'
import { useNavigate } from 'react-router-dom'

const Books = () => {

  const navigate = useNavigate();

  const [books, setBooks] = useState([])
  const [statusFilter,setStatusFilter] = useState('');
  const [langFilter, setLangFilter] = useState('');
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchBooks = async () => {
        try{
            const data = await getBooks()
            setBooks(data)
        } catch(error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    fetchBooks()
  },[])

  if(loading) {
    return <Loader/>
  }

  return (
    <MainLayout>
        <div className='books-container'>
            <div className='books-header'>
                <div>
                    <h1 className='books-title'>My Books</h1>
                    <p className='books-subtitle'>Manage your reading collection</p>
                </div>
                <Button text="Add Book" onClick={() => navigate('/add-book')}/>
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
                            author={book.author}
                            progress={book.progress_percentage}
                            status={book.status}
                        />
                    ))
                }
            </div>
        </div>
    </MainLayout>
  )
}

export default Books