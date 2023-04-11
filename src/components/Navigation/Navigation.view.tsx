import React from 'react'
import { navMenu } from './NavMenu'
import { Link } from 'react-router-dom'
import './Navigation.scss'


const Navigation: React.FC = () => {
    return (
        <nav id="navigation" >
            {navMenu.map((item, index) => (
                <ul key={index} className="nav-list">
                    <span className="icon"><Link to={item.url}>{item.icon}</Link></span>
                    <li><Link to={item.url} >{item.link}</Link></li>
                </ul>
            ))}
        </nav >
    )
}

export default Navigation