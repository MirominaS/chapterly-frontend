import React from 'react'
import './UpdateProgress.css'
import MainLayout from '../../components/MainLayout/MainLayout'
import Input from '../../components/Input/Input'
import Select from '../../components/Select/Select'
import Button from '../../components/Button/Button'
import Loader from '../../components/Loader/Loader'
import {useNavigate, useParams} from 'react-router-dom'
import { getBookById, updateBook} from '../../services/bookService'
import { useState, useEffect } from 'react'

const UpdateProgress = () => {

  const navigate = useNavigate();
  const { id } = useParams()  
  const [loading, setLoading] = useState(true)
  const [formData, setFormData] = useState({
    currentPage: '',
    totalPages: '',
    status: '',
    rating: '',
    startDate: '',
    finishedDate: '',
  })

  useEffect(() => {
    const fetchBook = async () => {
      try {
        const data = await getBookById(id);
        setFormData({
          current_page: data.current_page || '',
          total_pages: data.total_pages || '',
          status: data.status || '',
          rating: data.rating ? String(data.rating) : '',
          start_date: data.start_date || '',
          finished_date: data.finished_date || '',
        });
      } catch(error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };

    fetchBook();
  }, [id]);

  const handleChange = (e) => {
    const {name, value} = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  }

  const handleSubmit = async (e) => {
    try {
      await updateBook(id, formData);
      navigate(`/books/${id}`)
    } catch(error) {
      console.error(error);
      alert(error.message);
    }
  }

  if(loading) {
    return <Loader/>
  }

  return (
    <MainLayout>

      <div className='update-progress-container'>

        <div className='update-progress-card'>

          <h1> Update Progress </h1>

          <div className='update-progress-form'>

            <Input
              label="Current Page"
              name="current_page"
              value={formData.current_page}
              onChange={handleChange}
              type='number'
            />

            <Input
              label="Total Pages"
              name="total_pages"
              value={formData.total_pages}
              onChange={handleChange}
              type='number'
            />

            <Select
              label="Status"
              name="status"
              value={formData.status}
              onChange={handleChange}
              options={[
                'Not Started',
                'Ongoing',
                'Completed',
                'Paused',
                'Dropped',
              ]}
            />

            <Select
              label="Rating"
              name="rating"
              value={formData.rating}
              onChange={handleChange}
              options={[
                'Null',
                '1',
                '2',
                '3',
                '4',
                '5',
              ]}
            />

            <Input
              label="Start Date"
              name="start_date"
              value={formData.start_date}
              onChange={handleChange}
              type='date'
            />

            <Input
              label="Finished Date"
              name="finished_date"
              value={formData.finished_date}
              onChange={handleChange}
              type='date'
            />

            <Button text="Update Progress" onClick={handleSubmit} />

          </div>

        </div>

      </div>

    </MainLayout>
  )
}

export default UpdateProgress