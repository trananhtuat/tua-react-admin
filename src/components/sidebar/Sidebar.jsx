import React from 'react'

import './sidebar.css'
import SidebarItem from './SidebarItem'

import { Link } from 'react-router-dom'

import logo from '../../assets/images/logo.png'

import sidebar_items from '../../assets/JsonData/sidebar_routes.json'

const Sidebar = (props) => {

    const location = props.location

    const activeItem = sidebar_items.findIndex(item => item.route === location.pathname)

    return (
        <div className="sidebar">
            <div className="sidebar__logo">
                <img src={logo} alt="company logo" />
            </div>
            {
                sidebar_items.map((item, key) => (
                    <Link to={item.route} key={key}>
                        <SidebarItem title={item.display_name} icon={item.icon} active={key === activeItem}/>
                    </Link>
                ))
            }
        </div>
    )
}

export default Sidebar