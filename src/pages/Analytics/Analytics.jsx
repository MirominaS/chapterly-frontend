import React from 'react'
import './Analytics.css'
import MainLayout from '../../components/MainLayout/MainLayout'
import StatCard from '../../components/StatCard/StatCard'
import InfoItem from '../../components/InfoItem/InfoItem'

const Analytics = () => {

      const genres = [
    {
      genre:'Self Help',
      count:12,
    },
    {
      genre:'Fantasy',
      count:7,
    },
    {
      genre:'Psychology',
      count:5,
    },
  ]

  const monthly = [
    {
      month:'January',
      completed:4,
    },
    {
      month:'February',
      completed:6,
    },
    {
      month:'March',
      completed:3,
    },
  ]


  return (
    <MainLayout>
        <div className='analytics-container'>
            <div className='analytics-header'>
                <h1>Analytics</h1>
                <p>Understand your reading habits</p>
            </div>

            <div className='analytics-stats'>
                <StatCard
                    title="Total books"
                    value="24"
                />
                <StatCard
                    title="Completed"
                    value="12"
                />

                <StatCard
                    title="Pages Read"
                    value="8450"
                />
            </div>
            {/* genre */}
            <div className='analytics-section'>
                <h2>Genre Analytics</h2>
                <div className='analytics-list'>
                    {
                        genres.map((item,index) => (
                            <div className='analytics-item' key={index}>
                                <InfoItem value={item.genre}/>
                                <InfoItem value={item.count}/>
                            </div>
                        ))
                    }
                </div>
            </div>
            {/* monthly */}
            <div className='analytics-section'>
                <h2>Montly Reading</h2>
                <div className='analytics-list'>
                    {
                        monthly.map((item,index) => (
                            <div className='analytics-item' key={index}>
                                <InfoItem value={item.month}/>
                                <InfoItem value={item.completed} books/>
                            </div>
                        ))
                    }
                </div>
            </div>
        </div>
    </MainLayout>
  )
}

export default Analytics