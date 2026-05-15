import React from 'react'
import './AddThought.css'
import MainLayout from '../../components/MainLayout/MainLayout'
import Select from '../../components/Select/Select'
import Input from '../../components/Input/Input'
import Textarea from '../../components/Textarea/Textarea'
import Button from '../../components/Button/Button'

const AddThought = () => {
  return (
    <MainLayout>
        <div className='add-thought-container'>
            <div className='add-thought-card'>
                <h1>Add Thought</h1>
                <div className='add-thought-form'>
                    <Select 
                        label="Thought type"
                        options={["Before", "During", "After"]}
                    />
                    <Input
                        label="Title"
                        placeholder="Enter Title"
                    />
                    <Textarea
                        label="Content"
                        placeholder="Write your thoughts"
                    />
                    <Input
                        label="Page Number"
                        placeholder='Enter page number'
                    />
                    <Input
                        label="Mood"
                        placeholder='Happy, Emotional...'
                    />
                    <Button text="Save Thought"/>
                </div>
            </div>
        </div>
    </MainLayout>
  )
}

export default AddThought