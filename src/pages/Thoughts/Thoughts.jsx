import React from 'react'
import './Thoughts.css'
import MainLayout from '../../components/MainLayout/MainLayout'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import InfoItem from '../../components/InfoItem/InfoItem'

const Thoughts = () => {

    const navigate = useNavigate()

     const thoughts = [
    {
      id:1,
      type:'During',
      title:'Amazing pacing',
      content:'Really enjoying this.',
      page_no:20,
      mood:'Happy'
    },
    {
      id:2,
        type:'During',
      title:'Interesting idea',
      content:'Habits compound over time.',
    //   page_no:80,
      mood:'neutral'
    },
  ]

  return (
    <MainLayout>
        <div className='thoughts-container'>
            <div className='thoughts-header'>
                <h1>Thoughts</h1>
                <Button text="Add Thought" onClick={() => navigate("/add-thought")}/>
            </div>
            <div className='thought-list'>
                {thoughts.map((thought) => (
                    <div key={thought.id} className='thought-item'>
                        <InfoItem label="Type:" value={thought.type}/>
                        <InfoItem label="Title:" value={thought.title}/>
                        <InfoItem label="Thought:" value={thought.content}/>
                        <InfoItem label="Page-No:" value={thought.page_no}/>
                        <InfoItem label="Mood:" value={thought.mood}/>
                        <div className='thought-actions'>
                            <Button text="Edit" onClick={() => navigate("/edit-thought")}/>
                            <Button 
                              text="Delete"
                              onClick={() => {
                                const confirmed = window.confirm("Delete this thought?")
                                if(confirmed) {
                                  console.log("Deleted")
                                }
                              }}
                            
                            />
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </MainLayout>
  )
}

export default Thoughts