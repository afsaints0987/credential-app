import React from 'react'
import './Header.scss'
import * as FaIcons from 'react-icons/fa'

const Header: React.FC = () => {
    return (
        <header className="container-flex bg-primary text-light">
            <span id="logo">White Label</span>
            <span id="user"><FaIcons.FaUserCircle/> User</span>
        </header>
    )
}

export default Header
