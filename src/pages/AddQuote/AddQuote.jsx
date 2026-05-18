import React from 'react'
import './AddQuote.css'
import MainLayout from '../../components/MainLayout/MainLayout'
import Textarea from '../../components/Textarea/Textarea'
import Input from '../../components/Input/Input'
import Button from '../../components/Button/Button'

const AddQuote = () => {
  return (
    <MainLayout>
        <div className='add-quote-container'>
            <div className='add-quote-card'>
                <h1>Add Quote</h1>

                <div className='add-quote-form'>
                    <Textarea
                        label="Quote"
                        placeholder="Enter quote"
                    />
                    <Input label="Page Number"/>
                    <Input label="Chapter"/>
                    <Input label="Speaker"/>
                    <Textarea label="Comment"/>
                    <Button text="Save Quote"/>
                </div>
            </div>
        </div>
    </MainLayout>
  )
}

export default AddQuote