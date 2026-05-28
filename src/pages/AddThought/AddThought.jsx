import React,{useState} from 'react'
import './AddThought.css'
import MainLayout from '../../components/MainLayout/MainLayout'
import Select from '../../components/Select/Select'
import Input from '../../components/Input/Input'
import Textarea from '../../components/Textarea/Textarea'
import Button from '../../components/Button/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { createThought } from '../../services/thoughtService'

const AddThought = () => {

    const navigate = useNavigate()
    const {id} = useParams()

    const [formData, setFormData] = useState({
        type: '',
        title: '',
        content: '',
        page_number: '',
        mood: '',
    })

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        })
    }

    const handleSubmit = async () => {
        try {

            await createThought({
                ...formData,
                book_id: id,
            })

            navigate(`/books/${id}/thoughts`)

        } catch(error) {
            console.error(error)
            alert(error.message)
        }
    }


  return (
    <MainLayout>
        <div className='add-thought-container'>
            <div className='add-thought-card'>
                <h1>Add Thought</h1>
                <div className='add-thought-form'>
                    <Select 
                        label="Thought type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        options={["Before", "During", "After"]}
                    />
                    <Input
                        label="Title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                        placeholder="Enter Title"
                    />
                    <Textarea
                        label="Content"
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                        placeholder="Write your thoughts"
                    />
                    <Input
                        label="Page Number"
                        name="page_number"
                        value={formData.page_number}
                        onChange={handleChange}
                        placeholder='Enter page number'
                    />
                    <Input
                        label="Mood"
                        name="mood"
                        value={formData.mood}
                        onChange={handleChange}
                        placeholder='Happy, Emotional...'
                    />
                    <Button text="Save Thought" onClick={handleSubmit}/>
                </div>
            </div>
        </div>
    </MainLayout>
  )
}

export default AddThought