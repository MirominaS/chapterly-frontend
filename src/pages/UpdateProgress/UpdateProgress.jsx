import React from 'react'
import './UpdateProgress.css'
import MainLayout from '../../components/MainLayout/MainLayout'
import Input from '../../components/Input/Input'
import Select from '../../components/Select/Select'
import Button from '../../components/Button/Button'

const UpdateProgress = () => {

  const book = {
    currentPage:120,
    totalPages:320,
    status:'Ongoing',
    rating:'5',
    startDate:'2026-05-01',
    finishedDate:'',
  }

  return (
    <MainLayout>

      <div className='update-progress-container'>

        <div className='update-progress-card'>

          <h1> Update Progress </h1>

          <div className='update-progress-form'>

            <Input
              label="Current Page"
              value={book.currentPage}
              type='number'
            />

            <Input
              label="Total Pages"
              value={book.totalPages}
              type='number'
            />

            <Select
              label="Status"
              value={book.status}
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
              value={book.rating}
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
              value={book.startDate}
              type='date'
            />

            <Input
              label="Finished Date"
              value={book.finishedDate}
              type='date'
            />

            <Button text="Update Progress" />

          </div>

        </div>

      </div>

    </MainLayout>
  )
}

export default UpdateProgress