import React, { useEffect, useState } from 'react'
import './Thoughts.css'
import MainLayout from '../../components/MainLayout/MainLayout'
import Button from '../../components/Button/Button'
import { useNavigate, useParams } from 'react-router-dom'
import InfoItem from '../../components/InfoItem/InfoItem'
import { deleteThought, getThoughtsByBooks } from '../../services/thoughtService'
import Loader from '../../components/Loader/Loader'
import EmptyState from '../../components/EmptyState/EmptyState'

const Thoughts = () => {

    const navigate = useNavigate()

    const {id} = useParams()

    const [thoughts, setThoughts] = useState([])
    const [loading, setLoading] = useState(true)

    useEffect(() => {
      const fetchThoughts = async () => {
        try{
          const data = await getThoughtsByBooks(id)

          setThoughts(data);
        } catch (error) {
          console.error(error)
        } finally{
          setLoading(false)
        }
      }
      fetchThoughts()
    },[id])

    const handleDelete = async(thoughtId) => {
      const confirmed = window.confirm(
        "Delete this thought?"
      )
      if(!confirmed) return

      try{
        await deleteThought(thoughtId)

        setThoughts(
          thoughts.filter(
            (thought) => thought.id !== thoughtId
          )
        )
      } catch (error) {
        console.error(error)
      }
    }

    if(loading) {
      return <Loader/>
    }

  return (
    <MainLayout>
        <div className='thoughts-container'>
            <div className='thoughts-header'>
                <h1>Thoughts</h1>
                <Button 
                  text="Add Thought" 
                  onClick={() => navigate(`/books/${id}/add-thought`)}/>
            </div>

            <div className='thought-list'>
                {thoughts.length > 0 ? (
                  thoughts.map((thought) => (
                    <div key={thought.id} className='thought-item'>
                        <InfoItem 
                          label="Type:" 
                          value={thought.type}
                        />
                        <InfoItem 
                          label="Title:" 
                          value={thought.title}
                        />
                        <InfoItem 
                          label="Thought:" 
                          value={thought.content}
                        />
                        <InfoItem 
                          label="Page-No:" 
                          value={thought.page_number}
                        />
                        <InfoItem 
                          label="Mood:" 
                          value={thought.mood}
                        />

                        <div className='thought-actions'>
                            <Button 
                              text="Edit" 
                              onClick={() => navigate(`/thoughts/${thought.id}/edit`)}
                            />
                            <Button 
                              text="Delete"
                              onClick={() => handleDelete(thought.id)}                            
                            />
                        </div>
                    </div>
                ))
              ) : (                
                  <EmptyState message="No thoughts added yet."/>
              )
              }
            </div>
        </div>
    </MainLayout>
  )
}

export default Thoughts