import React, { useState } from 'react'
import './Sidebar.css'
import { NavLink, useNavigate } from 'react-router-dom'
import { MdDashboard } from "react-icons/md";
import { ImBooks } from "react-icons/im";
import { MdAnalytics } from "react-icons/md";
import { HiMiniBars3 } from "react-icons/hi2";
import { IoMdClose } from "react-icons/io";
import Button from '../Button/Button';

const Sidebar = () => {
    const navigate = useNavigate();
    const [isCollapsed, setIsCollapsed] = useState(false)

    const handleLogout = () => {
        localStorage.removeItem('token')
        navigate('/login')
    }

    return (
        <aside
            className={`sidebar-container ${
                isCollapsed ? "collapsed" : ""
            }`}
        >

            <div className='sidebar-top'>

                {!isCollapsed && (
                    <h2 className='sidebar-logo'>
                        Chapterly
                    </h2>
                )}

                <button
                    className='sidebar-toggle'
                    onClick={() => setIsCollapsed(!isCollapsed)}
                >
                    {isCollapsed ? <HiMiniBars3 /> : <IoMdClose />}
                </button>

            </div>

            <nav className='sidebar-nav'>

                <NavLink to="/dashboard" className="sidebar-link">
                    {isCollapsed ? <MdDashboard /> : "Dashboard"}
                </NavLink>

                <NavLink to="/books" className="sidebar-link">
                    {isCollapsed ? <ImBooks /> : "Books"}
                </NavLink>

                <NavLink to="/analytics" className="sidebar-link">
                    {isCollapsed ? <MdAnalytics /> : "Analytics"}
                </NavLink>

            </nav>
            <Button text="Logout" onClick={handleLogout}/>

        </aside>
    )
}

export default Sidebar