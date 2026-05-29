import React, { useEffect, useState } from 'react'
import './Quotes.css'
import MainLayout from '../../components/MainLayout/MainLayout'
import Button from '../../components/Button/Button'
import InfoItem from '../../components/InfoItem/InfoItem'
import { useNavigate, useParams } from 'react-router-dom'
import { getQuotesByBook } from '../../services/quoteService'
import EmptyState from '../../components/EmptyState/EmptyState'

const Quotes = () => {

    const navigate = useNavigate();
    const {id} = useParams()
    
    const [quotes, setQuotes] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const fetchQuotes = async () => {
        try {
          const data = await getQuotesByBook(id)
          setQuotes(data)
        } catch (error) {
          console.error(error)
        } finally {
          setLoading(false)
        }
      } 
      fetchQuotes()
    },[id])
  return (
    <MainLayout>
      <div className='quotes-container'>
        <div className='quotes-header'>
          <h1>Quotes</h1>

          <Button text="Add Quote" onClick={() => navigate(`/books/${id}/add-quote`)}/>
        </div>

        <div className='quotes-list'>
          {quotes.length > 0 ? (
            quotes.map((quote) => (

              <div key={quote.id} className='quote-item'>
                    <InfoItem label={"Quote:"} value={quote.quote_text}/>
                    <InfoItem label={"Page-No:"} value={quote.page_number}/>
                    <InfoItem label={"Chapter:"} value={quote.chapter}/>
                    <InfoItem label={"Speaker:"} value={quote.speaker}/>
                    <InfoItem label={"Comments:"} value={quote.comment}/>

                <div className='quote-actions'>
                  <Button text="Edit" onClick={() => navigate(`/quotes/${quote.id}/edit`)} />
                  <Button 
                    text="Delete"
                    onClick={() => {
                        const confirmed = window.confirm("Delete quote?")
                        if(confirmed) {
                            console.log("Deleted")
                        }
                    }}
                 />
                </div>

              </div>
            ))
          ): (
            <EmptyState message="No quotes added yet"/>
          )
          }

        </div>
      </div>
    </MainLayout>
  )
}

export default Quotes