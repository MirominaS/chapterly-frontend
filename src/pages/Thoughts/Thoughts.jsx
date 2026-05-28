import React, { useEffect, useState } from 'react'
import './Thoughts.css'
import MainLayout from '../../components/MainLayout/MainLayout'
import Button from '../../components/Button/Button'
import { useNavigate, useParams } from 'react-router-dom'
import InfoItem from '../../components/InfoItem/InfoItem'
import { deleteThought, getThoughtsByBooks } from '../../services/thoughtService'
import Loader from '../../components/Loader/Loader'
import EmptyState from '../../components/EmptyState/EmptyState'
import { IoMdClose } from "react-icons/io";

const Thoughts = () => {

    const navigate = useNavigate()

    const {id} = useParams()

    const [thoughts, setThoughts] = useState([])
    const [loading, setLoading] = useState(true)
    const [selectedThought, setSelectedThought] = useState(null)

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

            <h1>
              Thoughts
            </h1>

            <Button
              text="Add Thought"
              onClick={() =>
                navigate(`/books/${id}/add-thought`)
              }
            />

          </div>

          <div className='thought-list'>

            {
              thoughts.length > 0 ? (

                thoughts.map((thought) => (

                  <div
                    key={thought.id}
                    className='thought-item'
                  >

                    <h3 className='thought-title'>
                      {
                        thought.title ||
                        "Untitled Thought"
                      }
                    </h3>

                    <p className='thought-preview'>

                      {
                        thought.content?.length > 140
                          ? `${thought.content.slice(0, 140)}...`
                          : thought.content
                      }

                    </p>

                    <div className='thought-actions'>

                      <Button
                        text="View"
                        onClick={() =>
                          setSelectedThought(thought)
                        }
                      />

                    </div>

                  </div>

                ))

              ) : (

                <EmptyState
                  message="No thoughts added yet."
                />

              )
            }

          </div>

        </div>
          {
            selectedThought && (
            <div
              className='thought-modal-overlay'
              onClick={() =>
                setSelectedThought(null)
              }
            >
            <div
              className='thought-modal'
              onClick={(e) => e.stopPropagation()}
              >

            <button
              className='thought-modal-close'
              onClick={() => setSelectedThought(null)}>

            <IoMdClose />

            </button>

            <h2>
              {selectedThought.title || "Untitled Thought" }
            </h2>

              <InfoItem
                label="Type"
                value={selectedThought.type}
              />
              <InfoItem
                label="Thought"
                value={selectedThought.content}
              />
              <InfoItem
                label="Page No"
                value={selectedThought.page_number}
              />
              <InfoItem
                label="Mood"
                value={selectedThought.mood}
              />
              <div className='thought-modal-actions'>
                <Button
                  text="Edit"
                  onClick={() =>
                    navigate(
                      `/thoughts/${selectedThought.id}/edit`
                    )
                  }
                />
                <Button
                  text="Delete"
                  onClick={() =>
                    handleDelete(
                      selectedThought.id
                    )
                  }
                />
              </div>
              </div>
            </div>
          )
        }
    </MainLayout>
  )
}

export default Thoughts