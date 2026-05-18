import React from 'react'
import './EditThought.css'
import MainLayout from '../../components/MainLayout/MainLayout'
import Select from '../../components/Select/Select'
import Input from '../../components/Input/Input'
import Textarea from '../../components/Textarea/Textarea'
import Button from '../../components/Button/Button'

const EditThought = () => {
    const thought = {
        type:'during',
        title:'Amazing pacing',
        content:'Really enjoying this book.',
        pageNumber:120,
        mood:'Excited',
    }
  return (
    <MainLayout>
        <div className='edit-thought-container'>
            <div className='edit-thought-card'>
                <h1>Edit Thought</h1>
                <div className='edit-thought-form'>
                    <Select
                        label="Thought Type"
                        value={thought.type}
                        options={["Before", "During","After"]}
                    />
                    <Input
                        label="Title"
                        value={thought.title}
                    />

                    <Textarea
                        label="Content"
                        value={thought.content}
                    />

                    <Input
                        label="Page Number"
                        value={thought.pageNumber}
                    />

                    <Input
                        label="Mood"
                        value={thought.mood}
                    />

                    <Button text="Update Thought" />
                </div>
            </div>
        </div>
    </MainLayout>
  )
}

export default EditThought