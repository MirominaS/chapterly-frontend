import React from 'react'
import './Dashboard.css'
import MainLayout from '../../components/MainLayout/MainLayout'
import StatCard from '../../components/StatCard/StatCard'
import BookCard from '../../components/BookCard/BookCard'
const Dashboard = () => {
  return (
    <MainLayout>
      <div className='dashboard-container'>
        <div className='dashboard-header'>
          <h1>Dashboard</h1>
          <p>Track your journey</p>
        </div>
        {/* stats */}
        <div className='dashboard-stats'>
          <StatCard title="Total Books" value="24"/>
          <StatCard title="Completed" value="12"/>
          <StatCard title="Currently Reading" value="5"/>
          <StatCard title="Pages Read" value="8450"/>
        </div>
        {/* recent books */}
        <div className='dashboard-section'>
          <div className='dashboard-section-header'>
            <h2>Recent Books</h2>
          </div>
          <div className='dashboard-books'>
            <BookCard title="Pookkuzhi" author="Perumal murugan" progress="100" status="Completed"/>
          </div>
        </div>
      </div>
    </MainLayout>
  )
}

export default Dashboard