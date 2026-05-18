import './BookDetails.css'



import ProgressBar from '../../components/ProgressBar/ProgressBar'
import Button from '../../components/Button/Button'
import MainLayout from '../../components/MainLayout/MainLayout'
import { useNavigate } from 'react-router-dom'

const BookDetails = () => {

  const navigate = useNavigate();

  const book = {
    title:'Atomic Habits',
    author:'James Clear',
    status:'Ongoing',
    currentPage:120,
    totalPages:320,
    progress:38,
    description:
      'An easy and proven way to build good habits and break bad ones.',
  }

  return (
    <MainLayout>
      <div className='book-details-container'>
        {/* top */}
        <div className='book-details-top'>
          <div className='book-cover'> 📚 </div>

          <div className='book-info'>
            <h1 className='book-title'>{book.title}</h1>
            <p className='book-author'>{book.author}</p>
            <span className='book-status'>{book.status}</span>
            <p className='book-description'>{book.description}</p>

            <div className='book-progress'>
              <div className='book-progress-info'>
                <span>Progress</span>
                <span>{book.currentPage} / {book.totalPages}</span>
              </div>

              <ProgressBar progress={book.progress} />
            </div>

            <div className='book-actions'>
              <Button text="Update Progress" />
              <Button text="Add Thought" onClick={() => navigate("/add-thought")}/>
              <Button text="Add Quotes" onClick={() => navigate("/add-quote")} />

            </div>
          </div>
        </div>

        {/* thoughts */}

        <div className='book-section'>
          <div className='book-section-header'>
            <h2>Thoughts</h2>
            <div className='book-section-actions'>
              <Button text="View All" />
              <Button text="Add Thought"  />
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
              <Button text="View All" />
              <Button text="Add Thought" />
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