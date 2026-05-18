import React from 'react'
import './EditQuote.css'
import MainLayout from '../../components/MainLayout/MainLayout'
import Textarea from '../../components/Textarea/Textarea'
import Button from '../../components/Button/Button'
import Input from '../../components/Input/Input'

const EditQuote = () => {
      const quote = {
        quoteText:'You do not rise to the level of your goals. You fall to the level of your systems.',
        pageNumber:120,
        chapter:'Chapter 4',
        speaker:'James Clear',
        comment:'One of the most powerful lines in the book.',
    }

  return (
    <MainLayout>
        <div className='edit-quote-container'>
            <div className='edit-quote-card'>
                <h1>Edit Quote</h1>
                <div className='edit-quote-form'>

                    <Textarea
                        label="Quote"
                        value={quote.quoteText}
                    />

                    <Input
                        label="Page Number"
                        value={quote.pageNumber}
                    />

                    <Input
                        label="Chapter"
                        value={quote.chapter}
                    />

                    <Input
                        label="Speaker"
                        value={quote.speaker}
                    />

                    <Textarea
                        label="Comment"
                        value={quote.comment}
                    />

                    <Button text="Update Quote" />

                </div>
            </div>
      </div>
    </MainLayout>
  )
}

export default EditQuote