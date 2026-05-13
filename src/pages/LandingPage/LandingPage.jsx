import React from 'react'
import './LandingPage.css'
import PublicNavbar from '../../components/PublicNavbar/PublicNavbar'
import '../../components/Button/Button'
import Button from '../../components/Button/Button'
import { useNavigate } from 'react-router-dom'
import { FaBook } from "react-icons/fa";
import { TfiThought } from "react-icons/tfi";
import { BsStars } from "react-icons/bs";
import { MdAnalytics } from "react-icons/md";

const LandingPage = () => {
    const navigate = useNavigate();
  return (
    <div className='landing-container'>
        <PublicNavbar/>
    {/* hero */}
        <div className='hero-section'>
            <div className='hero-background-circle hero-circle-1'></div>
            <div className='hero-background-circle hero-circle-2'></div>

            <div className='hero-content'>
                <p className='hero-tag'>Your personal Reading Companion</p>
                <h2 className='hero-title'>
                    Track your Reading Journey In A Beautiful Way
                </h2>

                <p className='hero-description'>
                    Organize books, save quotes,
                    capture thoughts, and understand
                    your reading habits with Chapterly.
                </p>

                <div className='hero-buttons'>
                    <Button text={"Get Started"} onClick={() => {navigate("/register")}}/>
                    <Button text={"Login"} onClick={() => navigate("/login")}/>
                </div>
            </div>
        </div>
    {/* features */}
        <div id='features' className='featurs-section'>
            <div className='section-heading'>
                <p className='section-tag'>FEATURES</p>
                <h2 className='section-title'>
                    Everything you need for Reading
                </h2>
                <p className='section-description'>
                    Built for readers who want more that just tracking books
                </p>
            </div>

            <div className='features-grid'>
                <div className='feature-card'>
                    <div className='feature-icon'><FaBook /></div>
                    <h3>Track Books</h3>
                    <p>
                        Manage and monitor your reading progress easily
                    </p>
                </div>
                <div className='feature-card'>
                    <div className='feature-icon'><TfiThought /></div>
                    <h3>Save Thoughts</h3>
                    <p>
                        Capture your feelings and reactions while reading.
                    </p>
                </div>
                <div className='feature-card'>
                    <div className='feature-icon'><BsStars /></div>
                    <h3>Collect Quotes</h3>
                    <p>
                        Save meaningful quotes and saying from your favorite books.
                    </p>
                </div>
                <div className='feature-card'>
                    <div className='feature-icon'><MdAnalytics /></div>
                    <h3>Reading Analytics</h3>
                    <p>
                        Understand your reading habits and patterns.
                    </p>
                </div>
            </div>


        </div>
    </div>
  )
}

export default LandingPage