import './BookDetails.css'
import { useEffect, useState } from 'react'
import ProgressBar from '../../components/ProgressBar/ProgressBar'
import Button from '../../components/Button/Button'
import MainLayout from '../../components/MainLayout/MainLayout'
import { useNavigate } from 'react-router-dom'
import { useParams } from 'react-router-dom'
import Loader from '../../components/Loader/Loader'
import { getBookById } from '../../services/bookService'

const BookDetails = () => {

  const navigate = useNavigate();

  const [book, setBook] = useState(null);
  const [loading, setLoading] = useState(true)

  const { id } = useParams();

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await getBookById(id);
        setBook(data)
      } catch(error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    fetchBook()
  }, [id])
  

  if(loading) {
    return <Loader/>
  }
 
  return (
    <MainLayout>
      <div className='book-details-container'>
        {/* top */}
        <div className='book-details-top'>
          <div className='book-cover'> 📚 </div>
          <div className='delete-book-wrapper'>
            <Button 
              text="Delete Book" 
              onClick={() => {
                        const confirmed = window.confirm("Delete quote?")
                        if(confirmed) {
                            console.log("Deleted")
                        }
                        navigate('/books')
                    }}
            />
          </div>

          <div className='book-info'>
            <h1 className='book-title'>{book.title}</h1>
            <p className='book-author'>{book.author}</p>
            <span className='book-status'>{book.status}</span>
            <p className='book-description'>{book.description}</p>

            <div className='book-progress'>
              <div className='book-progress-info'>
                <span>Progress</span>
                <span>{book.current_page} /{book.total_pages}</span>
              </div>

              <ProgressBar progress={book.progress_percentage} />
            </div>

            <div className='book-actions'>
              <Button text="Edit book" onClick={() => navigate('/edit-book')}/>
              <Button text="Update Progress" onClick={() => navigate('/update-progress')} />
            </div>
          </div>
        </div>

        {/* thoughts */}

        <div className='book-section'>
          <div className='book-section-header'>
            <h2>Thoughts</h2>
            <div className='book-section-actions'>
              <Button text="View All" onClick={() => navigate('/thoughts')} />
              <Button text="Add Thought" onClick={() => navigate('/add-thought')}  />
            </div>
          </div>

          <div className='thought-card'>
            <h3>Loving the pacing so far</h3>

            <p>
              The concepts are practical and
              easy to understand.
            </p>

          </div>
        </div>

        {/* quotes */}

        <div className='book-section'>
          <div className='book-section-header'>
            <h2>Quotes</h2>
            <div className='book-section-actions'>
              <Button text="View All" onClick={() => navigate('/quotes')}/>
              <Button text="Add Quote" onClick={() => navigate('/add-quote')} />
            </div>
          </div>

          <div className='quote-card'>

            <p>
              “You do not rise to the level
              of your goals. You fall to the
              level of your systems.”
            </p>

          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default BookDetails