import React from 'react'
import './Quotes.css'
import MainLayout from '../../components/MainLayout/MainLayout'
import Button from '../../components/Button/Button'
import InfoItem from '../../components/InfoItem/InfoItem'
import { useNavigate } from 'react-router-dom'

const Quotes = () => {

    const navigate = useNavigate();

  const quotes = [
    {
      id:1,
      text:'You fall to the level of your systems.',
    },
  ]

  return (
    <MainLayout>
      <div className='quotes-container'>
        <div className='quotes-header'>
          <h1>Quotes</h1>

          <Button text="Add Quote" />
        </div>

        <div className='quotes-list'>
          {
            quotes.map((quote) => (

              <div key={quote.id} className='quote-item'>
                    <InfoItem label={"Quote:"} value={quote.text}/>
                    <InfoItem label={"Page-No:"} value={quote.text}/>
                    <InfoItem label={"Chapter:"} value={quote.text}/>
                    <InfoItem label={"Speaker:"} value={quote.text}/>
                    <InfoItem label={"Comments:"} value={quote.text}/>

                <div className='quote-actions'>
                  <Button text="Edit" onClick={() => navigate("/edit-quote")} />
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
          }

        </div>
      </div>
    </MainLayout>
  )
}

export default Quotes