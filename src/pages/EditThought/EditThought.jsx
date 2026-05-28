import React, { useEffect, useState } from 'react'
import './EditThought.css'
import MainLayout from '../../components/MainLayout/MainLayout'
import Select from '../../components/Select/Select'
import Input from '../../components/Input/Input'
import Textarea from '../../components/Textarea/Textarea'
import Button from '../../components/Button/Button'
import { useNavigate, useParams } from 'react-router-dom'
import { getThoughtById, updateThought } from '../../services/thoughtService'
import Loader from '../../components/Loader/Loader'

const EditThought = () => {
    const navigate = useNavigate()
    const {id} = useParams()
    const[loading, setLoading] = useState(true)
    const [formData, setFormData] = useState({
        type:'',
        title:'',
        content:'',
        page_number:'',
        mood:'',
    })

    useEffect(() => {
        const fetchThought = async () => {
            try {
                const data = await getThoughtById(id)

                setFormData({
                    type:data.type || '',
                    title:data.title || '',
                    content:data.content || '',
                    page_number:data.page_number || '',
                    mood:data.mood || '',
                });
            } catch(error) {
                console.error(error)
            } finally {
                setLoading(false)
            }
        }
        fetchThought()
    },[id])

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    }

     const handleSubmit = async () => {
        try {
            await updateThought(id, formData);
            navigate(-1);

        } catch(error) {
            console.error(error);
            alert(error.message);
        }
    }

    if(loading){
        return <Loader/>
    }

  return (
    <MainLayout>
        <div className='edit-thought-container'>
            <div className='edit-thought-card'>
                <h1>Edit Thought</h1>
                <div className='edit-thought-form'>
                    <Select
                        label="Thought Type"
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        options={["Before", "During","After"]}
                    />
                    <Input
                        label="Title"
                        name="title"
                        value={formData.title}
                        onChange={handleChange}
                    />

                    <Textarea
                       label="Content"
                        name="content"
                        value={formData.content}
                        onChange={handleChange}
                    />

                    <Input
                        label="Page Number"
                        name="page_number"
                        value={formData.page_number}
                        onChange={handleChange}
                    />

                    <Input
                        label="Mood"
                        name="mood"
                        value={formData.mood}
                        onChange={handleChange}
                    />

                    <Button text="Update Thought" onClick={handleSubmit} />
                </div>
            </div>
        </div>
    </MainLayout>
  )
}

export default EditThought